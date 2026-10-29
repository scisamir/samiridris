import { renderToStaticMarkup } from 'react-dom/server';
import { profile } from '../static/profile';
import { canonicalUrl, site } from '../static/site';
import { Page } from './routes';
import MyProjects from '../static/projects';
import { projectId } from '../static/project-id';

export function pageMetadata(page: Page) {
  const common = {
    image: canonicalUrl(site.socialImage),
    imageAlt: site.socialImageAlt,
    type: 'website',
  };
  switch (page.type) {
    case 'home':
      return {
        ...common,
        title: site.title,
        description: site.description,
        path: '/',
      };
    case 'work':
      return {
        ...common,
        title: 'Engineering Work | Samir Idris',
        description:
          "Explore Samir Idris's software engineering work: Cardano protocols, Aiken and Plutus contributions, developer tools, cloud infrastructure and biotech research.",
        path: '/work',
      };
    case 'writing':
      return {
        ...common,
        title: 'Technical Writing | Samir Idris',
        description:
          'Original technical writing by Samir Idris on software engineering, blockchain protocols, distributed systems and the intersection of software and biology.',
        path: '/writing',
      };
    case 'article':
      return {
        ...common,
        title: page.article.title + ' | Samir Idris',
        description: page.article.description,
        path: '/writing/' + page.article.slug,
        image: canonicalUrl(page.article.image || site.socialImage),
        imageAlt: page.article.imageAlt || site.socialImageAlt,
        type: 'article',
      };
    case 'not-found':
      return {
        ...common,
        title: 'Page Not Found | Samir Idris',
        description:
          "This page could not be found. Explore Samir Idris's engineering work or return to his personal website.",
        path: undefined,
      };
  }
}

export function safeJson(value: unknown) {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

export function structuredData(page: Page) {
  if (page.type === 'not-found') return undefined;
  const metadata = pageMetadata(page);
  const url = canonicalUrl(metadata.path);
  const personId = canonicalUrl('/') + '#person';
  const websiteId = canonicalUrl('/') + '#website';
  const pageId = url + '#webpage';
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Person',
      '@id': personId,
      name: site.name,
      alternateName: site.handle,
      url: canonicalUrl('/'),
      image: canonicalUrl(site.portrait),
      jobTitle: ['Software Engineer', 'Blockchain Engineer'],
      description:
        'Software and blockchain engineer, Lucent Labs co-founder, and First Class Botany graduate exploring computational biology.',
      sameAs: [profile.github, profile.linkedin],
      knowsAbout: [
        'Software engineering',
        'Distributed systems',
        'Cardano',
        'Aiken',
        'Plutus',
        'Rust',
        'TypeScript',
        'Python',
        'Computational biology',
      ],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Ahmadu Bello University, Zaria',
      },
      homeLocation: { '@type': 'Place', name: 'Abuja' },
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      name: site.name,
      alternateName: site.handle,
      url: canonicalUrl('/'),
      inLanguage: 'en',
      publisher: { '@id': personId },
    },
    {
      '@type':
        page.type === 'home'
          ? 'ProfilePage'
          : page.type === 'article'
            ? 'WebPage'
            : 'CollectionPage',
      '@id': pageId,
      url,
      name: metadata.title,
      description: metadata.description,
      inLanguage: 'en',
      isPartOf: { '@id': websiteId },
      ...(page.type === 'home'
        ? { mainEntity: { '@id': personId } }
        : { author: { '@id': personId } }),
    },
  ];
  if (page.type !== 'home') {
    const crumbs = [
      { name: 'Home', url: canonicalUrl('/') },
      ...(page.type === 'work'
        ? [{ name: 'Engineering work', url }]
        : [
            { name: 'Writing', url: canonicalUrl('/writing') },
            ...(page.type === 'article'
              ? [{ name: page.article.title, url }]
              : []),
          ]),
    ];
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': url + '#breadcrumbs',
      itemListElement: crumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    });
  }
  if (page.type === 'work')
    graph.push({
      '@type': 'ItemList',
      '@id': url + '#projects',
      itemListElement: MyProjects.filter((project) => !project.hidden).map(
        (project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            name: project.p_head,
            description: project.description,
            url: url + '#' + projectId(project.p_head),
          },
        }),
      ),
    });
  if (page.type === 'article') {
    const { article } = page;
    graph.push({
      '@type': 'Article',
      '@id': url + '#article',
      headline: article.title,
      description: article.description,
      image: metadata.image,
      datePublished: article.datePublished,
      ...(article.dateModified ? { dateModified: article.dateModified } : {}),
      author: {
        '@type': 'Person',
        '@id': personId,
        name: site.name,
        url: canonicalUrl('/'),
      },
      publisher: { '@id': personId },
      mainEntityOfPage: { '@id': pageId },
      inLanguage: 'en',
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function renderHead(
  page: Page,
  { preview = false, verification = '' } = {},
) {
  const metadata = pageMetadata(page);
  const url = metadata.path ? canonicalUrl(metadata.path) : undefined;
  const schema = structuredData(page);
  return renderToStaticMarkup(
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta
        name="robots"
        content={
          preview || !url
            ? 'noindex, follow'
            : 'index, follow, max-image-preview:large'
        }
      />
      {url && <link rel="canonical" href={url} />}
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={metadata.type} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={metadata.image} />
      <meta property="og:image:alt" content={metadata.imageAlt} />
      {!('article' in page && page.article.image) && (
        <>
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.image} />
      <meta name="twitter:image:alt" content={metadata.imageAlt} />
      <meta name="twitter:creator" content="@ScientistSamir" />
      {page.type === 'article' && (
        <>
          <meta
            property="article:published_time"
            content={page.article.datePublished}
          />
          <meta property="article:author" content={canonicalUrl('/')} />
          {page.article.dateModified && (
            <meta
              property="article:modified_time"
              content={page.article.dateModified}
            />
          )}
        </>
      )}
      {verification && (
        <meta name="google-site-verification" content={verification} />
      )}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(schema) }}
        />
      )}
    </>,
  );
}
