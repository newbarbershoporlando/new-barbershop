// @ts-check
import { defineConfig } from 'astro/config';

// New Barbershop — static build for Cloudflare Pages.
// Domain below is the current production domain; the final domain is a
// deploy-time decision (see build-notes.md). All canonical/OG URLs derive
// from `site`, so a domain change is a one-line edit.
export default defineConfig({
  site: 'https://newbarbershop1.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  trailingSlash: 'always',
});
