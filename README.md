# New Barbershop — website (Astro + Sanity data model, Cloudflare Pages)

Static Astro build. Content lives as structured data in `src/data/`
(mirroring the Sanity schemas in `sanity/schemas/`); at deploy, the live
Sanity project is seeded from those files and the data layer swaps to the
Sanity API without shape changes.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build to `dist/` (24 pages: 12 EN + 12 ES)
- `npm run preview` — preview the production build

## Cloudflare Pages settings

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 20+ (developed on Node 24)

## Hard rules baked into this codebase

- Call-only: every conversion is a `tel:` link. No forms, no booking widgets.
- No prices anywhere — the service schema has no price field.
- WhatsApp appears on Shop 1 surfaces only (`locations.ts`: shop2.whatsapp = null).
- No hair-coloring content. No third-party chain branding anywhere.
