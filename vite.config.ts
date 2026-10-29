import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { articles } from './src/content/articles';

const htmlPages: Plugin = {
  name: 'portfolio-static-pages',
  configureServer(server) {
    server.middlewares.use(async (request, response, next) => {
      const url = new URL(request.url || '/', 'http://localhost');
      if (
        !['GET', 'HEAD'].includes(request.method || '') ||
        !request.headers.accept?.includes('text/html') ||
        /\.[^/]+$/.test(url.pathname) ||
        url.pathname.startsWith('/@')
      )
        return next();
      try {
        const template = await server.transformIndexHtml(
          url.pathname,
          await readFile(resolve(server.config.root, 'index.html'), 'utf8'),
        );
        const renderer = await server.ssrLoadModule('/src/entry-server.tsx');
        const page = renderer.render(url.pathname, { preview: true });
        response.statusCode = page.status;
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.end(
          request.method === 'HEAD'
            ? ''
            : template
                .replace('<!--seo-head-->', page.head)
                .replace('<!--app-html-->', page.html),
        );
      } catch (error) {
        server.ssrFixStacktrace(error as Error);
        next(error);
      }
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((request, response, next) => {
      if (!request.headers.accept?.includes('text/html')) return next();
      const url = new URL(request.url || '/', 'http://localhost');
      const cleanPath =
        url.pathname === '/index.html'
          ? '/'
          : url.pathname.replace(/\.html$/, '').replace(/\/+$/, '') || '/';
      if (cleanPath !== url.pathname) {
        response.statusCode = 308;
        response.setHeader('Location', cleanPath + url.search);
        response.end();
      } else next();
    });
    return () => {
      server.middlewares.use(async (request, response, next) => {
        if (!request.headers.accept?.includes('text/html')) return next();
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.end(
          request.method === 'HEAD'
            ? ''
            : await readFile(
                resolve(
                  server.config.root,
                  server.config.build.outDir,
                  '404.html',
                ),
                'utf8',
              ),
        );
      });
    };
  },
};

export default defineConfig({
  plugins: [react(), htmlPages],
  appType: 'mpa',
  define: {
    __BUILD_YEAR__: new Date().getUTCFullYear(),
    __PUBLISHED_ARTICLES__: JSON.stringify(
      articles.filter((article) => !article.draft),
    ),
  },
});
