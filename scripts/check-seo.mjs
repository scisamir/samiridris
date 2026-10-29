import assert from 'node:assert/strict';
import { access, readFile, readdir } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

export function elements(html) {
  const nodes = [];
  const visit = (node) => {
    if (node.tagName) nodes.push(node);
    for (const child of node.childNodes || []) visit(child);
  };
  visit(parse(html));
  return nodes;
}
export const attr = (node, name) =>
  node.attrs?.find((attribute) => attribute.name === name)?.value;
export const textContent = (node) =>
  node.nodeName === '#text'
    ? node.value
    : (node.childNodes || []).map(textContent).join('');

async function htmlFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await htmlFiles(path)));
    else if (entry.name.endsWith('.html')) files.push(path);
  }
  return files;
}

export async function checkSeo(directory = resolve('dist')) {
  const origin = 'https://samiridris.com';
  const pages = new Map();
  const titles = new Set();
  const descriptions = new Set();
  for (const file of await htmlFiles(directory)) {
    const relative = file
      .slice(directory.length + 1)
      .split(sep)
      .join('/');
    const path =
      relative === 'index.html' ? '/' : '/' + relative.replace(/\.html$/, '');
    const html = await readFile(file, 'utf8');
    const nodes = elements(html);
    const isError = path === '/404';
    const only = (tag, predicate = () => true) => {
      const matching = nodes.filter(
        (node) => node.tagName === tag && predicate(node),
      );
      assert.equal(matching.length, 1, path + ': expected one ' + tag);
      return matching[0];
    };
    const meta = (key, name = 'name') =>
      attr(
        only('meta', (node) => attr(node, name) === key),
        'content',
      );
    const title = textContent(only('title'));
    const description = meta('description');
    assert.ok(title.trim() && description.trim(), path + ': empty metadata');
    assert.ok(
      !html.includes('<!--app-html-->') && !html.includes('<!--seo-head-->'),
      path + ': unresolved placeholders',
    );
    assert.equal(
      nodes.filter((node) => node.tagName === 'h1').length,
      1,
      path + ': expected one H1',
    );
    only('main');
    const ids = nodes.map((node) => attr(node, 'id')).filter(Boolean);
    assert.equal(
      new Set(ids).size,
      ids.length,
      path + ': duplicate element IDs',
    );
    let previous = 0;
    for (const node of nodes.filter((node) => /^h[1-6]$/.test(node.tagName))) {
      const level = Number(node.tagName[1]);
      assert.ok(
        level <= previous + 1,
        path + ': skipped heading level at ' + textContent(node),
      );
      previous = level;
    }
    for (const image of nodes.filter((node) => node.tagName === 'img')) {
      assert.notEqual(
        attr(image, 'alt'),
        undefined,
        path + ': image missing alt text',
      );
      assert.ok(
        Number(attr(image, 'width')) > 0 && Number(attr(image, 'height')) > 0,
        path + ': image missing dimensions',
      );
      const src = attr(image, 'src');
      if (src?.startsWith('/')) await access(resolve(directory, '.' + src));
    }
    const canonicalNodes = nodes.filter(
      (node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical',
    );
    const schemas = nodes.filter(
      (node) =>
        node.tagName === 'script' &&
        attr(node, 'type') === 'application/ld+json',
    );
    if (isError) {
      assert.ok(
        meta('robots').includes('noindex'),
        'Error pages must not be indexed.',
      );
      assert.equal(canonicalNodes.length, 0);
      assert.equal(schemas.length, 0);
    } else {
      assert.equal(
        canonicalNodes.length,
        1,
        path + ': duplicate/missing canonical',
      );
      const expected = new URL(path, origin).href;
      assert.equal(attr(canonicalNodes[0], 'href'), expected);
      assert.equal(meta('og:url', 'property'), expected);
      assert.equal(meta('og:title', 'property'), title);
      assert.equal(meta('og:description', 'property'), description);
      assert.equal(meta('twitter:title'), title);
      assert.equal(meta('twitter:description'), description);
      assert.equal(meta('twitter:card'), 'summary_large_image');
      const image = meta('og:image', 'property');
      assert.equal(meta('twitter:image'), image);
      assert.ok(
        meta('og:image:alt', 'property').trim() &&
          meta('twitter:image:alt').trim(),
      );
      assert.equal(new URL(image).origin, origin);
      await access(resolve(directory, '.' + new URL(image).pathname));
      if (process.env.VERCEL_ENV !== 'preview')
        assert.ok(
          !meta('robots').includes('noindex'),
          path + ': production noindex',
        );
      assert.ok(
        !titles.has(title) && !descriptions.has(description),
        path + ': duplicate title/description',
      );
      titles.add(title);
      descriptions.add(description);
      assert.equal(schemas.length, 1, path + ': duplicate/missing JSON-LD');
      const schema = JSON.parse(textContent(schemas[0]));
      assert.equal(schema['@context'], 'https://schema.org');
      const person = schema['@graph'].find(
        (item) => item['@type'] === 'Person',
      );
      assert.equal(person.name, 'Samir Idris');
      assert.equal(person.alternateName, 'scisamir');
      assert.equal(person.url, origin + '/');
      assert.ok(person.sameAs.includes('https://github.com/scisamir'));
      assert.ok(schema['@graph'].some((item) => item['@type'] === 'WebSite'));
      if (path === '/')
        assert.ok(
          schema['@graph'].some(
            (item) =>
              item['@type'] === 'ProfilePage' &&
              item.mainEntity['@id'] === person['@id'],
          ),
        );
      pages.set(path, { nodes, html });
    }
  }
  for (const [path, { nodes }] of pages) {
    for (const link of nodes.filter((node) => node.tagName === 'a')) {
      const href = attr(link, 'href');
      assert.ok(href, path + ': anchor without href');
      const target = new URL(href, new URL(path, origin));
      if (
        target.origin !== origin ||
        !['http:', 'https:'].includes(target.protocol)
      )
        continue;
      const targetPath =
        target.pathname === '/' ? '/' : target.pathname.replace(/\/+$/, '');
      if (targetPath.match(/\.[^/]+$/)) {
        await access(resolve(directory, '.' + targetPath));
        continue;
      }
      assert.ok(pages.has(targetPath), path + ': broken internal link ' + href);
      if (target.hash)
        assert.ok(
          pages
            .get(targetPath)
            .nodes.some(
              (node) =>
                attr(node, 'id') === decodeURIComponent(target.hash.slice(1)),
            ),
          path + ': missing fragment ' + href,
        );
    }
  }
  const homepage = pages.get('/');
  assert.ok(homepage && pages.has('/work'));
  for (const phrase of [
    'Samir Idris',
    'Lucent Labs',
    'Metera',
    'Cardano',
    'Aiken',
    'Plutus',
    'Rust',
    'TypeScript',
    'Python',
    'computational biology',
  ])
    assert.ok(
      homepage.html.includes(phrase),
      'Missing prerendered identity/content: ' + phrase,
    );
  const robots = await readFile(resolve(directory, 'robots.txt'), 'utf8');
  assert.ok(
    robots.includes('User-agent: *') &&
      robots.includes('Allow: /') &&
      robots.includes('Sitemap: ' + origin + '/sitemap.xml'),
  );
  assert.ok(!/^Disallow:\s*\/\s*$/m.test(robots));
  const sitemap = await readFile(resolve(directory, 'sitemap.xml'), 'utf8');
  const locations = elements(sitemap)
    .filter((node) => node.tagName === 'loc')
    .map(textContent);
  assert.deepEqual(
    new Set(locations),
    new Set([...pages.keys()].map((path) => new URL(path, origin).href)),
  );
  assert.equal(locations.length, pages.size, 'Duplicate sitemap URLs');
  const png = await readFile(resolve(directory, 'samir-idris-social.png'));
  assert.equal(png.subarray(1, 4).toString(), 'PNG');
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
  console.log(
    'SEO checks passed: ' +
      pages.size +
      ' indexable pages, unique metadata, canonical URLs, JSON-LD, heading hierarchy, internal links, images, robots and sitemap.',
  );
  return pages;
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
)
  await checkSeo();
