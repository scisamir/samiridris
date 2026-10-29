import { Article, publishedArticles } from '../content/articles';

export type Page =
  | { type: 'home' }
  | { type: 'work' }
  | { type: 'writing' }
  | { type: 'article'; article: Article }
  | { type: 'not-found' };

export function resolvePage(pathname: string): Page {
  const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  if (path === '/') return { type: 'home' };
  if (path === '/work') return { type: 'work' };
  const published = publishedArticles();
  if (path === '/writing' && published.length) return { type: 'writing' };
  const article = published.find((entry) => path === '/writing/' + entry.slug);
  return article ? { type: 'article', article } : { type: 'not-found' };
}

export function indexablePaths() {
  const published = publishedArticles();
  return [
    '/',
    '/work',
    ...(published.length
      ? ['/writing', ...published.map((article) => '/writing/' + article.slug)]
      : []),
  ];
}
