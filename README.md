# Samir Idris Portfolio

Personal portfolio website for Samir Idris, showcasing software engineering, distributed systems, blockchain, infrastructure, and a research background in the life sciences.

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- EmailJS

The site uses a dark design system, self-hosted Space Grotesk and IBM Plex Mono fonts, CSS animations, and the existing React Icons library. It does not depend on external GitHub widgets or an animation framework.

Production pages are statically prerendered with React and Vite, then hydrated for interactive controls. The initial HTML contains the profile and project content. The canonical production origin is `https://samiridris.com`.

## Requirements

- Node.js `24.x`
- npm

The repository includes `.nvmrc` and `package.json` engine settings for Node.js 24, which also matches the Vercel build requirement.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

Preview the production build locally:

```bash
npm run preview
```

## Environment Variables

The contact form uses EmailJS. Create a local `.env` file based on `.env.example`:

```bash
VITE_EMAILJS_PUBLIC_KEY=
VITE_EMAILJS_SERVICE_ID=portfolio_contact
VITE_EMAILJS_TEMPLATE_ID=template_3p5l5wk
```

Do not commit `.env` or any secret values. Use Vercel Project Settings to configure production environment variables.

## Deployment

The site is designed to deploy on Vercel.

Recommended build settings:

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Node.js Version: `24.x`

## Project Structure

- `src/pages` - main portfolio sections
- `src/static/projects.ts` - selected projects and major contributions
- `src/static/profile.ts` - shared contact, social profile, and CV links
- `src/components` - shared section headings and viewport entrance transitions
- `src/index.css` - design tokens, typography, and shared styles
- `public/projects` - project images used by the portfolio
- `public/fonts` - self-hosted fonts and their licenses
- `src/static/site.ts` - canonical origin and shared SEO identity
- `src/seo` - route resolution, metadata and JSON-LD
- `src/content/articles.ts` - original writing registry and publishing validation
- `scripts/prerender.mjs` - static HTML, robots and sitemap generation
- `scripts/check-seo.mjs` - generated HTML and crawlability checks
- `.env.example` - safe example environment configuration

## SEO and Writing

See [SEO and Publishing](docs/SEO.md) for the audit, canonical-domain setup, Search Console verification, sitemap submission and original technical writing workflow. The repository adds no generated SEO articles. Writing routes are published only when real non-draft articles exist.

**Before deployment:** the live domain was redirecting `samiridris.com` to `www.samiridris.com`. Reverse that in Vercel Domains so the non-www origin serves Production directly and www redirects to it. The source intentionally avoids an opposing host redirect that would create a loop.

## Editing Work

Add or update entries in `src/static/projects.ts`. Project categories are `Blockchain`, `DevOps`, `Biotech`, and `Misc`. Set `hidden: true` to keep an entry out of the public portfolio without deleting it.

Each entry supports a description, `technical_focus`, technologies, an image, a live link, a GitHub link, and an optional `site_label`. Set `featured: true` to include an entry in the initial All view. Up to six featured entries are shown initially; visitors can expand the full list or filter by category. Categories show their first six entries, and All falls back to the same behavior when no entries are featured. Images are lazy-loaded WebP assets with reserved dimensions.

## Verification

Run `npm run lint` and `npm run build` before deployment. The build includes TypeScript checking. Review the mobile menu, category filters, expanded work list, and contact form at desktop and mobile widths. The contact form preserves its EmailJS configuration and opens a prefilled email when direct sending is unavailable. Confirm real inbox delivery against your EmailJS dashboard after deployment.
