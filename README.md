# Samir Idris Portfolio

Personal portfolio website for Samir Idris, showcasing software engineering, blockchain development, Web3, DevOps, biotech research, and selected project contributions.

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- EmailJS

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
- `public/projects` - project images used by the portfolio
- `.env.example` - safe example environment configuration
