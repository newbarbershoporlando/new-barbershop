// Page copy (verbatim from content-pack.md) + per-page SEO fields.
// Locations parent + Blog index SEO are build-time fills flagged in
// build-notes.md (content pack Gaps 1–2: no SureRank fields were recorded).

import type { Lang } from './ui';

export interface Seo {
  title: string;
  description: string;
}

export const pageSeo: Record<string, Record<Lang, Seo>> = {
  home: {
    en: {
      title: 'Barber Shop Orlando | New Barbershop',
      description:
        'Barber shop in Orlando — family-run since 2003. Two shops on Orange Blossom Trail, open 7 days a week. Call (407) 470-4846 or (407) 820-4541 to book.',
    },
    es: {
      title: 'Barbería en Orlando | New Barbershop',
      description:
        'Barbería familiar en Orlando desde 2003, con dos locales en Orange Blossom Trail. Abiertos los 7 días. Llama al (407) 470-4846 o al (407) 820-4541.',
    },
  },
  services: {
    en: {
      title: "Men's Haircuts Orlando | New Barbershop",
      description:
        "Men's haircuts in Orlando — fades, beard trims, hot towel shaves and more. Two shops on Orange Blossom Trail. Call (407) 470-4846 or (407) 820-4541 to book.",
    },
    es: {
      title: 'Cortes de cabello para hombre en Orlando | New Barbershop',
      description:
        'Cortes de cabello para hombre en Orlando: degradados, arreglo de barba, afeitado con toalla caliente y más. Llama al (407) 470-4846 o al (407) 820-4541.',
    },
  },
  about: {
    en: {
      title: 'Family-Run Barber Shop Orlando | New Barbershop',
      description:
        'Family-run barber shop in Orlando since 2003. Two shops on Orange Blossom Trail, 20+ years of experience. Call (407) 470-4846 or (407) 820-4541 to book.',
    },
    es: {
      title: 'Barbería familiar en Orlando desde 2003 | New Barbershop',
      description:
        'Barbería familiar en Orlando desde 2003, con más de 20 años de experiencia y dos locales en Orange Blossom Trail. Llama al (407) 470-4846.',
    },
  },
  contact: {
    en: {
      title: 'Barber Shop on Orange Blossom Trail Orlando | New Barbershop',
      description:
        'Barber shop on Orange Blossom Trail in Orlando — two locations, open 7 days a week. Call Southchase (407) 470-4846 or Florida Mall (407) 820-4541 to book today.',
    },
    es: {
      title: 'Barbería en Orange Blossom Trail, Orlando | New Barbershop',
      description:
        'Dos barberías en Orange Blossom Trail, Orlando, abiertas los 7 días. Llama a Southchase al (407) 470-4846 o a Florida Mall al (407) 820-4541.',
    },
  },
  locations: {
    // FINAL: Agent B's new-copy.md §5A (closes content-pack Gap 1).
    en: {
      title: 'Barber Shops on Orange Blossom Trail, Orlando | New Barbershop',
      description:
        'Two barber shops on Orange Blossom Trail in Orlando — New Barbershop 1 in Southchase and New Barbershop 2 near Florida Mall, open 7 days a week. Call (407) 470-4846 or (407) 820-4541 to book.',
    },
    es: {
      title: 'Barberías en Orange Blossom Trail, Orlando | New Barbershop',
      description:
        'Dos barberías en Orange Blossom Trail en Orlando — New Barbershop 1 en Southchase y New Barbershop 2 cerca de Florida Mall, abiertas los 7 días de la semana. Llama al (407) 470-4846 o al (407) 820-4541 para reservar.',
    },
  },
  blog: {
    // FINAL: Agent B's new-copy.md §5B (closes content-pack Gap 2).
    en: {
      title: 'Grooming Tips, Styles & Shop News | New Barbershop Orlando',
      description:
        'Grooming tips, style ideas and shop news from the barbers at New Barbershop in Orlando — fades, braids, beard care and more. Call (407) 470-4846 or (407) 820-4541 to book.',
    },
    es: {
      title: 'Consejos de cuidado y estilos | New Barbershop Orlando',
      description:
        'Consejos de cuidado personal, ideas de estilo y novedades de los barberos de New Barbershop en Orlando — degradados, trenzas, cuidado de la barba y más. Llama al (407) 470-4846 o al (407) 820-4541 para reservar.',
    },
  },
  shop1: {
    en: {
      title: 'Barber Shop in Orlando 32837 | New Barbershop 1',
      description:
        'New Barbershop 1 in Orlando 32837 — family-run since 2003, open 7 days a week. Walk-ins welcome. Call (407) 470-4846 to book your haircut today.',
    },
    es: {
      title: 'Barbería en Southchase, Orlando 32837 | New Barbershop 1',
      description:
        'New Barbershop 1 en Southchase, Orlando 32837: barbería familiar desde 2003, abierta los 7 días. Sin cita o llama al (407) 470-4846.',
    },
  },
  shop2: {
    en: {
      title: 'Barber Shop in Orlando 32809 | New Barbershop 2',
      description:
        'New Barbershop 2 in Orlando 32809 — family-run since 2003, open 7 days a week. Walk-ins welcome. Call (407) 820-4541 to book your haircut today.',
    },
    es: {
      title: 'Barbería cerca de Florida Mall, Orlando 32809 | New Barbershop 2',
      description:
        'New Barbershop 2 cerca de Florida Mall, Orlando 32809: barbería familiar desde 2003, abierta los 7 días. Sin cita o llama al (407) 820-4541.',
    },
  },
};

export const homeCopy = {
  en: {
    heroH1: 'Top-Rated Barber Shop in Orlando for Fades & Grooming',
    heroLine:
      'Precision haircuts, beard trims, hot towel shaves, razor line-ups, hair designs, braids and kids cuts — walk-ins welcome at Southchase and near Florida Mall.',
    workHeading: 'Our Work',
    workIntro:
      'Real cuts from our own chairs — every photo below is our work, no stock pictures.',
    servicesHeading: 'Explore Our Premium Services',
    servicesIntro:
      'Discover the perfect blend of style and sophistication with our range of grooming services tailored to you.',
    storyHeading: 'The Story Behind New Barbershop',
    // CORRECTED per Agent B's new-copy.md §5C (closes content-pack Gap 3):
    // "family-run since 2003 / over 20 years" replaces "over a decade".
    storyBody:
      'Family-run since 2003, New Barbershop brings over 20 years of experience to every chair. We have perfected the art of haircuts and shaves, combining classic techniques with modern trends. Our barbers are dedicated to honing their skills, continuously learning to provide the highest level of service for every client. We pride ourselves on our attention to detail and our commitment to exceptional grooming.',
    experienceHeading: 'Experience Unmatched Grooming Services Today',
    experienceIntro:
      'We pride ourselves on offering personalized attention, exceptional skill, and a relaxing atmosphere that ensures every visit is a memorable experience.',
    experienceCards: [
      {
        title: 'Personalized Attention',
        body: 'We believe that every client deserves individualized care. Our barbers take the time to understand your style preferences and work diligently to achieve your desired look.',
        cta: 'services',
      },
      {
        title: 'Two Shops, Walk-Ins Welcome',
        body: 'Visit us in Southchase or near Florida Mall — two family-run shops on Orange Blossom Trail, open seven days a week. Walk-ins are always welcome, and we serve you in English and Spanish.',
        cta: 'locations',
      },
    ],
    locationsLine: 'Visit either of our two Orlando barbershops.',
  },
  es: {
    heroH1: 'La Barbería Mejor Valorada de Orlando para Fades y Grooming',
    heroLine:
      'Cortes de precisión, arreglo de barba, afeitado con toalla caliente, perfilado a navaja, diseños en el cabello, trenzas y cortes para niños — sin cita previa en Southchase y cerca de Florida Mall.',
    workHeading: 'Nuestro trabajo',
    workIntro:
      'Cortes reales de nuestras propias sillas — cada foto de abajo es nuestro trabajo, sin fotos de archivo.',
    servicesHeading: 'Explora nuestros servicios premium',
    servicesIntro:
      'Descubre la combinación perfecta de estilo y sofisticación con nuestra gama de servicios de cuidado personal diseñados para ti.',
    storyHeading: 'La historia detrás de New Barbershop',
    storyBody:
      'Un negocio familiar desde 2003, New Barbershop aporta más de 20 años de experiencia a cada cliente. Hemos perfeccionado el arte de los cortes de cabello y los afeitados, combinando técnicas clásicas con tendencias modernas. Nuestros barberos se dedican a perfeccionar sus habilidades, aprendiendo continuamente para brindar el más alto nivel de servicio a cada cliente. Nos enorgullecemos de nuestra atención al detalle y nuestro compromiso con un cuidado personal excepcional.',
    experienceHeading: 'Experimenta hoy un cuidado sin igual',
    experienceIntro:
      'Nos enorgullecemos de ofrecer atención personalizada, habilidad excepcional y un ambiente relajante que garantiza que cada visita sea una experiencia memorable.',
    experienceCards: [
      {
        title: 'Atención personalizada',
        body: 'Creemos que cada cliente merece un cuidado individual. Nuestros barberos se toman el tiempo de entender tus preferencias de estilo y trabajan con dedicación para lograr el estilo que deseas.',
        cta: 'services',
      },
      {
        title: 'Dos barberías, sin cita previa',
        body: 'Visítanos en Southchase o cerca de Florida Mall — dos barberías familiares en Orange Blossom Trail, abiertas los siete días de la semana. Siempre aceptamos clientes sin cita y te atendemos en inglés y español.',
        cta: 'locations',
      },
    ],
    locationsLine: 'Visita cualquiera de nuestras dos barberías en Orlando.',
  },
} as const;

export const servicesCopy = {
  en: {
    eyebrow: 'Grooming Excellence',
    heading: 'Explore Our Premium Services',
    intro:
      'Discover the perfect blend of style and sophistication with our range of grooming services tailored to you.',
    galleryHeading: 'Our Work',
    galleryIntro: "See a style you like? Show the photo to your barber and we'll take it from there.",
  },
  es: {
    eyebrow: 'Excelencia en cuidado personal',
    heading: 'Explora nuestros servicios premium',
    intro:
      'Descubre la combinación perfecta de estilo y sofisticación con nuestra gama de servicios de cuidado personal diseñados para ti.',
    galleryHeading: 'Nuestro trabajo',
    galleryIntro: '¿Ves un estilo que te gusta? Muéstrale la foto a tu barbero y nosotros nos encargamos del resto.',
  },
} as const;

export const aboutCopy = {
  en: {
    eyebrow: 'Grooming Excellence',
    heading: 'The Story Behind New Barbershop',
    lead: 'Family-run since 2003, New Barbershop brings over 20 years of experience to every chair in Orlando.',
    body1:
      'We are two Orlando barbershops on South Orange Blossom Trail: New Barbershop 1 at 9741 S Orange Blossom Trl, Orlando, FL 32837, in Southchase, and New Barbershop 2 at 6220 S Orange Blossom Trl, Orlando, FL 32809, near Florida Mall — about 3.7 miles apart. Walk-ins are always welcome. Booking is by phone: call Southchase at (407) 470-4846 or Florida Mall at (407) 820-4541. WhatsApp is available at Southchase.',
    body2:
      'Both shops are open seven days a week, from early morning to late evening. Our full service covers haircuts, beard trims, hot towel shaves, hair designs, eyebrows and kids cuts — and braids for men and women at Southchase. We serve you in English y español. With over 1,400 Google reviews across both shops, and our Southchase shop rated 5.0 stars, we take pride in every cut and every client.',
    valuesHeading: 'Our Core Values',
    valuesIntro: 'Three things have kept our chairs full since 2003:',
    values: [
      {
        title: 'Family First',
        body: "Family-run since 2003, we're not a chain. We run two Orlando barbershops like a family business — because we are one — and we treat regulars and first-timers alike like neighbors, because most of you are.",
      },
      {
        title: 'The Craft, Done Right',
        body: "Fades, classic cuts, beard work and hot towel shaves — every cut is finished clean and checked before you leave the chair. If it isn't sharp, it isn't done, and we fix it before you walk out.",
      },
      {
        title: 'Walk In, In Your Language',
        body: "No appointment? Walk-ins are welcome at both shops, seven days a week. And we serve you in English y español — tell us the style you want in the language you're most comfortable in.",
      },
    ],
    teamHeading: 'Experience in Every Chair',
    teamIntro:
      "New Barbershop is family-run, and our barbers bring over 20 years of experience to the chairs at both Orlando shops — Southchase and near Florida Mall. The team works the full craft: precision fades and classic cuts, beard trims and hot towel shaves, razor line-ups and hair designs, and kids cuts cut with patience. At Southchase, braids for men and women are part of the service too. Tell us the style you're after — in English or Spanish — and we'll take it from there. Walk-ins are always welcome.",
    teamButton: (n: number) => `New Barbershop ${n} — See Photos & Reviews on Google`,
  },
  es: {
    eyebrow: 'Excelencia en cuidado personal',
    heading: 'La historia detrás de New Barbershop',
    lead: 'Un negocio familiar desde 2003, New Barbershop aporta más de 20 años de experiencia a cada silla en Orlando.',
    body1:
      'Somos dos barberías de Orlando sobre South Orange Blossom Trail: New Barbershop 1 en 9741 S Orange Blossom Trl, Orlando, FL 32837, en Southchase, y New Barbershop 2 en 6220 S Orange Blossom Trl, Orlando, FL 32809, cerca de Florida Mall — a unas 3.7 millas de distancia. Siempre aceptamos clientes sin cita. Las reservas son por teléfono: llama a Southchase al (407) 470-4846 o a Florida Mall al (407) 820-4541. WhatsApp está disponible en Southchase.',
    body2:
      'Ambas barberías abren los siete días de la semana, desde temprano en la mañana hasta tarde en la noche. Nuestro servicio completo incluye cortes de cabello, arreglos de barba, afeitados con toalla caliente, diseños en el cabello, cejas y cortes para niños — y trenzas para hombres y mujeres en Southchase. Te atendemos en inglés y español. Con más de 1,400 reseñas de Google entre ambas barberías, y nuestro local de Southchase con una calificación de 5.0 estrellas, nos enorgullecemos de cada corte y cada cliente.',
    valuesHeading: 'Nuestros valores',
    valuesIntro: 'Tres cosas han mantenido nuestras sillas llenas desde 2003:',
    values: [
      {
        title: 'La familia primero',
        body: 'Un negocio familiar desde 2003: no somos una cadena. Llevamos nuestras dos barberías de Orlando como lo que somos, un negocio de familia, y tratamos a los clientes de siempre y a los nuevos como vecinos, porque la mayoría lo son.',
      },
      {
        title: 'El oficio, bien hecho',
        body: 'Degradados, cortes clásicos, arreglo de barba y afeitado con toalla caliente — cada corte se termina limpio y se revisa antes de que te levantes de la silla. Si no está impecable, no está terminado, y lo corregimos antes de que salgas.',
      },
      {
        title: 'Ven sin cita, en tu idioma',
        body: '¿Sin cita? Aceptamos clientes sin cita en ambas barberías, los siete días de la semana. Y te atendemos en inglés y español — cuéntanos el estilo que buscas en el idioma en el que te sientas más cómodo.',
      },
    ],
    teamHeading: 'Experiencia en cada silla',
    teamIntro:
      'New Barbershop es un negocio familiar, y nuestros barberos aportan más de 20 años de experiencia a las sillas de ambas barberías de Orlando — Southchase y cerca de Florida Mall. El equipo domina el oficio completo: degradados de precisión y cortes clásicos, arreglos de barba y afeitados con toalla caliente, delineados a navaja y diseños en el cabello, y cortes para niños hechos con paciencia. En Southchase, las trenzas para hombres y mujeres también forman parte del servicio. Cuéntanos el estilo que buscas — en inglés o español — y nosotros nos encargamos del resto. Siempre aceptamos clientes sin cita.',
    teamButton: (n: number) => `New Barbershop ${n} — Mira fotos y reseñas en Google`,
  },
} as const;

export const contactCopy = {
  en: {
    heading: 'Get in Touch',
    locationsHeading: 'Our Locations',
    intro:
      'Two Orlando barbershops on South Orange Blossom Trail — pick your shop and call to book, or just walk in. New Barbershop 1 in Southchase, (407) 470-4846, is open daily 8:00 AM–10:30 PM and is also on WhatsApp. New Barbershop 2 near Florida Mall, (407) 820-4541, is open Monday 9:00 AM–9:00 PM and Tuesday–Sunday 9:00 AM–10:00 PM. Both shops welcome walk-ins — tap a number below to call.',
    instagramLead: 'See our latest cuts on Instagram:',
  },
  es: {
    heading: 'Contáctanos',
    locationsHeading: 'Nuestras ubicaciones',
    intro:
      'Dos barberías en Orlando sobre South Orange Blossom Trail — elige tu barbería y llama para reservar, o ven sin cita. New Barbershop 1 en Southchase, (407) 470-4846, abre todos los días de 8:00 AM a 10:30 PM y también está en WhatsApp. New Barbershop 2 cerca de Florida Mall, (407) 820-4541, abre lunes de 9:00 AM a 9:00 PM y de martes a domingo de 9:00 AM a 10:00 PM. Ambas barberías aceptan clientes sin cita — toca un número abajo para llamar.',
    instagramLead: 'Mira nuestros cortes más recientes en Instagram:',
  },
} as const;

// "How It Works" block (new-copy.md §3) — shared by Home + both location pages.
export const howItWorks = {
  en: {
    heading: 'How It Works',
    intro: 'No apps, no online booking — getting your cut at New Barbershop is simple:',
    steps: [
      {
        title: 'Call your shop',
        body: 'Pick your shop and call to book your chair: Southchase at (407) 470-4846 or Florida Mall at (407) 820-4541. Rather just come by? Walk-ins are always welcome.',
      },
      {
        title: 'Come in and sit down',
        body: "Tell your barber the style you're after, and we'll take care of the rest — in English or Spanish.",
      },
      {
        title: 'Leave sharp',
        body: 'Walk out with a clean cut and a fresh finish, seven days a week.',
      },
    ],
  },
  es: {
    heading: 'Cómo funciona',
    intro: 'Sin aplicaciones y sin reservas en línea — cortarte el cabello en New Barbershop es sencillo:',
    steps: [
      {
        title: 'Llama a tu barbería',
        body: 'Elige tu barbería y llama para apartar tu cita: Southchase al (407) 470-4846 o Florida Mall al (407) 820-4541. ¿Prefieres venir directamente? Siempre aceptamos clientes sin cita.',
      },
      {
        title: 'Ven y siéntate',
        body: 'Cuéntale a tu barbero el estilo que buscas y nosotros nos encargamos del resto — en inglés o español.',
      },
      {
        title: 'Sal luciendo impecable',
        body: 'Sal con un corte limpio y un acabado impecable, los siete días de la semana.',
      },
    ],
  },
} as const;

// Post-redesign audit fix (2026-11-17, owner Phase 4 item 4): on a
// location detail page, How It Works step 1 leads with THAT shop's own
// number instead of asking the visitor to pick between both numbers.
// The homepage keeps the shared both-shops step above (correct there);
// the other shop's number stays on the location page in the "Also
// visit" cross-link and the footer.
export const howItWorksStep1ByShop = {
  en: {
    shop1:
      'Call Southchase at (407) 470-4846 to book your chair. Rather just come by? Walk-ins are always welcome.',
    shop2:
      'Call Florida Mall at (407) 820-4541 to book your chair. Rather just come by? Walk-ins are always welcome.',
  },
  es: {
    shop1:
      'Llama a Southchase al (407) 470-4846 para apartar tu cita. ¿Prefieres venir directamente? Siempre aceptamos clientes sin cita.',
    shop2:
      'Llama a Florida Mall al (407) 820-4541 para apartar tu cita. ¿Prefieres venir directamente? Siempre aceptamos clientes sin cita.',
  },
} as const;

// Services gallery — images + Agent B's named-style captions (new-copy.md §4),
// files and alt texts from assets-ready/manifest.md §3. PLACEHOLDER stock:
// every photo is swapped for the shops' real Ads-campaign photos at the media
// swap. 7 of B's 12 captions have NO honest photo in the backup (manifest §3):
// those entries carry `reserved: true` and `src: null` — they are held for
// the media swap and are NEVER rendered with a mismatched photo.
export interface GalleryItem {
  src: string | null;
  /** Lightbox-size variant of src (natural aspect, up to 1200px on the
      long edge, NO crop — owner phone pass 2026-11-16: the lightbox must
      show the complete photo; the old 3:2-crop -lg files cut the tops
      and bottoms off the owner's portrait photos). */
  largeSrc: string | null;
  alt: { en: string; es: string };
  caption?: {
    style: { en: string; es: string };
    text: { en: string; es: string };
  };
  reserved?: boolean;
  /** CSS object-position for the grid crop (e.g. '50% 100%' keeps the
      bottom of the frame — beard — in view). Unset = default center. */
  objectPosition?: string;
}

const lgOf = (src: string | null): string | null =>
  src ? src.replace(/\.webp$/, '-lg.webp') : null;

const cap = (
  src: string | null,
  alten: string,
  altes: string,
  sen: string,
  ses: string,
  ten: string,
  tes: string,
  reserved = false,
  objectPosition?: string,
): GalleryItem => ({
  src,
  largeSrc: lgOf(src),
  alt: { en: alten, es: altes },
  caption: { style: { en: sen, es: ses }, text: { en: ten, es: tes } },
  reserved,
  objectPosition,
});

export const galleryItems: GalleryItem[] = [
  cap('/images/classic-haircut-orlando.webp',
    'Client with a classic pompadour haircut and shaped beard at a barber shop in Orlando, FL', 'Cliente con un corte clásico con tupé y barba perfilada en una barbería en Orlando, FL',
    'Classic Haircut', 'Corte clásico',
    'A timeless cut, tailored to your style and finished clean.', 'Un corte atemporal, adaptado a tu estilo y con un acabado limpio.',
    false, '50% 100%'),
  cap('/images/high-skin-fade-orlando.webp',
    'Client with a finished high skin fade haircut and shaped beard at a barber shop in Orlando, FL', 'Cliente con un degradado alto al ras terminado y barba perfilada en una barbería en Orlando, FL',
    'High Skin Fade', 'Degradado alto al ras',
    'A bold, high-contrast fade taken down to the skin.', 'Un degradado llamativo y de alto contraste, llevado hasta la piel.'),
  cap('/images/burst-fade-orlando.webp',
    'Young client with a curly textured top and a burst fade haircut around the ear at a barber shop in Orlando, FL', 'Cliente joven con la parte superior rizada y texturizada y un degradado burst alrededor de la oreja en una barbería en Orlando, FL',
    'Burst Fade', 'Degradado burst',
    'A curved fade that arcs around the ear for a standout finish.', 'Un degradado curvo que rodea la oreja, para un acabado que destaca.'),
  cap('/images/buzz-cut-orlando.webp',
    'Client with a short textured crop and a skin fade, side view, at a barber shop in Orlando, FL', 'Cliente con un corte corto texturizado y un degradado al ras, vista de lado, en una barbería en Orlando, FL',
    'Textured Crop & Skin Fade', 'Corte texturizado con degradado al ras',
    'Short textured length on top, faded clean down to the skin on the sides.', 'Largo corto y texturizado arriba, degradado limpio hasta la piel en los laterales.'),
  cap('/images/haircut-and-beard-combo-orlando-flip.webp',
    'Finished haircut and beard combo with a crisp line-up, side view, at a barber shop in Orlando, FL', 'Combo de corte y barba terminado con delineado definido, vista de lado, en una barbería en Orlando, FL',
    'Haircut & Beard Combo', 'Combo corte + barba',
    'The full service: cut and beard, finished together in one visit.', 'El servicio completo: corte y barba, terminados juntos en una sola visita.',
    false, '50% 100%'),
  cap('/images/hot-towel-shave-orlando.webp',
    "Barber wrapping a hot towel around a reclined client's beard for a traditional shave at a barber shop in Orlando, FL", 'Barbero envolviendo una toalla caliente alrededor de la barba de un cliente reclinado para un afeitado tradicional en una barbería en Orlando, FL',
    'Hot Towel Shave', 'Afeitado con toalla caliente',
    'Our traditional shave — hot towels, a close finish, total relaxation.', 'Nuestro afeitado tradicional — toallas calientes, un acabado al ras y relajación total.'),
  cap('/images/razor-line-up-orlando.webp',
    'Client with a high skin fade and a razor line-up at a barber shop in Orlando, FL', 'Cliente con un degradado alto al ras y un delineado con navaja en una barbería en Orlando, FL',
    'Razor Line-Up', 'Delineado con navaja',
    'Crisp razor edges on the hairline and the beard.', 'Bordes definidos con navaja en la línea del cabello y la barba.'),
  cap('/images/hair-design-orlando.webp',
    'Client with a carved flame hair design and a fade at a barber shop in Orlando, FL', 'Cliente con un diseño de llamas tallado en el cabello y un degradado en una barbería en Orlando, FL',
    'Hair Design', 'Diseño en el cabello',
    'Custom designs and patterns, cut to your idea.', 'Diseños y patrones personalizados, cortados según tu idea.'),
  cap('/images/kids-fade-haircut-orlando.webp',
    'Young client with a textured fringe and a kids fade haircut at a barber shop in Orlando, FL', 'Cliente joven con flequillo texturizado y degradado para niños en una barbería en Orlando, FL',
    'Kids Fade', 'Degradado para niños',
    'Clean fades for young clients, cut with patience.', 'Degradados limpios para los clientes jóvenes, cortados con paciencia.'),
  cap('/images/braids-orlando.webp',
    'Client with neat cornrow braids and faded sides at a barber shop in Orlando, FL', 'Cliente con trenzas cornrow impecables y laterales degradados en una barbería en Orlando, FL',
    'Braids', 'Trenzas',
    'Neat, comfortable braiding for men and women, made to last.', 'Trenzado limpio y cómodo para hombres y mujeres, hecho para durar.'),
  // General set — the shops' OWN photos, no style caption. Design 1
  // (2026-11-16): the previous general set was 5 Pexels stock items,
  // and the captioned Low Fade / Taper Fade slots were stock too —
  // 7 stock photos under an "Our Work" heading. All 7 are removed;
  // in their place, the two staged real alternates from
  // assets-ready/haircuts (haircut-05: finished fade + beard with the
  // barber; haircut-07: braids in progress). The gallery is now 100%
  // the shops' real photos. Low Fade and Taper Fade keep their full
  // presence in the services list, category tiles and blog content.
  { src: '/images/barber-with-client-fade-orlando.webp', largeSrc: lgOf('/images/barber-with-client-fade-orlando.webp'), alt: { en: "Barber standing behind a client with a finished skin fade and shaped beard at a barber shop in Orlando, FL", es: 'Barbero de pie detrás de un cliente con un degradado al ras terminado y barba perfilada en una barbería en Orlando, FL' } },
  { src: '/images/barber-braiding-client-hair-orlando.webp', largeSrc: lgOf('/images/barber-braiding-client-hair-orlando.webp'), alt: { en: "Barber working on a client's cornrow braids in the chair at a barber shop in Orlando, FL", es: 'Barbero trabajando en las trenzas cornrow de un cliente en la silla en una barbería en Orlando, FL' } },
  // 2026-11-17: owner-supplied kids photo, added as a third general item
  // (the captioned Kids Fade slots already carry other real photos).
  { src: '/images/kids-textured-crop-orlando.webp', largeSrc: lgOf('/images/kids-textured-crop-orlando.webp'), alt: { en: 'Young client with a textured crop and a temple fade at a barber shop in Orlando, FL', es: 'Cliente joven con corte texturizado y degradado en la sien en una barbería en Orlando, FL' } },
];

/* Homepage work gallery (owner addition 2026-11-15): REAL client
   photos only — the captioned haircut set, reusing the Services
   gallery entries by src so captions/alts can never drift apart.
   No stock items. (The Hot Towel Shave photo, supplied 2026-11-17,
   lives in the Services gallery only — this homepage set stays as
   curated.) haircut-16 takes the Kids Fade slot here (the stronger
   shot); haircut-15 is new. */
const bySrc = (src: string): GalleryItem => galleryItems.find((i) => i.src === src)!;
export const homeGalleryItems: GalleryItem[] = [
  bySrc('/images/razor-line-up-orlando.webp'),
  bySrc('/images/hair-design-orlando.webp'),
  bySrc('/images/braids-orlando.webp'),
  bySrc('/images/buzz-cut-orlando.webp'),
  bySrc('/images/burst-fade-orlando.webp'),
  cap('/images/burst-fade-and-beard-orlando.webp',
    'Client with a burst fade around the ear and a full shaped beard, side view, at a barber shop in Orlando, FL', 'Cliente con un degradado burst alrededor de la oreja y barba completa perfilada, vista de lado, en una barbería en Orlando, FL',
    'Burst Fade & Beard', 'Degradado burst + barba',
    'A curved burst fade finished with clean, shaped beard work.', 'Un degradado burst curvo terminado con un arreglo de barba limpio y perfilado.'),
  cap('/images/kids-fade-orlando.webp',
    'Young client with a skin fade and a sharp line-up — a kids fade haircut at a barber shop in Orlando, FL', 'Cliente joven con un degradado al ras y un delineado definido — degradado para niños en una barbería en Orlando, FL',
    'Kids Fade', 'Degradado para niños',
    'Clean fades for young clients, cut with patience.', 'Degradados limpios para los clientes jóvenes, cortados con paciencia.'),
  bySrc('/images/classic-haircut-orlando.webp'),
  bySrc('/images/high-skin-fade-orlando.webp'),
  bySrc('/images/haircut-and-beard-combo-orlando-flip.webp'),
];

/* About page team gallery (improvement phase): captioned real photos
   reused by src from the Services gallery, in curated order. */
export const aboutTeamItems: GalleryItem[] = [
  bySrc('/images/classic-haircut-orlando.webp'),
  bySrc('/images/braids-orlando.webp'),
  bySrc('/images/burst-fade-orlando.webp'),
  bySrc('/images/hair-design-orlando.webp'),
  bySrc('/images/haircut-and-beard-combo-orlando-flip.webp'),
];
