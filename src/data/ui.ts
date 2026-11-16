// Global site constants + UI strings. Tracking IDs carry over unchanged
// (seo-tracking-plan.md §1): GTM GTM-PBVWSGGW · GA4 G-04D0XBCMM7 · Ads AW-11066381386.

export type Lang = 'en' | 'es';

export const GTM_ID = 'GTM-PBVWSGGW';
export const INSTAGRAM_URL = 'https://www.instagram.com/new.barbershoop';
export const BANNER_ALT = {
  en: 'Inside New Barbershop 1 and New Barbershop 2 — both Orlando barber shop locations side by side',
  es: 'Interior de New Barbershop 1 y New Barbershop 2 — ambas barberías de Orlando, una junto a la otra',
};

export const ui = {
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', blog: 'Blog', contact: 'Contact', locations: 'Locations' },
    callToBook: 'Call to Book',
    call: 'Call',
    callShop1: 'Call Shop 1',
    callShop2: 'Call Shop 2',
    whatsapp: 'WhatsApp Us',
    readReviews: 'Read all our Google reviews',
    reviewsHeading: 'What Our Customers Say',
    googleReviewsSuffix: 'Google reviews',
    getDirections: 'Get Directions',
    visitShop1: 'Visit the Shop 1 page →',
    visitShop2: 'Visit the Shop 2 page →',
    alsoVisit: 'Also visit',
    hoursHeading: 'Hours',
    faqHeading: 'Questions, Answered',
    servicesAtGlance: 'Our Services',
    photosHeading: 'Inside the Shop',
    blogBandHeading: 'Grooming Tips, Styles & Shop News',
    blogBandLine: 'Fresh grooming tips and style ideas from our barbers — check out the New Barbershop blog.',
    blogBandButton: 'Read Our Blog',
    trustStrip: 'Family-run since 2003 · 20+ Years of Experience · 1,400+ Google Reviews · English & Español',
    footerTagline: 'Family-run barber shops in Orlando — two locations on South Orange Blossom Trail.',
    copyright: 'Copyright © 2026 Barbershop',
    seeWork: (n: number) => `See our work & photos — Shop ${n} on Google`,
    callForPrices: 'Call for Prices',
    learnMore: 'Learn More',
    readPost: 'Read more →',
    ourLocations: 'Our Locations',
    backToBlog: '← Back to the blog',
    seeServices: 'See our Services',
    contactUs: 'Contact page',
  },
  es: {
    nav: { home: 'Inicio', about: 'Nosotros', services: 'Servicios', blog: 'Blog', contact: 'Contacto', locations: 'Ubicaciones' },
    callToBook: 'Llama para reservar',
    call: 'Llamar',
    callShop1: 'Llamar a Shop 1',
    callShop2: 'Llamar a Shop 2',
    whatsapp: 'Escríbenos por WhatsApp',
    readReviews: 'Lee todas nuestras reseñas de Google',
    reviewsHeading: 'Lo que dicen nuestros clientes',
    googleReviewsSuffix: 'reseñas de Google',
    getDirections: 'Cómo llegar',
    visitShop1: 'Visita la página de Shop 1 →',
    visitShop2: 'Visita la página de Shop 2 →',
    alsoVisit: 'Visita también',
    hoursHeading: 'Horario',
    faqHeading: 'Preguntas Frecuentes',
    servicesAtGlance: 'Nuestros servicios',
    photosHeading: 'Dentro de la barbería',
    blogBandHeading: 'Consejos de cuidado, estilos y novedades de la barbería',
    blogBandLine: 'Consejos frescos de cuidado personal e ideas de estilo de nuestros barberos — visita el blog de New Barbershop.',
    blogBandButton: 'Lee nuestro blog',
    trustStrip: 'Negocio familiar desde 2003 · Más de 20 años de experiencia · Más de 1,400 reseñas de Google · English & Español',
    footerTagline: 'Barberías familiares en Orlando — dos ubicaciones sobre South Orange Blossom Trail.',
    copyright: 'Copyright © 2026 Barbershop',
    seeWork: (n: number) => `Mira nuestro trabajo y fotos — Shop ${n} en Google`,
    callForPrices: 'Llama para consultar precios',
    learnMore: 'Conoce más',
    readPost: 'Leer más →',
    ourLocations: 'Nuestras ubicaciones',
    backToBlog: '← Volver al blog',
    seeServices: 'Ver nuestros Servicios',
    contactUs: 'página de Contacto',
  },
} as const;

/**
 * Spanish slugs for the core pages (seo-tracking-plan.md §2.1). Callers
 * always pass the canonical (EN) slug; `path()` translates for ES.
 * Blog posts keep the same slug in both languages under /blog/.
 */
const ES_SLUGS: Record<string, string> = {
  services: 'servicios',
  about: 'nosotros',
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
