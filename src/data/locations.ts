// Structured content — mirrors the Sanity `location` schema (sanity/schemas/location.ts).
// One document per shop; every user-facing string is localized { en, es }.
//
// Data-layer swap (sanity-wiring.md §6): with PUBLIC_USE_SANITY=1 the
// array below is replaced at build time by the Sanity GROQ fetch; the
// local array stays as the flag-off / fetch-failure fallback. NOTE: the
// Sanity `location` schema has no photo/photoAlt fields — those exist
// only here, so a Sanity-sourced location carries photo === undefined
// until the schema/seed grows them (see DEPLOY.md §3).

import { USE_SANITY, fetchSanity } from '../lib/sanity';

export interface LocalizedString {
  en: string;
  es: string;
}

export interface DayHours {
  day: LocalizedString;
  /** 24h "HH:MM" — used for schema.org openingHoursSpecification */
  opens: string;
  closes: string;
  display: LocalizedString;
}

export interface Location {
  _id: string;
  slug: string;
  name: string;
  area: LocalizedString;
  street: string;
  city: string;
  state: string;
  zip: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsapp: string | null;
  mapsUrl: string;
  /** This shop's own REAL interior photo (owner-supplied 2026-11-15,
      replacing the banner crop that stood in for it — manifest §2). */
  photo: string;
  photoAlt: LocalizedString;
  /** Intrinsic size of `photo`, for the location page's width/height attrs. */
  photoSize: { w: number; h: number };
  /** Optional second real photo (Shop 1 waiting area, owner-supplied
      2026-11-15) with its intrinsic size. */
  photo2?: string;
  photo2Alt?: LocalizedString;
  photo2Size?: { w: number; h: number };
  geo: { lat: number; lng: number };
  rating: string;
  reviewCount: number;
  hours: DayHours[];
  hoursSummary: LocalizedString;
  introHeading: LocalizedString;
  intro: LocalizedString;
}

const sun1: DayHours = {
  day: { en: 'Sunday', es: 'Domingo' },
  opens: '08:00',
  closes: '22:30',
  display: { en: '8:00 AM – 10:30 PM', es: '8:00 AM – 10:30 PM' },
};

function shop1Day(en: string, es: string): DayHours {
  return {
    day: { en, es },
    opens: '08:00',
    closes: '22:30',
    display: { en: '8:00 AM – 10:30 PM', es: '8:00 AM – 10:30 PM' },
  };
}

const localLocations: Location[] = [
  {
    _id: 'shop1',
    slug: 'new-barbershop-1',
    name: 'New Barbershop 1',
    area: { en: 'Hunters Creek', es: 'Hunters Creek' },
    street: '9741 S Orange Blossom Trl',
    city: 'Orlando',
    state: 'FL',
    zip: '32837',
    phoneDisplay: '(407) 470-4846',
    phoneHref: 'tel:+14074704846',
    whatsapp: 'https://wa.me/message/SOGEVWV7NKT2C1',
    photo: '/images/shop1-interior.webp',
    photoAlt: {
      en: 'Inside New Barbershop 1 — barber chairs with red headrests, ring lights and waiting area, Orlando',
      es: 'Interior de New Barbershop 1 — sillas de barbero con reposacabezas rojos, luces de aro y sala de espera, Orlando',
    },
    photoSize: { w: 1320, h: 990 },
    photo2: '/images/shop1-lounge.webp',
    photo2Alt: {
      en: 'New Barbershop 1 waiting area — TV lounge wall with marble and wood paneling, Orlando',
      es: 'Sala de espera de New Barbershop 1 — pared de TV con mármol y paneles de madera, Orlando',
    },
    photo2Size: { w: 1086, h: 1448 },
    mapsUrl:
      'https://www.google.com/maps/place/New+Barbershop+1/@28.4151854,-81.4041153,17z/data=!3m1!4b1!4m6!3m5!1s0x88e77d92ef6aaaab:0xd9562e620584cfd4!8m2!3d28.4151854!4d-81.4041153!16s%2Fg%2F11v67rz1m2',
    geo: { lat: 28.4151854, lng: -81.4041153 },
    rating: '5.0',
    reviewCount: 1263,
    hours: [
      sun1,
      shop1Day('Monday', 'Lunes'),
      shop1Day('Tuesday', 'Martes'),
      shop1Day('Wednesday', 'Miércoles'),
      shop1Day('Thursday', 'Jueves'),
      shop1Day('Friday', 'Viernes'),
      shop1Day('Saturday', 'Sábado'),
    ],
    hoursSummary: {
      en: 'Open Daily: 8:00 AM – 10:30 PM',
      es: 'Abierto todos los días: 8:00 AM – 10:30 PM',
    },
    introHeading: { en: 'The Original New Barbershop', es: 'La New Barbershop original' },
    intro: {
      en: 'New Barbershop 1 is the original New Barbershop in Orlando, on South Orange Blossom Trail in Hunters Creek. We are open seven days a week, from early morning to late evening, and walk-ins are always welcome. Braids for men and women are available at this shop, and we serve you in English y español.',
      es: 'New Barbershop 1 es la barbería original de New Barbershop en Orlando, sobre South Orange Blossom Trail, en Hunters Creek. Abrimos los siete días de la semana, desde temprano en la mañana hasta tarde en la noche, y siempre aceptamos clientes sin cita. En esta barbería ofrecemos trenzas para hombres y mujeres, y te atendemos en English y español.',
    },
  },
  {
    _id: 'shop2',
    slug: 'new-barbershop-2',
    name: 'New Barbershop 2',
    area: { en: 'Near Florida Mall', es: 'Cerca de Florida Mall' },
    street: '6220 S Orange Blossom Trl',
    city: 'Orlando',
    state: 'FL',
    zip: '32809',
    phoneDisplay: '(407) 820-4541',
    phoneHref: 'tel:+14078204541',
    whatsapp: null,
    photo: '/images/shop2-interior.webp',
    photoAlt: {
      en: 'Inside New Barbershop 2 — barber chairs, mirrors and hexagonal ceiling lights, Orlando',
      es: 'Interior de New Barbershop 2 — sillas de barbero, espejos y luces hexagonales en el techo, Orlando',
    },
    photoSize: { w: 1320, h: 660 },
    mapsUrl:
      'https://www.google.com/maps/place/New+barbershop+2/@28.4667863,-81.3972292,17z/data=!3m1!4b1!4m6!3m5!1s0x88e77d9f5bf2d175:0xfe777d3b0beb6fcc!8m2!3d28.4667863!4d-81.3972292!16s%2Fg%2F11n2x_lxb6',
    geo: { lat: 28.4667863, lng: -81.3972292 },
    rating: '5.0',
    reviewCount: 174,
    // Hours corrected 2026-11-16 from the owner's own screenshots of
    // the live Google listing (the authority): Mon 9:00 AM–9:00 PM,
    // Tue–Sun 9:00 AM–10:00 PM. Supersedes the 2026-11-14 Places pull
    // (Sun 9:30–8:30, Mon 9:30–9:00, Tue–Sat 9:00–10:00).
    hours: [
      {
        day: { en: 'Sunday', es: 'Domingo' },
        opens: '09:00',
        closes: '22:00',
        display: { en: '9:00 AM – 10:00 PM', es: '9:00 AM – 10:00 PM' },
      },
      {
        day: { en: 'Monday', es: 'Lunes' },
        opens: '09:00',
        closes: '21:00',
        display: { en: '9:00 AM – 9:00 PM', es: '9:00 AM – 9:00 PM' },
      },
      ...(['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const).map(
        (d) =>
          ({
            day: {
              en: d,
              es: {
                Tuesday: 'Martes',
                Wednesday: 'Miércoles',
                Thursday: 'Jueves',
                Friday: 'Viernes',
                Saturday: 'Sábado',
              }[d],
            },
            opens: '09:00',
            closes: '22:00',
            display: { en: '9:00 AM – 10:00 PM', es: '9:00 AM – 10:00 PM' },
          }) as DayHours,
      ),
    ],
    hoursSummary: {
      en: 'Mon: 9:00 AM – 9:00 PM · Tue–Sun: 9:00 AM – 10:00 PM',
      es: 'Lun: 9:00 AM – 9:00 PM · Mar–Dom: 9:00 AM – 10:00 PM',
    },
    introHeading: {
      en: 'Your Neighborhood Barbershop Near Florida Mall',
      es: 'Tu barbería de barrio cerca de Florida Mall',
    },
    intro: {
      en: 'New Barbershop 2 is our neighborhood barbershop on South Orange Blossom Trail, near Florida Mall. We are a family-friendly shop with haircuts for all ages, from kids to seniors, in a welcoming, relaxed atmosphere. We are open seven days a week, from early morning to late evening, and walk-ins are always welcome. We serve you in English y español — call (407) 820-4541 to book.',
      es: 'New Barbershop 2 es nuestra barbería de barrio sobre South Orange Blossom Trail, cerca de Florida Mall. Somos una barbería familiar con cortes para todas las edades, desde niños hasta adultos mayores, en un ambiente acogedor y relajado. Abrimos los siete días de la semana, desde temprano en la mañana hasta tarde en la noche, y siempre aceptamos clientes sin cita. Te atendemos en English y español — llama al (407) 820-4541 para reservar.',
    },
  },
];

// ——— Sanity swap (wiring guide §6, Locations query verbatim) ———
const LOCATIONS_QUERY = `*[_type == "location"] | order(order asc) {
  _id,
  "slug": slug.current,
  name, area, street, city, state, zip,
  phoneDisplay, phoneHref,
  "whatsapp": whatsappUrl,
  mapsUrl,
  "geo": geo { lat, lng },
  rating, reviewCount,
  hours[] { day, opens, closes, display },
  hoursSummary, introHeading, intro
}`;

export const locations: Location[] = await (async () => {
  if (!USE_SANITY) return localLocations;
  const fetched = await fetchSanity<Location[]>('locations', LOCATIONS_QUERY);
  if (fetched && fetched.length === localLocations.length) return fetched;
  console.error(
    '[sanity] locations: fetch missing/incomplete — using LOCAL location data',
  );
  return localLocations;
})();

export const shop1 = locations[0];
export const shop2 = locations[1];

export function getLocation(slug: string): Location {
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) throw new Error(`Unknown location slug: ${slug}`);
  return loc;
}
