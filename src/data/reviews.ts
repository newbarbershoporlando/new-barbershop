// Structured content — mirrors the Sanity `review` schema (sanity/schemas/review.ts).
// Quotes are verbatim Google reviews — never edited.
// 2026-11-17 refresh (Item 10, owner-approved picks from the verbatim GBP
// pull in files/REVIEW-POOL-2026-11-17.md): every quote is kept EXACTLY as
// written in BOTH locales — no translations. The Shop 1 replacements are
// Spanish originals and ship as written on the EN and ES pages alike, the
// same treatment Shop 2 quotes have always had here.

import type { LocalizedString } from './locations';
import { USE_SANITY, fetchSanity } from '../lib/sanity';

export interface Review {
  _id: string;
  location: string; // location _id
  author: string;
  text: LocalizedString;
}

const localReviews: Review[] = [
  // ——— New Barbershop 1 (Spanish originals, kept as written in both locales) ———
  {
    _id: 'rev-s1-raul',
    location: 'shop1',
    author: 'Raul Wallace',
    text: {
      en: 'Lo mejores barberos del planeta están en esta barbería muy humiles y demasiado talentosos',
      es: 'Lo mejores barberos del planeta están en esta barbería muy humiles y demasiado talentosos',
    },
  },
  {
    _id: 'rev-s1-asdrubal',
    location: 'shop1',
    author: 'Asdrubal Madueño Uzcategui',
    text: {
      en: 'Muy buena atención y excelente servicio',
      es: 'Muy buena atención y excelente servicio',
    },
  },
  {
    _id: 'rev-s1-jonathan',
    location: 'shop1',
    author: 'Jonathan Cantillo',
    text: {
      en: 'Excelente trabajo de los barberos',
      es: 'Excelente trabajo de los barberos',
    },
  },
  // ——— New Barbershop 2 (kept as written in both locales) ———
  {
    _id: 'rev-s2-franche',
    location: 'shop2',
    author: 'Franche John',
    text: {
      en: 'Great service !! Precise and steady with the clippers! Highly recommended!',
      es: 'Great service !! Precise and steady with the clippers! Highly recommended!',
    },
  },
  {
    _id: 'rev-s2-karina',
    location: 'shop2',
    author: 'Karina Rodriguez',
    text: {
      en: 'The best barbershop in town.... Everything is clean and the barbers have the best customer service and care for you.',
      es: 'The best barbershop in town.... Everything is clean and the barbers have the best customer service and care for you.',
    },
  },
  {
    _id: 'rev-s2-yj',
    location: 'shop2',
    author: 'Y J',
    text: {
      en: 'Exelente servicio & muy buenos con niños 100% recomendado ambiente familiar !',
      es: 'Exelente servicio & muy buenos con niños 100% recomendado ambiente familiar !',
    },
  },
];

// ——— Sanity swap (wiring guide §6, Reviews queries: per-location rows in
// one fetch — reviewsFor() slices by location exactly as the local array;
// featured testimonial via the guide's featured query verbatim) ———
const REVIEWS_QUERY = `*[_type == "review" && defined(location)] | order(order asc) { _id, "location": location._ref, author, text }`;
const FEATURED_QUERY = `*[_type == "review" && featured == true][0] { author, text }`;

export const reviews: Review[] = await (async () => {
  if (!USE_SANITY) return localReviews;
  const fetched = await fetchSanity<Review[]>('reviews', REVIEWS_QUERY);
  if (fetched && fetched.length > 0) return fetched;
  console.error('[sanity] reviews: fetch missing/incomplete — using LOCAL review data');
  return localReviews;
})();

export function reviewsFor(locationId: string): Review[] {
  return reviews.filter((r) => r.location === locationId);
}

/** Featured testimonial on the Services page (verbatim, 5 stars). */
const localFeaturedTestimonial = {
  author: 'Leyan Martinez',
  text: {
    en: 'Is the number 1 in the world',
    es: 'Is the number 1 in the world',
  } as LocalizedString,
};

export const featuredTestimonial: { author: string; text: LocalizedString } =
  await (async () => {
    if (!USE_SANITY) return localFeaturedTestimonial;
    const fetched = await fetchSanity<{ author: string; text: LocalizedString }>(
      'featured testimonial',
      FEATURED_QUERY,
    );
    if (fetched && fetched.author) return fetched;
    console.error(
      '[sanity] featured testimonial: fetch missing/incomplete — using LOCAL testimonial',
    );
    return localFeaturedTestimonial;
  })();
