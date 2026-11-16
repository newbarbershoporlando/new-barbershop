// Structured content — mirrors the Sanity `review` schema (sanity/schemas/review.ts).
// Quotes are verbatim Google reviews from the content pack — never edited.
// Shop 2 quotes were written bilingually / in Spanish originally and are kept
// exactly as written in BOTH locales (per content pack). Shop 1 quotes have a
// recorded Spanish translation for the /es/ pages.

import type { LocalizedString } from './locations';

export interface Review {
  _id: string;
  location: string; // location _id
  author: string;
  text: LocalizedString;
}

export const reviews: Review[] = [
  // ——— New Barbershop 1 ———
  {
    _id: 'rev-s1-carlos',
    location: 'shop1',
    author: 'Carlos López',
    text: {
      en: 'Quality and professionalism service with Kenya',
      es: 'Servicio de calidad y profesionalismo con Kenya',
    },
  },
  {
    _id: 'rev-s1-sophia',
    location: 'shop1',
    author: 'Sophia Rodriguez',
    text: {
      en: 'Excellent service with keny barber',
      es: 'Excelente servicio con el barbero Keny',
    },
  },
  {
    _id: 'rev-s1-zxyuak',
    location: 'shop1',
    author: 'zxyuak ?¿',
    text: {
      en: 'Excellent barbershop and Ale king service',
      es: 'Excelente barbería y un servicio de rey con Ale',
    },
  },
  // ——— New Barbershop 2 (kept as written in both locales) ———
  {
    _id: 'rev-s2-juan',
    location: 'shop2',
    author: 'juan velazquez',
    text: {
      en: 'Me encanta esta barbería! Todo el personal siempre es muy amable, acogedor y profesional. Se nota que se enorgullecen de su trabajo, y los cortes siempre quedan limpios, modernos y con mucho estilo. Charlie es mi barbero, ¡ese es mi pana! Es súper talentoso, presta mucha atención a los detalles y siempre se asegura de que salga de ahí luciendo fresh. Se nota que realmente sabe lo que hace. Definitivamente una de las mejores barberias de la ciudad. Excelente ambiente, excelente gente y excelente servicio. La recomiendo al 100%!',
      es: 'Me encanta esta barbería! Todo el personal siempre es muy amable, acogedor y profesional. Se nota que se enorgullecen de su trabajo, y los cortes siempre quedan limpios, modernos y con mucho estilo. Charlie es mi barbero, ¡ese es mi pana! Es súper talentoso, presta mucha atención a los detalles y siempre se asegura de que salga de ahí luciendo fresh. Se nota que realmente sabe lo que hace. Definitivamente una de las mejores barberias de la ciudad. Excelente ambiente, excelente gente y excelente servicio. La recomiendo al 100%!',
    },
  },
  {
    _id: 'rev-s2-jessica',
    location: 'shop2',
    author: 'JESSICA MERCADO',
    text: {
      en: 'Great Service, Clean Environment, Great Prices. Best Nail Technician. Highly Recommended. Tremendo Servicio, Ambiente Limpio, Buenos Precios. La Mejor Tecnica de Úñas. Altamente Recomendado.',
      es: 'Great Service, Clean Environment, Great Prices. Best Nail Technician. Highly Recommended. Tremendo Servicio, Ambiente Limpio, Buenos Precios. La Mejor Tecnica de Úñas. Altamente Recomendado.',
    },
  },
  {
    _id: 'rev-s2-jay',
    location: 'shop2',
    author: 'Jay Escargo',
    text: {
      en: 'These guys did an excellent job!! They helped me out immensely!! Charlie and Frankie were amazing, friendly, and very customer focused. I highly recommend them!! Must visit at least once!! Estos muchachos hicieron un trabajo excelente! Me ayudaron muchísimo! Charlie y Frankie fueron increíbles, amables y muy atentos conmigo.',
      es: 'These guys did an excellent job!! They helped me out immensely!! Charlie and Frankie were amazing, friendly, and very customer focused. I highly recommend them!! Must visit at least once!! Estos muchachos hicieron un trabajo excelente! Me ayudaron muchísimo! Charlie y Frankie fueron increíbles, amables y muy atentos conmigo.',
    },
  },
];

export function reviewsFor(locationId: string): Review[] {
  return reviews.filter((r) => r.location === locationId);
}

/** Featured testimonial on the Services page (verbatim, 5 stars). */
export const featuredTestimonial = {
  author: 'Preston Figueroa',
  text: {
    en: "Provided great customer service. Very clean shop. Very welcoming. The cut was incredible, very clean, sharp and quick. He used many products. It's hard for my brothers and I to trust just anyone but this guy did the job and did it very well! When in Florida we will be back. We are from Austin, Texas.",
    es: 'Brindaron un excelente servicio al cliente. La barbería está muy limpia. Muy acogedores. El corte fue increíble, muy limpio, definido y rápido. Usó muchos productos. Para mis hermanos y para mí es difícil confiar en cualquiera, pero él hizo el trabajo y lo hizo muy bien. Cuando estemos en Florida, volveremos. Somos de Austin, Texas.',
  } as LocalizedString,
};
