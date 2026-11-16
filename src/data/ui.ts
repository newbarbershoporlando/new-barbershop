// Global site constants + UI strings. Tracking IDs carry over unchanged
// (seo-tracking-plan.md §1): GTM GTM-PBVWSGGW · GA4 G-04D0XBCMM7 · Ads AW-11066381386.
//
// Data-layer swap (sanity-wiring.md §6): the values below are the local
// fallback for the Sanity `siteSettings` singleton. With
// PUBLIC_USE_SANITY=1 they are overridden at build time by the fetched
// settings (GTM/GA4/Ads IDs, Instagram, banner alt, trust strip, blog
// band, footer tagline, copyright). The nav labels and other UI strings
// stay in code — they are not part of the settings document.

import { USE_SANITY, fetchSanity } from '../lib/sanity';

export type Lang = 'en' | 'es';

export let GTM_ID = 'GTM-PBVWSGGW';
export let INSTAGRAM_URL = 'https://www.instagram.com/new.barbershoop';
export let BANNER_ALT = {
  en: 'Inside New Barbershop 1 and New Barbershop 2 — both Orlando barber shop locations side by side',
  es: 'Interior de New Barbershop 1 y New Barbershop 2 — ambas barberías de Orlando, una junto a la otra',
};

/* Homepage hero photo (owner-supplied 2026-11-15): ONE interior photo
   (Shop 1) with the combined "New Barber Shop 1 · 2" logo baked into
   its center — the alt says exactly that, never "two shops". */
export const HERO_ALT = {
  en: 'Inside New Barbershop 1 in Orlando — barber chairs, mirrors and ceiling lights, with the New Barber Shop 1 · 2 logo over the center of the photo',
  es: 'Interior de New Barbershop 1 en Orlando — sillas de barbero, espejos y luces en el techo, con el logotipo de New Barber Shop 1 · 2 sobre el centro de la foto',
};

export const ui = {
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', blog: 'Blog', contact: 'Contact', locations: 'Locations' },
    callToBook: 'Call to Book',
    call: 'Call',
    callShop1: 'Call Hunters Creek',
    callShop2: 'Call Florida Mall',
    /* Sticky-bar-only labels (round-3 L2): the bar is space-critical,
       so it gets its own strings. callShop1/2 above stay untouched —
       they are shared with the location pages and blog call buttons. */
    barCallShop1: 'Call Hunters Creek',
    barCallShop2: 'Call Florida Mall',
    whatsapp: 'WhatsApp Us',
    readReviews: 'Read all our Google reviews',
    reviewsHeading: 'What Our Customers Say',
    googleReviewsSuffix: 'Google reviews',
    getDirections: 'Get Directions',
    /* Shop-named directions labels for the Services page (round-3 2c):
       the bare getDirections label would be ambiguous there because
       both shops appear side by side with no card context. */
    directionsShop1: 'Get Directions — Hunters Creek',
    directionsShop2: 'Get Directions — Florida Mall',
    visitShop1: 'Visit the Hunters Creek page →',
    visitShop2: 'Visit the Florida Mall page →',
    alsoVisit: 'Also visit',
    hoursHeading: 'Hours',
    faqHeading: 'Questions, Answered',
    servicesAtGlance: 'Our Services',
    photosHeading: 'Inside the Shop',
    blogBandHeading: 'Grooming Tips, Styles & Shop News',
    blogBandLine: 'Fresh grooming tips and style ideas from our barbers — check out the New Barbershop blog.',
    blogBandButton: 'Read Our Blog',
    trustStrip: 'FAMILY-RUN SINCE 2003 · 1,400+ FIVE-STAR GOOGLE REVIEWS · OPEN 7 DAYS A WEEK · ENGLISH & ESPAÑOL',
    footerTagline: 'Family-run barber shops in Orlando — two locations on South Orange Blossom Trail.',
    copyright: 'Copyright © 2026 Barbershop',
    seeWork: (n: number) => `See our work & photos — Shop ${n} on Google`,
    callForPrices: 'Call for Prices',
    learnMore: 'Learn More',
    readPost: 'Read more →',
    ourLocations: 'Our Locations',
    backToBlog: '← Back to the blog',
    skipToContent: 'Skip to content',
    backToTop: 'Back to top',
    accessibility: 'Accessibility',
    seeServices: 'See our Services',
    contactUs: 'Contact page',
    relatedHeading: 'Related Articles',
    visitUs: 'Visit Us',
    photoViewer: 'Photo viewer',
    closeViewer: 'Close photo viewer',
    prevPhoto: 'Previous photo',
    nextPhoto: 'Next photo',
    viewLarger: (label: string) => `View larger photo: ${label}`,
    /* Accessible names (round-3 Item 3b): EN values are byte-identical
       to the strings previously hardcoded in the templates; ES values
       localize them. */
    ariaHome: 'New Barbershop — Home',
    ariaMainNav: 'Main',
    ariaMenu: 'Menu',
    ariaStars: '5 stars',
  },
  es: {
    nav: { home: 'Inicio', about: 'Nosotros', services: 'Servicios', blog: 'Blog', contact: 'Contacto', locations: 'Ubicaciones' },
    callToBook: 'Llama para reservar',
    call: 'Llamar',
    callShop1: 'Llamar a Hunters Creek',
    callShop2: 'Llamar a Florida Mall',
    /* Sticky-bar-only labels (round-3 L2, owner decision 2026-11-16):
       shorter than callShop1/2 so they fit the bar on one line at
       320px; the longer forms stay on location pages and blog buttons. */
    barCallShop1: 'Llamar Hunters Creek',
    barCallShop2: 'Llamar Florida Mall',
    whatsapp: 'Escríbenos por WhatsApp',
    readReviews: 'Lee todas nuestras reseñas de Google',
    reviewsHeading: 'Lo que dicen nuestros clientes',
    googleReviewsSuffix: 'reseñas de Google',
    getDirections: 'Cómo llegar',
    directionsShop1: 'Cómo llegar — Hunters Creek',
    directionsShop2: 'Cómo llegar — Florida Mall',
    visitShop1: 'Visita la página de Hunters Creek →',
    visitShop2: 'Visita la página de Florida Mall →',
    alsoVisit: 'Visita también',
    hoursHeading: 'Horario',
    faqHeading: 'Preguntas Frecuentes',
    servicesAtGlance: 'Nuestros servicios',
    photosHeading: 'Dentro de la barbería',
    blogBandHeading: 'Consejos de cuidado, estilos y novedades de la barbería',
    blogBandLine: 'Consejos frescos de cuidado personal e ideas de estilo de nuestros barberos — visita el blog de New Barbershop.',
    blogBandButton: 'Lee nuestro blog',
    trustStrip: 'NEGOCIO FAMILIAR DESDE 2003 · MÁS DE 1,400 RESEÑAS DE CINCO ESTRELLAS EN GOOGLE · ABIERTO LOS 7 DÍAS DE LA SEMANA · ENGLISH & ESPAÑOL',
    footerTagline: 'Barberías familiares en Orlando — dos ubicaciones sobre South Orange Blossom Trail.',
    copyright: 'Copyright © 2026 Barbershop',
    seeWork: (n: number) => `Mira nuestro trabajo y fotos — Shop ${n} en Google`,
    callForPrices: 'Llama para consultar precios',
    learnMore: 'Conoce más',
    readPost: 'Leer más →',
    ourLocations: 'Nuestras ubicaciones',
    backToBlog: '← Volver al blog',
    skipToContent: 'Saltar al contenido',
    backToTop: 'Volver arriba',
    accessibility: 'Accesibilidad',
    seeServices: 'Ver nuestros Servicios',
    contactUs: 'página de Contacto',
    relatedHeading: 'Artículos relacionados',
    visitUs: 'Visítanos',
    photoViewer: 'Visor de fotos',
    closeViewer: 'Cerrar el visor de fotos',
    prevPhoto: 'Foto anterior',
    nextPhoto: 'Foto siguiente',
    viewLarger: (label: string) => `Ver la foto más grande: ${label}`,
    ariaHome: 'New Barbershop — Inicio',
    ariaMainNav: 'Principal',
    ariaMenu: 'Menú',
    ariaStars: '5 estrellas',
  },
};

/**
 * Spanish slugs for the core pages (seo-tracking-plan.md §2.1). Callers
 * always pass the canonical (EN) slug; `path()` translates for ES.
 * Blog posts keep the same slug in both languages under /blog/.
 */
const ES_SLUGS: Record<string, string> = {
  services: 'servicios',
  about: 'nosotros',
  accessibility: 'accesibilidad',
  contact: 'contacto',
  locations: 'ubicaciones',
  'locations/new-barbershop-1': 'ubicaciones/new-barbershop-1',
  'locations/new-barbershop-2': 'ubicaciones/new-barbershop-2',
};

/** Path helper: EN is unprefixed, ES lives under /es/ with translated slugs. */
export function path(lang: Lang, slug: string): string {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  const seg = lang === 'es' ? (ES_SLUGS[clean] ?? clean) : clean;
  const base = seg ? `/${seg}/` : '/';
  return lang === 'es' ? `/es${base}` : base;
}

/** The same page in the other language (for the switcher + hreflang). */
export function altPath(lang: Lang, slug: string): string {
  return path(lang === 'en' ? 'es' : 'en', slug);
}

// ——— Sanity swap (wiring guide §6, Site settings query verbatim) ———
const SETTINGS_QUERY = `*[_type == "siteSettings" && _id == "siteSettings"][0] {
  businessName, instagramUrl, gtmId, ga4Id, adsId,
  trustStrip, blogBand, footerTagline, copyright, bannerAlt, defaultSeo
}`;

interface SiteSettings {
  businessName: string;
  instagramUrl: string;
  gtmId: string;
  ga4Id: string;
  adsId: string;
  trustStrip: { en: string; es: string };
  blogBand: {
    heading: { en: string; es: string };
    line: { en: string; es: string };
    buttonLabel: { en: string; es: string };
  };
  footerTagline: { en: string; es: string };
  copyright: string;
  bannerAlt: { en: string; es: string };
}

if (USE_SANITY) {
  const settings = await fetchSanity<SiteSettings>('siteSettings', SETTINGS_QUERY);
  if (settings && settings.gtmId) {
    GTM_ID = settings.gtmId;
    INSTAGRAM_URL = settings.instagramUrl;
    BANNER_ALT = settings.bannerAlt;
    for (const lang of ['en', 'es'] as const) {
      ui[lang].trustStrip = settings.trustStrip[lang];
      ui[lang].blogBandHeading = settings.blogBand.heading[lang];
      ui[lang].blogBandLine = settings.blogBand.line[lang];
      ui[lang].blogBandButton = settings.blogBand.buttonLabel[lang];
      ui[lang].footerTagline = settings.footerTagline[lang];
      ui[lang].copyright = settings.copyright;
    }
    console.log('[sanity] siteSettings: applied to layout constants + UI strings');
  } else {
    console.error(
      '[sanity] siteSettings: fetch missing/incomplete — using LOCAL settings',
    );
  }
}
