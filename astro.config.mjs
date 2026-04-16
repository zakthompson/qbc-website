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
    '/retreat': {
      status: 302,
      destination: 'https://www.zeffy.com/ticketing/annual-day-retreat',
    },
    '/docs': {
      status: 302,
      destination: 'https://zakthompson.notion.site/QBC-Documentation-344911458b4b80d59f48d5e804aeecdc',
    },
  },
});
