import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['@astro-community/astro-embed-youtube'],
    },
  },
  output: 'server',
  adapter: vercel(),
  redirects: {
    '/services': {
      status: 302,
      destination: '/services/page/1',
    },
  },
});
