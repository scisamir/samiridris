import { renderToString } from 'react-dom/server';
import App from './App';
import { indexablePaths, resolvePage } from './seo/routes';
import { renderHead } from './seo/metadata';
import { site } from './static/site';
import { articles, validateArticles } from './content/articles';

export { indexablePaths, site, articles, validateArticles };

export function render(pathname: string, options = {}) {
  const page = resolvePage(pathname);
  return {
    html: renderToString(<App pathname={pathname} />),
    head: renderHead(page, options),
    status: page.type === 'not-found' ? 404 : 200,
  };
}
