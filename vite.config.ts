import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(() => {
  // Base path resolution:
  // - Priority 1: Explicit VITE_BASE_PATH environment variable (if provided)
  // - Priority 2: Custom domain active (ENABLE_CUSTOM_DOMAIN === 'true' or VITE_CUSTOM_DOMAIN === 'true') -> base = '/'
  // - Priority 3: GitHub Actions without custom domain -> automatically defaults to `/${repository_name}/`
  // - Priority 4: Default to '/' (for local development and AI Studio preview)
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
  const useCustomDomain = process.env.ENABLE_CUSTOM_DOMAIN === 'true' || process.env.VITE_CUSTOM_DOMAIN === 'true';
  const ghRepoBase = process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/';

  const base = process.env.VITE_BASE_PATH || (useCustomDomain ? '/' : (isGitHubActions ? ghRepoBase : '/'));

  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'subfolder-redirect',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const url = req.url?.split('?')[0];
            if (url === '/roshini-hasaranga') {
              res.writeHead(301, { Location: '/roshini-hasaranga/' });
              return res.end();
            }
            if (url === '/Roshini-Hasaranga') {
              res.writeHead(301, { Location: '/Roshini-Hasaranga/' });
              return res.end();
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          // Root business homepage: https://srilankaweddinginvites.lk/
          main: path.resolve(__dirname, 'index.html'),
          // Customer invitation: https://srilankaweddinginvites.lk/roshini-hasaranga/
          roshiniHasaranga: path.resolve(__dirname, 'roshini-hasaranga/index.html'),
          // Future customer invitations are registered here as single line entries
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
