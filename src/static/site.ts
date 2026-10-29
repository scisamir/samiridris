export const site = {
  origin: 'https://samiridris.com',
  name: 'Samir Idris',
  handle: 'scisamir',
  title: 'Samir Idris | Software & Blockchain Engineer',
  description:
    'Samir Idris is a software and blockchain engineer working across distributed systems, Cardano and computational biology. Explore his work and experience.',
  socialImage: '/samir-idris-social.png',
  socialImageAlt:
    'Samir Idris, Software Engineer and Blockchain Engineer, @scisamir',
  portrait: '/samir-idris-portrait.webp',
};

export function canonicalUrl(pathname = '/') {
  const url = new URL(pathname, site.origin);
  if (url.origin !== site.origin)
    throw new Error('Canonical URLs must use the production origin.');
  url.search = '';
  url.hash = '';
  url.pathname = url.pathname === '/' ? '/' : url.pathname.replace(/\/+$/, '');
  return url.href;
}
