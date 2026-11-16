// Structured content — mirrors the Sanity `post` schema (sanity/schemas/post.ts).
// Bodies are verbatim from the content pack (staging build), EN + ES.
// Slugs are Agent D's planned inventory (seo-tracking-plan.md §2.1):
// /blog/<slug>/ in both languages. Featured images + alts: manifest §5.

export interface PostSection {
  heading: { en: string; es: string };
  body: { en: string; es: string };
}

export interface PostLocale {
  title: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  closing: string;
}

export interface Post {
  _id: string;
  slug: string;
  image: string;
  imageAlt: { en: string; es: string };
  locales: { en: PostLocale; es: PostLocale };
  sections: PostSection[];
}

export const posts: Post[] = [
  {
    _id: 'post-1',
    slug: 'blog/top-rated-barber-shop-orlando',
    image: '/images/blog-01-top-rated.webp',
    imageAlt: {
      en: "Barber combing a client's hair in the shop",
      es: 'Barbero peinando el cabello de un cliente en la barbería',
    },
    locales: {
      en: {
        title: 'Top-Rated Barber Shop in Orlando — Family-Run Since 2003',
        seoTitle: 'Top-Rated Barber Shop in Orlando — Family-Run Since 2003 | New Barbershop Orlando',
        metaDescription:
          'Family-run barber shop in Orlando since 2003. Two shops on Orange Blossom Trail, open 7 days a week. Call (407) 470-4846 or (407) 820-4541 to book today.',
        intro:
          'Looking for a barber shop Orlando trusts for every cut? It is about more than a chair and clippers — it is about a team that knows your style, remembers how you like it, and treats every visit like it matters. At New Barbershop, that is how we have worked since 2003.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Top-Rated Barber Shop in Orlando — Family-Run Since 2003',
        seoTitle: 'Top-Rated Barber Shop in Orlando — Family-Run Since 2003 | New Barbershop Orlando',
        metaDescription:
          'Family-run barber shop in Orlando since 2003. Two shops on Orange Blossom Trail, open 7 days a week. Call (407) 470-4846 or (407) 820-4541 to book today.',
        intro:
          '¿Buscas una barbería en Orlando en la que confiar para cada corte? Es más que una silla y unas máquinas — es un equipo que conoce tu estilo, recuerda cómo te gusta y trata cada visita como algo importante. En New Barbershop, así hemos trabajado desde 2003.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: {
          en: 'A Family-Run Barber Shop Orlando Has Trusted Since 2003',
          es: 'Una barbería familiar en la que Orlando confía desde 2003',
        },
        body: {
          en: 'We are a family-run business with over 20 years of experience behind the chair. Our two Orlando shops sit on South Orange Blossom Trail — New Barbershop 1 at 9741 S Orange Blossom Trl, near Kissimmee, and New Barbershop 2 at 6220 S Orange Blossom Trl, near Florida Mall, about 3.7 miles apart. Walk-ins are always welcome, and booking is by phone. With over 1,400 Google reviews across both shops, and Shop 1 rated 5.0 stars, we take pride in every cut and every client.',
          es: 'Somos un negocio familiar con más de 20 años de experiencia detrás de la silla. Nuestras dos barberías de Orlando están sobre South Orange Blossom Trail — New Barbershop 1 en 9741 S Orange Blossom Trl, cerca de Kissimmee, y New Barbershop 2 en 6220 S Orange Blossom Trl, cerca de Florida Mall, a unas 3.7 millas de distancia. Siempre aceptamos clientes sin cita y las reservas son por teléfono. Con más de 1,400 reseñas de Google entre ambas barberías, y Shop 1 con 5.0 estrellas, nos enorgullecemos de cada corte y cada cliente.',
        },
      },
      {
        heading: { en: 'Services for Every Style', es: 'Servicios para cada estilo' },
        body: {
          en: 'Our full service covers haircuts, beard trims, hot towel shaves, hair designs, eyebrows and kids cuts — and braids for men and women at Shop 1. Whether you want a clean fade, a sharp line-up or a classic cut, our barbers shape it to your style. See the full list on our Services page. We serve you in English y español, and both shops are open seven days a week, from early morning to late evening.',
          es: 'Nuestro servicio completo incluye cortes de cabello, arreglos de barba, afeitados con toalla caliente, diseños en el cabello, cejas y cortes para niños — y trenzas para hombres y mujeres en Shop 1. Ya sea que quieras un degradado limpio, un delineado definido o un corte clásico, nuestros barberos lo adaptan a tu estilo. Mira la lista completa en nuestra página de Servicios. Te atendemos en English y español, y ambas barberías abren los siete días de la semana, desde temprano en la mañana hasta tarde en la noche.',
        },
      },
      {
        heading: { en: 'Visit Us or Call to Book', es: 'Visítanos o llama para reservar' },
        body: {
          en: 'Call to book: Shop 1 (407) 470-4846 · Shop 2 (407) 820-4541. WhatsApp is available for Shop 1.',
          es: 'Llama para reservar: Shop 1 (407) 470-4846 · Shop 2 (407) 820-4541. WhatsApp está disponible para Shop 1.',
        },
      },
    ],
  },
  {
    _id: 'post-2',
    slug: 'blog/expert-fades-orlando',
    image: '/images/blog-02-fades.webp',
    imageAlt: {
      en: "Barber fading a client's hair with clippers",
      es: 'Barbero haciendo un degradado con máquina a un cliente',
    },
    locales: {
      en: {
        title: 'Expert Fades in Orlando — Precision Haircuts for Every Style',
        seoTitle: 'Expert Fades in Orlando — Precision Haircuts for Every Style | New Barbershop Orlando',
        metaDescription:
          'Expert fades in Orlando — clean blends, sharp line-ups, precision haircuts. Two shops on Orange Blossom Trail. Call (407) 470-4846 or (407) 820-4541 to book.',
        intro:
          'Looking for fades in Orlando that stay sharp long after you leave the chair? A great fade is all about the blend — clean lines, a smooth transition, and a shape that fits your style. At New Barbershop, our barbers have spent over 20 years perfecting that blend.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Expert Fades in Orlando — Precision Haircuts for Every Style',
        seoTitle: 'Expert Fades in Orlando — Precision Haircuts for Every Style | New Barbershop Orlando',
        metaDescription:
          'Expert fades in Orlando — clean blends, sharp line-ups, precision haircuts. Two shops on Orange Blossom Trail. Call (407) 470-4846 or (407) 820-4541 to book.',
        intro:
          '¿Buscas degradados en Orlando que se mantengan definidos mucho después de salir de la silla? Un gran degradado está en la mezcla — líneas limpias, una transición suave y una forma que va con tu estilo. En New Barbershop, nuestros barberos llevan más de 20 años perfeccionando esa mezcla.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'Fades in Orlando for Every Style', es: 'Degradados en Orlando para cada estilo' },
        body: {
          en: 'From low fades to high skin fades, tapers to burst fades, we shape each cut to your hair and your look. Whether you want a clean everyday fade or a bold design, we take our time on the details — the line-up, the edges, the finish. Our full service also covers beard trims, hot towel shaves, hair designs, eyebrows and kids cuts — and braids for men and women at Shop 1. See everything we do on our Services page.',
          es: 'Desde degradados bajos hasta degradados altos al ras, tapers y burst fades, adaptamos cada corte a tu cabello y tu look. Ya sea que quieras un degradado limpio para todos los días o un diseño llamativo, nos tomamos el tiempo en los detalles — el delineado, los bordes, el acabado. Nuestro servicio completo también incluye arreglos de barba, afeitados con toalla caliente, diseños en el cabello, cejas y cortes para niños — y trenzas para hombres y mujeres en Shop 1. Mira todo lo que hacemos en nuestra página de Servicios.',
        },
      },
      {
        heading: { en: 'Two Orlando Shops, One Standard', es: 'Dos barberías en Orlando, un mismo estándar' },
        body: {
          en: 'We are a family-run business since 2003, with two shops on South Orange Blossom Trail — New Barbershop 1 at 9741 S Orange Blossom Trl, near Kissimmee, and New Barbershop 2 at 6220 S Orange Blossom Trl, near Florida Mall, about 3.7 miles apart. Walk-ins are always welcome, and booking is by phone. With over 1,400 Google reviews across both shops, and Shop 1 rated 5.0 stars, we take pride in every cut and every client. We serve you in English y español, and both shops are open seven days a week, from early morning to late evening.',
          es: 'Somos un negocio familiar desde 2003, con dos barberías sobre South Orange Blossom Trail — New Barbershop 1 en 9741 S Orange Blossom Trl, cerca de Kissimmee, y New Barbershop 2 en 6220 S Orange Blossom Trl, cerca de Florida Mall, a unas 3.7 millas de distancia. Siempre aceptamos clientes sin cita y las reservas son por teléfono. Con más de 1,400 reseñas de Google entre ambas barberías, y Shop 1 con 5.0 estrellas, nos enorgullecemos de cada corte y cada cliente. Te atendemos en English y español, y ambas barberías abren los siete días de la semana, desde temprano en la mañana hasta tarde en la noche.',
        },
      },
      {
        heading: { en: 'Book Your Fade', es: 'Reserva tu degradado' },
        body: {
          en: 'Call to book: Shop 1 (407) 470-4846 · Shop 2 (407) 820-4541. WhatsApp is available for Shop 1.',
          es: 'Llama para reservar: Shop 1 (407) 470-4846 · Shop 2 (407) 820-4541. WhatsApp está disponible para Shop 1.',
        },
      },
    ],
  },
  {
    _id: 'post-3',
    slug: 'blog/braids-orlando',
    // REAL photo (manifest §5): the Shop 1 side of the shop's own banner —
    // no braids photo exists in the backup, and a fade photo must never
    // illustrate this post. Swaps for a real braids photo at the media swap.
    image: '/images/blog-03-braids.webp',
    imageAlt: {
      en: 'Inside New Barbershop 1 and New Barbershop 2 — both Orlando barber shop locations side by side',
      es: 'Interior de New Barbershop 1 y New Barbershop 2 — ambas barberías de Orlando, una junto a la otra',
    },
    locales: {
      en: {
        title: 'Braids in Orlando — Braiding for Men and Women',
        seoTitle: 'Braids in Orlando — Braiding for Men and Women | New Barbershop Orlando',
        metaDescription:
          'Braids in Orlando for men and women — neat, comfortable braiding at New Barbershop 1. Call Shop 1 (407) 470-4846 to book your braiding appointment today.',
        intro:
          'Looking for braids in Orlando that are neat, comfortable and made to last? Braiding is a craft — clean parts, even tension, and a style that fits you. At New Barbershop 1, our braiding specialist brings that care to every head of hair, for men and women alike.',
        closing: 'Braids are a Shop 1 service — find the shop’s location and hours on our Contact page.',
      },
      es: {
        title: 'Braids in Orlando — Braiding for Men and Women',
        seoTitle: 'Braids in Orlando — Braiding for Men and Women | New Barbershop Orlando',
        metaDescription:
          'Braids in Orlando for men and women — neat, comfortable braiding at New Barbershop 1. Call Shop 1 (407) 470-4846 to book your braiding appointment today.',
        intro:
          '¿Buscas trenzas en Orlando que se vean prolijas, sean cómodas y duren? Trenzar es un arte — divisiones limpias, tensión uniforme y un estilo que va contigo. En New Barbershop 1, nuestra especialista en trenzas aporta ese cuidado a cada cabellera, tanto para hombres como para mujeres.',
        closing: 'Las trenzas son un servicio de Shop 1 — encuentra la ubicación y los horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'Braids in Orlando for Men and Women', es: 'Trenzas en Orlando para hombres y mujeres' },
        body: {
          en: 'We offer braiding for men and women at New Barbershop 1 — our shop at 9741 S Orange Blossom Trl, near Kissimmee. From cornrows to box braids and more, we work with your hair’s length and texture to create a style that looks sharp and feels good. Braids are available at Shop 1 only, so call Shop 1 at (407) 470-4846 to book your braiding appointment.',
          es: 'Ofrecemos trenzado para hombres y mujeres en New Barbershop 1 — nuestra barbería en 9741 S Orange Blossom Trl, cerca de Kissimmee. Desde cornrows hasta box braids y más, trabajamos con el largo y la textura de tu cabello para crear un estilo que se vea definido y se sienta bien. Las trenzas están disponibles solo en Shop 1, así que llama a Shop 1 al (407) 470-4846 para reservar tu cita de trenzado.',
        },
      },
      {
        heading: { en: 'More Than Braids', es: 'Más que trenzas' },
        body: {
          en: 'Our full service also covers haircuts, beard trims, hot towel shaves, hair designs, eyebrows and kids cuts — and our barbers shape every cut to your style. See everything we do on our Services page. We are a family-run business since 2003, with over 20 years of experience, two shops on South Orange Blossom Trail, and over 1,400 Google reviews across both shops, with Shop 1 rated 5.0 stars. We serve you in English y español, and both shops are open seven days a week, from early morning to late evening.',
          es: 'Nuestro servicio completo también incluye cortes de cabello, arreglos de barba, afeitados con toalla caliente, diseños en el cabello, cejas y cortes para niños — y nuestros barberos adaptan cada corte a tu estilo. Mira todo lo que hacemos en nuestra página de Servicios. Somos un negocio familiar desde 2003, con más de 20 años de experiencia, dos barberías sobre South Orange Blossom Trail y más de 1,400 reseñas de Google entre ambas, con Shop 1 calificada con 5.0 estrellas. Te atendemos en English y español, y ambas barberías abren los siete días de la semana, desde temprano en la mañana hasta tarde en la noche.',
        },
      },
      {
        heading: { en: 'Book Your Braids at Shop 1', es: 'Reserva tus trenzas en Shop 1' },
        body: {
          en: 'Call to book braids: Shop 1 (407) 470-4846. WhatsApp is available for Shop 1.',
          es: 'Llama para reservar trenzas: Shop 1 (407) 470-4846. WhatsApp está disponible para Shop 1.',
        },
      },
    ],
  },
  {
    _id: 'post-4',
    slug: 'blog/welcome-neighborhood-barbershop-orlando',
    image: '/images/blog-04-welcome.webp',
    imageAlt: {
      en: "Barber trimming the back of a client's haircut with scissors",
      es: 'Barbero recortando con tijeras la parte trasera del corte de un cliente',
    },
    locales: {
      en: {
        title: 'Welcome to Your Neighborhood Barbershop in Orlando',
        seoTitle: 'Welcome to Your Neighborhood Barbershop in Orlando | New Barbershop Orlando',
        metaDescription:
          'Welcome to your neighborhood barbershop in Orlando. Family-run since 2003, two shops on Orange Blossom Trail. Call (407) 470-4846 or (407) 820-4541 to book.',
        intro:
          'Welcome to your neighborhood barbershop Orlando has trusted since 2003. New Barbershop is a family-run business cutting hair on South Orange Blossom Trail — over 20 years of experience, two shops, and a simple promise: a clean cut, a fair chair, and a team that treats you like a neighbor. This is our first post, and we wanted to use it to say hello and tell you a little about who we are.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Welcome to Your Neighborhood Barbershop in Orlando',
        seoTitle: 'Welcome to Your Neighborhood Barbershop in Orlando | New Barbershop Orlando',
        metaDescription:
          'Welcome to your neighborhood barbershop in Orlando. Family-run since 2003, two shops on Orange Blossom Trail. Call (407) 470-4846 or (407) 820-4541 to book.',
        intro:
          'Bienvenido a tu barbería de barrio, en la que Orlando confía desde 2003. New Barbershop es un negocio familiar que corta cabello sobre South Orange Blossom Trail — más de 20 años de experiencia, dos barberías y una promesa sencilla: un corte limpio, una silla justa y un equipo que te trata como a un vecino. Esta es nuestra primera publicación y queríamos aprovecharla para saludarte y contarte un poco de quiénes somos.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'Your Neighborhood Barbershop Orlando', es: 'Tu barbería de barrio en Orlando' },
        body: {
          en: 'We have two Orlando shops: New Barbershop 1 at 9741 S Orange Blossom Trl, near Kissimmee, and New Barbershop 2 at 6220 S Orange Blossom Trl, near Florida Mall, about 3.7 miles apart. Walk-ins are always welcome, and booking is by phone. With over 1,400 Google reviews across both shops, and Shop 1 rated 5.0 stars, we take pride in every cut and every client. We serve you in English y español, and both shops are open seven days a week, from early morning to late evening.',
          es: 'Tenemos dos barberías en Orlando: New Barbershop 1 en 9741 S Orange Blossom Trl, cerca de Kissimmee, y New Barbershop 2 en 6220 S Orange Blossom Trl, cerca de Florida Mall, a unas 3.7 millas de distancia. Siempre aceptamos clientes sin cita y las reservas son por teléfono. Con más de 1,400 reseñas de Google entre ambas barberías, y Shop 1 con 5.0 estrellas, nos enorgullecemos de cada corte y cada cliente. Te atendemos en English y español, y ambas barberías abren los siete días de la semana, desde temprano en la mañana hasta tarde en la noche.',
        },
      },
      {
        heading: { en: 'What We Do', es: 'Lo que hacemos' },
        body: {
          en: 'Our full service covers haircuts, beard trims, hot towel shaves, hair designs, eyebrows and kids cuts — and braids for men and women at Shop 1. Whether you want a sharp fade, a clean line-up or a classic cut, our barbers shape it to your style. See the full list on our Services page.',
          es: 'Nuestro servicio completo incluye cortes de cabello, arreglos de barba, afeitados con toalla caliente, diseños en el cabello, cejas y cortes para niños — y trenzas para hombres y mujeres en Shop 1. Ya sea que quieras un degradado definido, un delineado limpio o un corte clásico, nuestros barberos lo adaptan a tu estilo. Mira la lista completa en nuestra página de Servicios.',
        },
      },
      {
        heading: { en: 'Come See Us', es: 'Ven a visitarnos' },
        body: {
          en: 'Call to book: Shop 1 (407) 470-4846 · Shop 2 (407) 820-4541. WhatsApp is available for Shop 1.',
          es: 'Llama para reservar: Shop 1 (407) 470-4846 · Shop 2 (407) 820-4541. WhatsApp está disponible para Shop 1.',
        },
      },
    ],
  },
];

export function getPost(slug: string): Post {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Unknown post slug: ${slug}`);
  return post;
}
