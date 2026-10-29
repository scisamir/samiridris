import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { createSsrLoader } from './ssr.mjs';
import { loadEnv } from 'vite';

const root = process.cwd();
const output = resolve(root, 'dist');
const server = await createSsrLoader();
try {
  const { render, indexablePaths, site, articles, validateArticles } =
    await server.ssrLoadModule('/src/entry-server.tsx');
  validateArticles();
  const template = await readFile(resolve(output, 'index.html'), 'utf8');
  if (
    !template.includes('<!--seo-head-->') ||
    !template.includes('<!--app-html-->')
  )
    throw new Error('Missing HTML prerender placeholders.');
  const options = {
    preview: process.env.VERCEL_ENV === 'preview',
    verification:
      loadEnv('production', root, 'GOOGLE_').GOOGLE_SITE_VERIFICATION || '',
  };
  const paths = indexablePaths();
  for (const path of [...paths, '/404']) {
    const page = render(path === '/404' ? '/__not_found__' : path, options);
    const file = resolve(
      output,
      path === '/' ? 'index.html' : path.slice(1) + '.html',
    );
    await mkdir(dirname(file), { recursive: true });
    await writeFile(
      file,
      template
        .replace('<!--seo-head-->', page.head)
        .replace('<!--app-html-->', page.html),
    );
    console.log('Prerendered ' + path + ' (' + page.status + ')');
  }
  const escapeXml = (value) =>
    value
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&apos;');
  const urls = paths.map((path) => {
    const article = articles.find(
      (entry) => !entry.draft && path === '/writing/' + entry.slug,
    );
    const modified = article && (article.dateModified || article.datePublished);
    return (
      '  <url><loc>' +
      escapeXml(new URL(path, site.origin).href) +
      '</loc>' +
      (modified ? '<lastmod>' + escapeXml(modified) + '</lastmod>' : '') +
      '</url>'
    );
  });
  await writeFile(
    resolve(output, 'sitemap.xml'),
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
      urls.join('\n') +
      '\n</urlset>\n',
  );
  await writeFile(
    resolve(output, 'robots.txt'),
    'User-agent: *\nAllow: /\n\nSitemap: ' + site.origin + '/sitemap.xml\n',
  );
} finally {
  await server.close();
}
