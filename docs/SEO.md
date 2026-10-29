# SEO and Publishing

## Canonical Identity

The canonical origin is **https://samiridris.com**, configured once in `src/static/site.ts`. Homepage identity is Samir Idris / scisamir. Descriptions distinguish established software and blockchain experience from an interest in computational biology; they do not claim a computational biology degree or research position.

## Audit Findings

The initial source was a single Vite/React page. Its production HTML had an empty React root, basic title/description and partial Open Graph tags. There was no canonical URL, Twitter card, structured data, sitemap, robots file, publishing system or explicit static 404. Project links beyond the featured selection required interaction. Existing heading levels, local fonts and WebP images provided a useful starting point; project alt text and legacy filenames could be more descriptive.

The live domain check found HTTP redirecting to HTTPS, but the HTTPS apex redirected to **www.samiridris.com**. This conflicts with the preferred non-www canonical. Hosting account settings must resolve this before deployment.

## Rendering and Routes

`npm run build` type-checks the app, builds Vite assets, prerenders React with the existing Vite SSR loader, generates crawler files and checks the resulting HTML. No production Node server or rendering service is needed. Browsers hydrate the same React markup after loading it. Development also renders HTML; local development pages are intentionally noindex.

- `/`: complete profile, experience, technical stack, featured work, professional links and contact.
- `/work`: full project archive, including every non-hidden project and ordinary crawlable project links.
- `/writing` and `/writing/<slug>`: generated only when original, non-draft articles exist.
- Unknown URLs: a custom 404 document, no canonical and `noindex, follow`.

Existing homepage fragment links remain usable. The source does not create thin About/Experience/Contact duplicates of the homepage or index empty writing pages.

Each indexable page has one title, description, HTTPS canonical, Open Graph URL/title/description/image, Twitter large-image card and a JSON-LD graph. Homepage markup includes `Person`, `WebSite` and `ProfilePage`; work includes `CollectionPage`, `ItemList` and breadcrumbs. Published articles add `Article` and breadcrumbs. Only profile information represented on the site is marked up. JSON-LD escapes `<` and Unicode line separators before embedding.

The `robots.txt` and XML sitemap are generated into `dist` from the same published routes. The sitemap omits fragments, query strings, drafts, errors and empty writing. Article last-modified timestamps come from authored metadata; ordinary pages do not get fabricated fresh dates on every build.

## Production Domain Setup: Before Deployment

In Vercel Project Settings > Domains:

1. Set `samiridris.com` to serve the Production environment directly.
2. Remove the existing redirect from `samiridris.com` to `www.samiridris.com`.
3. Redirect `www.samiridris.com` permanently to `samiridris.com`, preserving the path and query string.
4. Verify the DNS records and HTTPS certificate for both hosts.
5. Review other public production aliases and redirect them to the same preferred domain where appropriate. Preview deployments intentionally emit noindex and should remain protected as needed.

Host redirects are deliberately not duplicated in `vercel.json`: adding an opposite application redirect while the current domain rule still exists would cause a redirect loop. Vercel already enforces HTTPS. `vercel.json` supplies clean URLs, no trailing slashes, an explicit `/index.html` redirect, normal filesystem routing and immutable caching for hashed build assets. Do not add a catch-all rewrite to `/index.html`: it would turn missing pages into soft 404s.

Deploy using Node.js 24, build command `npm run build` and output directory `dist`.

## Search Console

Prefer a Search Console **Domain property** for `samiridris.com` and add Google's genuine DNS TXT verification record through your DNS provider. If using URL-prefix HTML verification instead, set `GOOGLE_SITE_VERIFICATION` to the actual verification value in Vercel's Production environment and rebuild. Empty values emit no verification tag. The value is a public verification token, not a Google API key.

After deployment:

1. Open `https://samiridris.com/robots.txt` and `https://samiridris.com/sitemap.xml` and verify their contents and HTTP 200 responses.
2. Submit `https://samiridris.com/sitemap.xml` in Search Console.
3. Use URL Inspection's live test on `/` and `/work`, inspect rendered HTML and confirm the user-declared and Google-selected canonicals. Request indexing after fixing any deployment errors.
4. Use Google's Rich Results Test and Schema.org's validator on the deployed HTML. Local validation checks JSON syntax, expected vocabulary/relationships and URL/content consistency; it does not replace Google's live rich-result eligibility test.
5. Test an unknown URL and confirm an HTTP 404. Verify `www`, HTTP, `/index.html`, `/work.html` and `/work/` resolve to the expected canonical URLs without loops.
6. Monitor indexing reports, query impressions and Core Web Vitals. Lighthouse is a lab measurement; field INP, LCP and CLS require actual visitor data and may not appear immediately.
7. Keep the same website URL, name and handle on your real GitHub and LinkedIn profiles. Publish original technical work and earn relevant links rather than creating keyword-targeted duplicate pages.

Official references: [JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [ProfilePage](https://developers.google.com/search/docs/appearance/structured-data/profile-page), [Article](https://developers.google.com/search/docs/appearance/structured-data/article), [canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), [sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start), [Vercel static configuration](https://vercel.com/docs/project-configuration/vercel-json).

## Original Writing

Add an `Article` entry to `src/content/articles.ts`. The registry starts empty. No articles or fictitious publication dates are supplied. Keep unfinished pieces `draft: true`. Only publish writing based on your actual work, with a concise description and real ISO 8601 timestamps that include a timezone. Change `dateModified` only for a meaningful edit.

Supported body blocks are paragraphs, H2/H3 headings with stable IDs, code, ordered/unordered lists, descriptive links and images with alt text and dimensions. They render through React, not raw HTML. Code and prose are escaped. `relatedProjects` contains exact names from `src/static/projects.ts` and generates links to `/work#<project-id>`. Other article links can use `/writing/<slug>` through link blocks. There is no markdown or arbitrary HTML injection path.

An example of the _metadata shape_, not an article to publish:

```ts
{
  slug: 'your-original-article-slug',
  title: 'Your original article title',
  description: 'A truthful summary of your actual technical findings.',
  datePublished: '2026-10-29T12:00:00Z', // replace with the actual publication time
  draft: true,
  tags: ['Aiken'],
  relatedProjects: ['Minswap DEX'],
  body: [
    { type: 'heading', level: 2, id: 'context', text: 'Context' },
    { type: 'paragraph', text: 'Your original technical writing.' },
    { type: 'code', language: 'TypeScript', code: '// your example' },
    { type: 'link', label: 'Related engineering work', href: '/work' },
  ],
}
```

After the first article is deliberately published and rebuilt, Writing appears in navigation, `/writing` is generated, and the article receives its own canonical, title, description, dates, author, Open Graph metadata and Article JSON-LD. An optional local `image` plus `imageAlt` overrides the default social card. The branded default is `public/samir-idris-social.png`; its editable visual source is `scripts/social-card.html` (export at 1200 by 630 pixels).

## Checks

### Local Validation, 29 October 2026

Verified with Node.js 24: application/configuration TypeScript checks, lint, production build, nine targeted SEO/publishing tests and generated-HTML checks. Browser checks covered JavaScript-disabled reading at 320, 390, 768 and 1440 pixels, hydration, category filters, navigation, clean-URL/query variants, missing-page status codes, XML parsing and desktop/mobile accessibility scans. Contact requests were mocked; real inbox delivery was not tested.

Local mobile Lighthouse samples on the final production build:

| Route   | Performance | Accessibility | Best Practices | SEO | LCP   | CLS   | Total Blocking Time |
| ------- | ----------- | ------------- | -------------- | --- | ----- | ----- | ------------------- |
| `/`     | 100         | 100           | 100            | 100 | 0.8 s | 0     | 0 ms                |
| `/work` | 100         | 100           | 100            | 100 | 0.8 s | 0.009 | 0 ms                |

These are local lab measurements, not field INP or a prediction of rankings. Deployed redirect rules, Google's rich-result eligibility and Search Console indexing must be checked after deployment. The publishing tests also check that draft body text is absent from production JavaScript; the registry is still empty and no test articles are written into `dist`.

### Commands

```bash
npm run typecheck
npm run lint
npm run test:seo
npm run build
npm run seo:check
npm run preview
```

The build's SEO checks parse the actual generated HTML: unique metadata, canonical/social URL consistency, JSON-LD, headings, internal links and fragments, image dimensions/alt text, sitemap contents, robots policy and social card dimensions. Unit tests cover URL normalization, script escaping, draft exclusion, article publishing constraints, metadata and static content rendering. Browser checks are still needed for hydration, responsive layouts, JavaScript-disabled reading and form interactions.
