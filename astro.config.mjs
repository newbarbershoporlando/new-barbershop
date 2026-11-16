// @ts-check
import { defineConfig } from 'astro/config';

// New Barbershop — static build for Cloudflare Pages.
// Production domain: newbarbershoporlando.com — registered by the owner in
// his own Cloudflare account; the domain decision landed 2026-11-15
// (see ../DEPLOY.md §5). All canonical/OG/hreflang/JSON-LD URLs derive
// from `site`, so this one line is the only origin setting in the build.
export default defineConfig({
  site: 'https://newbarbershoporlando.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  trailingSlash: 'always',
});
