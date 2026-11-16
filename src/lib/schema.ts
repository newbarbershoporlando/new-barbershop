// BarberShop JSON-LD per seo-tracking-plan.md §4: one @graph on the homepage
// (Organization + both shops, stable @ids), each location page repeats its own
// shop's node with the identical @id. NO aggregateRating (Google bans
// self-serving review markup). geo/hasMap come from the recorded Google Maps
// place URLs in the content pack (pins: Shop 1 data id 0xd9562e620584cfd4,
// Shop 2 data id 0xfe777d3b0beb6fcc).

import { locations, type Location } from '../data/locations';
import { services } from '../data/services';
import type { Faq } from '../data/faqs';
import type { GalleryItem } from '../data/pages';
import type { Lang } from '../data/ui';

const DAY_SCHEMA: Record<string, string> = {
  Sunday: 'Sunday',
  Monday: 'Monday',
  Tuesday: 'Tuesday',
  Wednesday: 'Wednesday',
  Thursday: 'Thursday',
  Friday: 'Friday',
  Saturday: 'Saturday',
};

const EN_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function shopNode(loc: Location, siteUrl: string) {
  return {
    '@type': 'BarberShop',
    '@id': `${siteUrl}/#${loc._id}`,
    name: loc.name,
    image: `${siteUrl}/images/banner-wide.webp`,
    url: `${siteUrl}/locations/${loc.slug}/`,
    telephone: loc.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.street,
      addressLocality: loc.city,
      addressRegion: loc.state,
      postalCode: loc.zip,
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: loc.geo.lat, longitude: loc.geo.lng },
    hasMap: loc.mapsUrl,
    openingHoursSpecification: loc.hours.map((h, i) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: DAY_SCHEMA[EN_DAYS[i]],
      opens: h.opens,
      closes: h.closes,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Barber Services',
      // Braids is a Shop 1 service only — Shop 2's catalog excludes it
      // (seo-tracking-plan.md §4; matches seo-impl/schema-shop2.jsonld).
      itemListElement: services
        .filter((svc) => loc._id === 'shop1' || svc._id !== 'svc-braids')
        .map((svc) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: svc.name.en },
        })),
    },
  };
}

export function homeGraph(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'New Barbershop',
        url: `${siteUrl}/`,
        logo: `${siteUrl}/images/logo.png`,
        sameAs: ['https://www.instagram.com/new.barbershoop'],
      },
      ...locations.map((loc) => shopNode(loc, siteUrl)),
    ],
  };
}

export function locationGraph(loc: Location, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [shopNode(loc, siteUrl)],
  };
}

// FAQPage node (seo-impl/faq-schema.md): one per location page, generated
// from the SAME data the visible FAQ block renders, so schema text always
// matches page text. Separate block alongside the BarberShop node.
export function faqPageNode(items: Faq[], lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question[lang],
      acceptedAnswer: { '@type': 'Answer', text: f.answer[lang] },
    })),
  };
}

// ImageObject nodes for a photo gallery (owner image-SEO addition
// 2026-11-15): one entry per RENDERED gallery photo on the pages
// that display it, generated from the same data the gallery renders
// — name = the caption title, caption = the caption description,
// contentUrl = the lightbox-size image. Uncaptioned general photos
// use their alt text for both fields. This is a separate block
// alongside the BarberShop graph; it does not alter its facts.
export function galleryImageGraph(siteUrl: string, items: GalleryItem[], lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@graph': items
      .filter((i) => i.src)
      .map((i) => ({
        '@type': 'ImageObject',
        name: i.caption ? i.caption.style[lang] : i.alt[lang],
        caption: i.caption ? i.caption.text[lang] : i.alt[lang],
        contentUrl: `${siteUrl}${i.largeSrc ?? i.src}`,
      })),
  };
}

// BlogPosting node (pre-launch audit M3, owner-authorized 2026-11-16):
// one per blog post page, EN + ES. Author/publisher reference the
// homepage graph's Organization node by its stable @id. The post data
// carries no publication dates, so no date fields are emitted (never
// invent dates).
export function blogPostingNode(args: {
  siteUrl: string;
  pageUrl: string;
  headline: string;
  description: string;
  imagePath: string;
  lang: Lang;
}) {
  const orgRef = {
    '@type': 'Organization',
    '@id': `${args.siteUrl}/#organization`,
    name: 'New Barbershop',
    url: `${args.siteUrl}/`,
  };
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: args.headline,
    description: args.description,
    image: `${args.siteUrl}${args.imagePath}`,
    inLanguage: args.lang,
    mainEntityOfPage: { '@type': 'WebPage', '@id': args.pageUrl },
    author: orgRef,
    publisher: orgRef,
  };
}

// BreadcrumbList node (seo-impl/faq-schema.md rule 4).
export function breadcrumbNode(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
