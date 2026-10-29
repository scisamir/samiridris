import { before, after, test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createSsrLoader } from './ssr.mjs';
import { build } from 'vite';
import { elements, attr, textContent } from './check-seo.mjs';

let server;
let metadata;
let content;
let routes;
let renderer;
let site;
let writing;
before(async () => {
  server = await createSsrLoader();
  metadata = await server.ssrLoadModule('/src/seo/metadata.tsx');
  content = await server.ssrLoadModule('/src/content/articles.ts');
  routes = await server.ssrLoadModule('/src/seo/routes.ts');
  renderer = await server.ssrLoadModule('/src/entry-server.tsx');
  site = await server.ssrLoadModule('/src/static/site.ts');
  writing = await server.ssrLoadModule('/src/pages/Writing/Writing.tsx');
});
after(async () => {
  await server?.close();
});

const fixture = () => ({
  slug: 'test-only-article',
  title: 'Test-only original article',
  description: 'A test fixture, never published or written into the build.',
  datePublished: '2025-01-01T10:00:00Z',
  dateModified: '2025-01-02T10:00:00Z',
  draft: false,
  tags: ['Aiken'],
  body: [
    { type: 'heading', level: 2, id: 'reasoning', text: 'Reasoning' },
    { type: 'paragraph', text: 'Original technical reasoning.' },
    { type: 'link', label: 'Related work', href: '/work' },
  ],
});

test('Canonical URLs normalize paths and strip query strings/fragments without accepting other origins', () => {
  assert.equal(
    site.canonicalUrl('/work/?utm_source=test#project'),
    'https://samiridris.com/work',
  );
  assert.equal(site.canonicalUrl('/'), 'https://samiridris.com/');
  assert.throws(() => site.canonicalUrl('https://unrelated.example/work'));
  assert.throws(() => site.canonicalUrl('javascript:alert(1)'));
});

test('JSON-LD escapes closing-script sequences and preserves the original JSON values', () => {
  const value = {
    title: '</script><script>alert("test")</script>\u2028\u2029',
  };
  const serialized = metadata.safeJson(value);
  assert.ok(!serialized.includes('<'));
  assert.deepEqual(JSON.parse(serialized), value);
});

test('Drafts cannot become public article routes or sitemap entries', () => {
  const draft = { ...fixture(), draft: true };
  assert.deepEqual(content.publishedArticles([draft]), []);
  assert.deepEqual(
    content
      .publishedArticles([fixture(), { ...draft, slug: 'other' }])
      .map((article) => article.slug),
    ['test-only-article'],
  );
  if (!content.publishedArticles().length) {
    assert.equal(routes.resolvePage('/writing').type, 'not-found');
    assert.ok(!routes.indexablePaths().includes('/writing'));
  }
  assert.equal(
    routes.resolvePage('/writing/unpublished-example').type,
    'not-found',
  );
});

test('Publishing rejects duplicate slugs, future dates, invalid heading order and unsafe links', () => {
  assert.doesNotThrow(() => content.validateArticles([fixture()]));
  assert.throws(() =>
    content.validateArticles([{ ...fixture(), datePublished: '' }]),
  );
  assert.throws(() =>
    content.validateArticles([
      { ...fixture(), datePublished: '2025-02-31T10:00:00Z' },
    ]),
  );
  assert.throws(() => content.validateArticles([fixture(), fixture()]));
  assert.throws(() =>
    content.validateArticles([
      { ...fixture(), datePublished: '2099-01-01T00:00:00Z' },
    ]),
  );
  assert.throws(() =>
    content.validateArticles([
      {
        ...fixture(),
        body: [
          { type: 'heading', level: 3, id: 'invalid', text: 'Skipped level' },
        ],
      },
    ]),
  );
  assert.throws(() =>
    content.validateArticles([
      {
        ...fixture(),
        body: [{ type: 'link', label: 'Unsafe', href: 'javascript:alert(1)' }],
      },
    ]),
  );
  assert.equal(content.safeArticleLink('//unrelated.example'), false);
});

test('Article metadata and structured data use the article canonical, dates and author', () => {
  const article = fixture();
  const page = { type: 'article', article };
  const schema = metadata.structuredData(page);
  const structured = schema['@graph'].find(
    (item) => item['@type'] === 'Article',
  );
  assert.equal(structured.headline, article.title);
  assert.equal(structured.datePublished, article.datePublished);
  assert.equal(structured.dateModified, article.dateModified);
  assert.equal(structured.author.name, 'Samir Idris');
  assert.equal(
    structured.mainEntityOfPage['@id'],
    'https://samiridris.com/writing/test-only-article#webpage',
  );
  const nodes = elements(metadata.renderHead(page));
  assert.equal(
    attr(
      nodes.find(
        (node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical',
      ),
      'href',
    ),
    'https://samiridris.com/writing/test-only-article',
  );
});

test('Untrusted-looking article strings remain text in content and head markup', () => {
  const attack = '<img src=x onerror=alert(1)>';
  const article = {
    ...fixture(),
    title: attack,
    body: [{ type: 'paragraph', text: attack }],
  };
  const html = renderToStaticMarkup(
    createElement(writing.WritingArticle, { article }),
  );
  assert.ok(!elements(html).some((node) => node.tagName === 'img'));
  const head = elements(metadata.renderHead({ type: 'article', article }));
  assert.equal(head.filter((node) => node.tagName === 'script').length, 1);
  assert.equal(
    textContent(head.find((node) => node.tagName === 'title')),
    attack + ' | Samir Idris',
  );
});

test('Prerendering includes substantive page content and returns 404 for unknown paths', () => {
  const home = renderer.render('/');
  const work = renderer.render('/work');
  assert.equal(home.status, 200);
  assert.ok(
    home.html.includes('Lucent Labs') && home.html.includes('TypeScript'),
  );
  assert.equal(work.status, 200);
  assert.ok(
    work.html.includes('Coverly') &&
      work.html.includes('Cardano Developer Course'),
  );
  const missing = renderer.render('/does-not-exist');
  assert.equal(missing.status, 404);
  assert.ok(missing.head.includes('noindex'));
  assert.ok(!home.head.includes('noindex'));
  assert.ok(renderer.render('/', { preview: true }).head.includes('noindex'));
});

test('Publishing an original article generates its index and route with linked metadata', () => {
  const article = fixture();
  content.articles.push(article);
  try {
    assert.ok(routes.indexablePaths().includes('/writing'));
    assert.ok(routes.indexablePaths().includes('/writing/' + article.slug));
    assert.equal(
      routes.resolvePage('/writing/' + article.slug).type,
      'article',
    );
    const index = renderer.render('/writing');
    assert.equal(index.status, 200);
    assert.ok(index.html.includes('href="/writing/' + article.slug + '"'));
    const page = renderer.render('/writing/' + article.slug);
    assert.equal(page.status, 200);
    assert.ok(page.html.includes('Original technical reasoning.'));
    assert.ok(page.head.includes('"@type":"Article"'));
  } finally {
    content.articles.pop();
  }
});

test('Draft body text is excluded from the production JavaScript bundle', async () => {
  const secret = 'UNPUBLISHED_DRAFT_BODY_MUST_NOT_SHIP';
  let injected = false;
  const result = await build({
    logLevel: 'silent',
    plugins: [
      {
        name: 'test-private-draft',
        enforce: 'pre',
        transform(code, id) {
          if (!id.endsWith('/src/content/articles.ts')) return;
          const changed = code.replace(
            'export const articles: Article[] = [];',
            'export const articles: Article[] = ' +
              JSON.stringify([{ ...fixture(), title: secret, draft: true }]) +
              ';',
          );
          injected = changed !== code;
          return changed;
        },
      },
    ],
    build: { write: false, copyPublicDir: false, emptyOutDir: false },
  });
  assert.ok(injected, 'Test draft was injected into the in-memory module');
  for (const item of Array.isArray(result) ? result : [result]) {
    for (const output of item.output) {
      if (output.type === 'chunk')
        assert.ok(
          !output.code.includes(secret),
          'Draft text leaked into client code',
        );
    }
  }
});
