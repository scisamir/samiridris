import { createServer as createHttpServer } from 'node:http';
import { createServer } from 'vite';

export function createSsrLoader() {
  // Vite 4 otherwise opens a WebSocket port even when HMR is disabled.
  // An unbound HTTP server lets build-time rendering stay entirely offline.
  const transport = createHttpServer();
  return createServer({
    mode: 'production',
    appType: 'custom',
    server: { middlewareMode: true, hmr: { server: transport }, watch: null },
  });
}
