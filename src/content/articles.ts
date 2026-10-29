export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; id: string; text: string }
  | { type: 'code'; language: string; code: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'link'; label: string; href: string }
  | {
      type: 'image';
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    };

export interface Article {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  draft: boolean;
  tags: string[];
  body: ArticleBlock[];
  image?: string;
  imageAlt?: string;
  relatedProjects?: string[];
}

declare const __PUBLISHED_ARTICLES__: Article[];

// Add original writing here. Drafts never become routes, links or sitemap entries.
export const articles: Article[] = [];

export function publishedArticles(
  entries: Article[] = import.meta.env.SSR ? articles : __PUBLISHED_ARTICLES__,
) {
  return entries
    .filter((article) => !article.draft)
    .sort((a, b) => Date.parse(b.datePublished) - Date.parse(a.datePublished));
}

export function safeArticleLink(href: string) {
  if (href.startsWith('#')) return true;
  if (href.startsWith('/') && !href.startsWith('//') && !href.includes('\\'))
    return true;
  try {
    return ['https:', 'http:'].includes(new URL(href).protocol);
  } catch {
    return false;
  }
}

export function validateArticles(
  entries: Article[] = articles,
  now = new Date(),
) {
  const slugs = new Set<string>();
  for (const article of entries) {
    if (
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug) ||
      slugs.has(article.slug)
    )
      throw new Error('Invalid or duplicate article slug: ' + article.slug);
    slugs.add(article.slug);
    if (
      !article.title.trim() ||
      !article.description.trim() ||
      !article.body.length
    )
      throw new Error(
        'Articles require a title, description and original body: ' +
          article.slug,
      );
    for (const date of [
      article.datePublished,
      ...(article.dateModified !== undefined ? [article.dateModified] : []),
    ]) {
      if (
        !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?(?:Z|[+-]\d{2}:\d{2})$/.test(
          date,
        ) ||
        !Number.isFinite(Date.parse(date)) ||
        new Date(date.slice(0, 10) + 'T00:00:00Z')
          .toISOString()
          .slice(0, 10) !== date.slice(0, 10)
      )
        throw new Error(
          'Use an ISO 8601 timestamp with a timezone: ' + article.slug,
        );
    }
    if (
      !article.draft &&
      [article.datePublished, article.dateModified].some(
        (date) => date && Date.parse(date) > now.getTime(),
      )
    )
      throw new Error('Keep future articles in draft: ' + article.slug);
    if (
      article.dateModified &&
      Date.parse(article.dateModified) < Date.parse(article.datePublished)
    )
      throw new Error(
        'Article modification precedes publication: ' + article.slug,
      );
    if (
      article.image &&
      (!article.image.startsWith('/') ||
        article.image.startsWith('//') ||
        !article.imageAlt?.trim())
    )
      throw new Error(
        'Article images require a local path and descriptive alt text: ' +
          article.slug,
      );
    const ids = new Set(['root', 'main', 'main-navigation']);
    let hasHeading = false;
    for (const block of article.body) {
      if (block.type === 'heading') {
        if (
          !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(block.id) ||
          ids.has(block.id) ||
          (!hasHeading && block.level === 3)
        )
          throw new Error(
            'Invalid article heading hierarchy or ID: ' + article.slug,
          );
        ids.add(block.id);
        hasHeading = true;
      }
      if (block.type === 'link' && !safeArticleLink(block.href))
        throw new Error('Unsafe article link: ' + article.slug);
      if (
        block.type === 'image' &&
        (!block.src.startsWith('/') ||
          block.src.startsWith('//') ||
          !block.alt.trim() ||
          block.width <= 0 ||
          block.height <= 0)
      )
        throw new Error(
          'Article images need local paths, alt text and dimensions: ' +
            article.slug,
        );
    }
  }
}
