// Structured content — mirrors the Sanity `post` schema (sanity/schemas/post.ts).
// Bodies are verbatim from the content pack (staging build), EN + ES.
// Slugs are Agent D's planned inventory (seo-tracking-plan.md §2.1):
// /blog/<slug>/ in both languages. Featured images + alts: manifest §5.
//
// Data-layer swap (sanity-wiring.md §6): with PUBLIC_USE_SANITY=1 the
// array below is replaced at build time by the Sanity GROQ fetch; the
// local array stays as the flag-off / fetch-failure fallback.

import { USE_SANITY, fetchSanity } from '../lib/sanity';

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

const localPosts: Post[] = [
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
          en: 'We are a family-run business with over 20 years of experience behind the chair. Our two Orlando shops sit on South Orange Blossom Trail — New Barbershop 1 at 9741 S Orange Blossom Trl, in Hunters Creek, and New Barbershop 2 at 6220 S Orange Blossom Trl, near Florida Mall, about 3.7 miles apart. Walk-ins are always welcome, and booking is by phone. With over 1,400 Google reviews across both shops, and our Hunters Creek shop rated 5.0 stars, we take pride in every cut and every client.',
          es: 'Somos un negocio familiar con más de 20 años de experiencia detrás de la silla. Nuestras dos barberías de Orlando están sobre South Orange Blossom Trail — New Barbershop 1 en 9741 S Orange Blossom Trl, en Hunters Creek, y New Barbershop 2 en 6220 S Orange Blossom Trl, cerca de Florida Mall, a unas 3.7 millas de distancia. Siempre aceptamos clientes sin cita y las reservas son por teléfono. Con más de 1,400 reseñas de Google entre ambas barberías, y nuestro local de Hunters Creek con 5.0 estrellas, nos enorgullecemos de cada corte y cada cliente.',
        },
      },
      {
        heading: { en: 'Services for Every Style', es: 'Servicios para cada estilo' },
        body: {
          en: 'Our full service covers haircuts, beard trims, hot towel shaves, hair designs, eyebrows and kids cuts — and braids for men and women at Hunters Creek. Whether you want a clean fade, a sharp line-up or a classic cut, our barbers shape it to your style. See the full list on our Services page. We serve you in English y español, and both shops are open seven days a week, from early morning to late evening.',
          es: 'Nuestro servicio completo incluye cortes de cabello, arreglos de barba, afeitados con toalla caliente, diseños en el cabello, cejas y cortes para niños — y trenzas para hombres y mujeres en Hunters Creek. Ya sea que quieras un degradado limpio, un delineado definido o un corte clásico, nuestros barberos lo adaptan a tu estilo. Mira la lista completa en nuestra página de Servicios. Te atendemos en English y español, y ambas barberías abren los siete días de la semana, desde temprano en la mañana hasta tarde en la noche.',
        },
      },
      {
        heading: { en: 'Visit Us or Call to Book', es: 'Visítanos o llama para reservar' },
        body: {
          en: 'Call to book: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Hunters Creek.',
          es: 'Llama para reservar: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Hunters Creek.',
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
          en: 'From low fades to high skin fades, tapers to burst fades, we shape each cut to your hair and your look. Whether you want a clean everyday fade or a bold design, we take our time on the details — the line-up, the edges, the finish. Our full service also covers beard trims, hot towel shaves, hair designs, eyebrows and kids cuts — and braids for men and women at Hunters Creek. See everything we do on our Services page.',
          es: 'Desde degradados bajos hasta degradados altos al ras, tapers y burst fades, adaptamos cada corte a tu cabello y tu look. Ya sea que quieras un degradado limpio para todos los días o un diseño llamativo, nos tomamos el tiempo en los detalles — el delineado, los bordes, el acabado. Nuestro servicio completo también incluye arreglos de barba, afeitados con toalla caliente, diseños en el cabello, cejas y cortes para niños — y trenzas para hombres y mujeres en Hunters Creek. Mira todo lo que hacemos en nuestra página de Servicios.',
        },
      },
      {
        heading: { en: 'Two Orlando Shops, One Standard', es: 'Dos barberías en Orlando, un mismo estándar' },
        body: {
          en: 'We are a family-run business since 2003, with two shops on South Orange Blossom Trail — New Barbershop 1 at 9741 S Orange Blossom Trl, in Hunters Creek, and New Barbershop 2 at 6220 S Orange Blossom Trl, near Florida Mall, about 3.7 miles apart. Walk-ins are always welcome, and booking is by phone. With over 1,400 Google reviews across both shops, and our Hunters Creek shop rated 5.0 stars, we take pride in every cut and every client. We serve you in English y español, and both shops are open seven days a week, from early morning to late evening.',
          es: 'Somos un negocio familiar desde 2003, con dos barberías sobre South Orange Blossom Trail — New Barbershop 1 en 9741 S Orange Blossom Trl, en Hunters Creek, y New Barbershop 2 en 6220 S Orange Blossom Trl, cerca de Florida Mall, a unas 3.7 millas de distancia. Siempre aceptamos clientes sin cita y las reservas son por teléfono. Con más de 1,400 reseñas de Google entre ambas barberías, y nuestro local de Hunters Creek con 5.0 estrellas, nos enorgullecemos de cada corte y cada cliente. Te atendemos en English y español, y ambas barberías abren los siete días de la semana, desde temprano en la mañana hasta tarde en la noche.',
        },
      },
      {
        heading: { en: 'Book Your Fade', es: 'Reserva tu degradado' },
        body: {
          en: 'Call to book: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Hunters Creek.',
          es: 'Llama para reservar: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Hunters Creek.',
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
          'Braids in Orlando for men and women — neat, comfortable braiding at New Barbershop 1. Call Hunters Creek (407) 470-4846 to book your braiding appointment today.',
        intro:
          'Looking for braids in Orlando that are neat, comfortable and made to last? Braiding is a craft — clean parts, even tension, and a style that fits you. At New Barbershop 1, our braiding specialist brings that care to every head of hair, for men and women alike.',
        closing: 'Braids are a Hunters Creek service — find the shop’s location and hours on our Contact page.',
      },
      es: {
        title: 'Braids in Orlando — Braiding for Men and Women',
        seoTitle: 'Braids in Orlando — Braiding for Men and Women | New Barbershop Orlando',
        metaDescription:
          'Braids in Orlando for men and women — neat, comfortable braiding at New Barbershop 1. Call Hunters Creek (407) 470-4846 to book your braiding appointment today.',
        intro:
          '¿Buscas trenzas en Orlando que se vean prolijas, sean cómodas y duren? Trenzar es un arte — divisiones limpias, tensión uniforme y un estilo que va contigo. En New Barbershop 1, nuestra especialista en trenzas aporta ese cuidado a cada cabellera, tanto para hombres como para mujeres.',
        closing: 'Las trenzas son un servicio de Hunters Creek — encuentra la ubicación y los horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'Braids in Orlando for Men and Women', es: 'Trenzas en Orlando para hombres y mujeres' },
        body: {
          en: 'We offer braiding for men and women at New Barbershop 1 — our shop at 9741 S Orange Blossom Trl, in Hunters Creek. From cornrows to box braids and more, we work with your hair’s length and texture to create a style that looks sharp and feels good. Braids are available at Hunters Creek only, so call Hunters Creek at (407) 470-4846 to book your braiding appointment.',
          es: 'Ofrecemos trenzado para hombres y mujeres en New Barbershop 1 — nuestra barbería en 9741 S Orange Blossom Trl, en Hunters Creek. Desde cornrows hasta box braids y más, trabajamos con el largo y la textura de tu cabello para crear un estilo que se vea definido y se sienta bien. Las trenzas están disponibles solo en Hunters Creek, así que llama a Hunters Creek al (407) 470-4846 para reservar tu cita de trenzado.',
        },
      },
      {
        heading: { en: 'More Than Braids', es: 'Más que trenzas' },
        body: {
          en: 'Our full service also covers haircuts, beard trims, hot towel shaves, hair designs, eyebrows and kids cuts — and our barbers shape every cut to your style. See everything we do on our Services page. We are a family-run business since 2003, with over 20 years of experience, two shops on South Orange Blossom Trail, and over 1,400 Google reviews across both shops, with our Hunters Creek shop rated 5.0 stars. We serve you in English y español, and both shops are open seven days a week, from early morning to late evening.',
          es: 'Nuestro servicio completo también incluye cortes de cabello, arreglos de barba, afeitados con toalla caliente, diseños en el cabello, cejas y cortes para niños — y nuestros barberos adaptan cada corte a tu estilo. Mira todo lo que hacemos en nuestra página de Servicios. Somos un negocio familiar desde 2003, con más de 20 años de experiencia, dos barberías sobre South Orange Blossom Trail y más de 1,400 reseñas de Google entre ambas, con nuestro local de Hunters Creek calificado con 5.0 estrellas. Te atendemos en English y español, y ambas barberías abren los siete días de la semana, desde temprano en la mañana hasta tarde en la noche.',
        },
      },
      {
        heading: { en: 'Book Your Braids at Hunters Creek', es: 'Reserva tus trenzas en Hunters Creek' },
        body: {
          en: 'Call to book braids: Hunters Creek (407) 470-4846. WhatsApp is available at Hunters Creek.',
          es: 'Llama para reservar trenzas: Hunters Creek (407) 470-4846. WhatsApp está disponible en Hunters Creek.',
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
          en: 'We have two Orlando shops: New Barbershop 1 at 9741 S Orange Blossom Trl, in Hunters Creek, and New Barbershop 2 at 6220 S Orange Blossom Trl, near Florida Mall, about 3.7 miles apart. Walk-ins are always welcome, and booking is by phone. With over 1,400 Google reviews across both shops, and our Hunters Creek shop rated 5.0 stars, we take pride in every cut and every client. We serve you in English y español, and both shops are open seven days a week, from early morning to late evening.',
          es: 'Tenemos dos barberías en Orlando: New Barbershop 1 en 9741 S Orange Blossom Trl, en Hunters Creek, y New Barbershop 2 en 6220 S Orange Blossom Trl, cerca de Florida Mall, a unas 3.7 millas de distancia. Siempre aceptamos clientes sin cita y las reservas son por teléfono. Con más de 1,400 reseñas de Google entre ambas barberías, y nuestro local de Hunters Creek con 5.0 estrellas, nos enorgullecemos de cada corte y cada cliente. Te atendemos en English y español, y ambas barberías abren los siete días de la semana, desde temprano en la mañana hasta tarde en la noche.',
        },
      },
      {
        heading: { en: 'What We Do', es: 'Lo que hacemos' },
        body: {
          en: 'Our full service covers haircuts, beard trims, hot towel shaves, hair designs, eyebrows and kids cuts — and braids for men and women at Hunters Creek. Whether you want a sharp fade, a clean line-up or a classic cut, our barbers shape it to your style. See the full list on our Services page.',
          es: 'Nuestro servicio completo incluye cortes de cabello, arreglos de barba, afeitados con toalla caliente, diseños en el cabello, cejas y cortes para niños — y trenzas para hombres y mujeres en Hunters Creek. Ya sea que quieras un degradado definido, un delineado limpio o un corte clásico, nuestros barberos lo adaptan a tu estilo. Mira la lista completa en nuestra página de Servicios.',
        },
      },
      {
        heading: { en: 'Come See Us', es: 'Ven a visitarnos' },
        body: {
          en: 'Call to book: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Hunters Creek.',
          es: 'Llama para reservar: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Hunters Creek.',
        },
      },
    ],
  },
  {
    _id: 'post-5',
    slug: 'blog/haircut-near-florida-mall',
    image: '/images/blog-05-florida-mall.webp',
    imageAlt: {
      en: 'Inside New Barbershop 2, minutes from Florida Mall in Orlando',
      es: 'Interior de New Barbershop 2, a minutos de Florida Mall en Orlando',
    },
    locales: {
      en: {
        title: 'Visiting Orlando? Get a Fresh Haircut Near Florida Mall',
        seoTitle: 'Visiting Orlando? Get a Fresh Haircut Near Florida Mall | New Barbershop Orlando',
        metaDescription:
          'Visiting Orlando? Get a fresh haircut minutes from Florida Mall — walk-ins welcome, bilingual service, open 7 days a week. Call (407) 820-4541 or (407) 470-4846.',
        intro:
          'In Orlando on vacation and your haircut did not survive the trip? It happens — Florida heat, pool days and theme parks are rough on a fresh cut. The good news: you do not need an appointment or a plan. Walk into New Barbershop, sit down, and walk out looking sharp for the rest of your trip.',
        closing:
          'Stop by either shop or call ahead — find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Visiting Orlando? Get a Fresh Haircut Near Florida Mall',
        seoTitle: 'Visiting Orlando? Get a Fresh Haircut Near Florida Mall | New Barbershop Orlando',
        metaDescription:
          'Visiting Orlando? Get a fresh haircut minutes from Florida Mall — walk-ins welcome, bilingual service, open 7 days a week. Call (407) 820-4541 or (407) 470-4846.',
        intro:
          '¿Estás de vacaciones en Orlando y tu corte no sobrevivió al viaje? Pasa seguido: el calor de Florida, la piscina y los parques castigan cualquier corte. La buena noticia es que no necesitas cita ni planearlo. Entra a New Barbershop, siéntate y sal luciendo impecable para el resto de tu viaje.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama antes — encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'A Vacation Cut, No Appointment Needed', es: 'Un corte en vacaciones, sin necesidad de cita' },
        body: {
          en: 'Vacations run on their own schedule, so we keep ours simple: walk-ins are welcome every day, and a quick call ahead is all it takes if you want to check the wait. Haircuts, skin fades, beard trims, hot towel shaves, line-ups and kids cuts — the full service list travels well, and our barbers will match the cut you have or set you up with something new for your vacation photos and nights out. We serve you in English y español, so nothing gets lost in translation.',
          es: 'Las vacaciones tienen su propio ritmo, así que nosotros lo hacemos simple: aceptamos clientes sin cita todos los días, y una llamada rápida basta si quieres consultar la espera. Cortes de cabello, degradados al ras, arreglos de barba, afeitados con toalla caliente, delineados y cortes para niños: la lista completa de servicios viaja bien, y nuestros barberos pueden mantener tu corte de siempre o darte un estilo nuevo para tus fotos de vacaciones y tus salidas nocturnas. Te atendemos en English y español, para que nada se pierda en la traducción.',
        },
      },
      {
        heading: { en: 'Minutes from Florida Mall, on the Trail', es: 'A minutos de Florida Mall, sobre la Trail' },
        body: {
          en: 'Both of our shops sit on South Orange Blossom Trail. New Barbershop 2, at 6220 S Orange Blossom Trl, is minutes from Florida Mall — an easy stop between the mall, your hotel and the attractions. Down the Trail, New Barbershop 1 at 9741 S Orange Blossom Trl serves the Hunters Creek side. We are a family-run business since 2003, with over 1,400 five-star Google reviews across both shops, and both locations are open seven days a week — so whenever your free hour lands, a chair is ready.',
          es: 'Nuestras dos barberías están sobre South Orange Blossom Trail. New Barbershop 2, en 6220 S Orange Blossom Trl, está a minutos de Florida Mall: una parada fácil entre el centro comercial, tu hotel y las atracciones. Más adelante sobre la Trail, New Barbershop 1, en 9741 S Orange Blossom Trl, atiende el lado de Hunters Creek. Somos un negocio familiar desde 2003, con más de 1,400 reseñas de cinco estrellas en Google entre ambas barberías, y las dos ubicaciones abren los siete días de la semana: cuando tengas una hora libre, una silla te espera.',
        },
      },
      {
        heading: { en: 'Walk In or Call Ahead', es: 'Ven sin cita o llama antes' },
        body: {
          en: 'Call to book: Florida Mall (407) 820-4541 · Hunters Creek (407) 470-4846. WhatsApp is available at Hunters Creek.',
          es: 'Llama para reservar: Florida Mall (407) 820-4541 · Hunters Creek (407) 470-4846. WhatsApp está disponible en Hunters Creek.',
        },
      },
    ],
  },
  {
    _id: 'post-6',
    slug: 'blog/haircut-orange-blossom-trail-car-shopping',
    image: '/images/blog-06-orange-blossom-trail.webp',
    imageAlt: {
      en: 'Inside New Barbershop 1 on South Orange Blossom Trail in Orlando',
      es: 'Interior de New Barbershop 1 sobre South Orange Blossom Trail en Orlando',
    },
    locales: {
      en: {
        title: 'Car Shopping on Orange Blossom Trail? Get a Haircut While You’re Around',
        seoTitle: 'Car Shopping on Orange Blossom Trail? Get a Haircut While You’re Around | New Barbershop Orlando',
        metaDescription:
          'Spending the day at the dealerships on Orange Blossom Trail? Both New Barbershop locations are right on the Trail — walk-ins welcome. Call (407) 470-4846 or (407) 820-4541.',
        intro:
          'If you are spending the day on Orange Blossom Trail, you know the rhythm: a test drive, some paperwork, a wait in the service lounge, more paperwork. The Trail is Orlando’s car row — and both of our barber shops sit right on it, close enough that a fresh cut fits neatly into the hours you are already here.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Car Shopping on Orange Blossom Trail? Get a Haircut While You’re Around',
        seoTitle: 'Car Shopping on Orange Blossom Trail? Get a Haircut While You’re Around | New Barbershop Orlando',
        metaDescription:
          'Spending the day at the dealerships on Orange Blossom Trail? Both New Barbershop locations are right on the Trail — walk-ins welcome. Call (407) 470-4846 or (407) 820-4541.',
        intro:
          'Si vas a pasar el día en Orange Blossom Trail, ya conoces el ritmo: una prueba de manejo, unos papeles, una espera en el área de servicio y más papeles. La Trail es la zona de los concesionarios en Orlando, y nuestras dos barberías están justo sobre ella, lo bastante cerca para que un corte fresco encaje en las horas que ya vas a estar aquí.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'Right on the Trail, Between the Dealerships', es: 'Justo sobre la Trail, entre los concesionarios' },
        body: {
          en: 'New Barbershop 1 at 9741 S Orange Blossom Trl, in Hunters Creek, and New Barbershop 2 at 6220 S Orange Blossom Trl, near Florida Mall, are about 3.7 miles apart — and both are surrounded by the dealerships that line this corridor. Buying, trading in or waiting on service, you are never more than a short drive from one of our chairs. Walk-ins are welcome at both shops, and both are open seven days a week.',
          es: 'New Barbershop 1, en 9741 S Orange Blossom Trl, en Hunters Creek, y New Barbershop 2, en 6220 S Orange Blossom Trl, cerca de Florida Mall, están a unas 3.7 millas de distancia, y ambas están rodeadas por los concesionarios que bordean este corredor. Comprando, entregando tu auto o esperando un servicio, nunca estás a más de un corto trayecto de una de nuestras sillas. Aceptamos clientes sin cita en las dos barberías, y ambas abren los siete días de la semana.',
        },
      },
      {
        heading: { en: 'Quick Services That Fit the Wait', es: 'Servicios rápidos que encajan con la espera' },
        body: {
          en: 'Not every visit needs a full cut. A razor line-up, a beard trim or a neck cleanup sharpens you up fast while the dealership handles your car — and if you have the time, a full haircut and a hot towel shave turn a waiting day into a reset. The same goes for the people who work this corridor: sales and service staff face customers all day, and a clean fade and a shaped beard are part of the uniform. We are a family-run business since 2003, with over 1,400 five-star Google reviews across both shops.',
          es: 'No toda visita necesita un corte completo. Un perfilado a navaja, un arreglo de barba o una limpieza de cuello te dejan impecable rápido mientras el concesionario se encarga de tu auto; y si tienes tiempo, un corte completo y un afeitado con toalla caliente convierten un día de espera en un reinicio. Lo mismo vale para quienes trabajan en este corredor: el personal de ventas y servicio atiende clientes todo el día, y un degradado limpio y una barba bien formada son parte del uniforme. Somos un negocio familiar desde 2003, con más de 1,400 reseñas de cinco estrellas en Google entre ambas barberías.',
        },
      },
      {
        heading: { en: 'Walk In While You’re Around', es: 'Ven sin cita mientras estás por la zona' },
        body: {
          en: 'Call to book: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Hunters Creek.',
          es: 'Llama para reservar: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Hunters Creek.',
        },
      },
    ],
  },
  {
    _id: 'post-7',
    slug: 'blog/two-week-haircut-routine-professionals',
    image: '/images/blog-07-professionals.webp',
    imageAlt: {
      en: 'Client with a finished haircut and beard trim at New Barbershop in Orlando',
      es: 'Cliente con un corte terminado y la barba arreglada en New Barbershop en Orlando',
    },
    locales: {
      en: {
        title: 'Realtors, Loan Officers & Sales Pros: The Two-Week Haircut Routine',
        seoTitle: 'Realtors, Loan Officers & Sales Pros: The Two-Week Haircut Routine | New Barbershop Orlando',
        metaDescription:
          'Realtors, loan officers and sales pros: keep your fade sharp on a two-week routine — full cuts, line-up and beard touch-ups, walk-ins welcome. Call (407) 470-4846 or (407) 820-4541.',
        intro:
          'When your job is face-to-face — showings, closings, client meetings, the sales floor — your haircut is part of the first impression, and it is on a clock. A fade that looks perfect this week starts growing out the next. The fix is not a better cut; it is a routine: a full cut about every two weeks, with quick touch-ups in between.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Realtors, Loan Officers & Sales Pros: The Two-Week Haircut Routine',
        seoTitle: 'Realtors, Loan Officers & Sales Pros: The Two-Week Haircut Routine | New Barbershop Orlando',
        metaDescription:
          'Realtors, loan officers and sales pros: keep your fade sharp on a two-week routine — full cuts, line-up and beard touch-ups, walk-ins welcome. Call (407) 470-4846 or (407) 820-4541.',
        intro:
          'Cuando tu trabajo es cara a cara — visitas a propiedades, cierres, reuniones con clientes, el piso de ventas — tu corte es parte de la primera impresión, y tiene fecha de vencimiento. Un degradado que se ve perfecto esta semana empieza a crecer la siguiente. La solución no es un mejor corte, es una rutina: un corte completo cada dos semanas, aproximadamente, con retoques rápidos en el medio.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'Why a Fade Runs on a Two-Week Clock', es: 'Por qué un degradado funciona con un reloj de dos semanas' },
        body: {
          en: 'A skin fade is built on contrast — very short sides against length on top — and hair grows about half an inch a month. By the end of week two, the blend softens, the edges lose their line, and the cut that framed your face starts to look tired in exactly the photos and video calls your clients see. A full cut every two weeks keeps the shape locked in, and it is a rhythm our barbers know well: tell us your interval and we will keep the same blueprint cut after cut.',
          es: 'Un degradado al ras se construye sobre el contraste — lados muy cortos contra el largo de arriba — y el cabello crece alrededor de media pulgada al mes. Al final de la segunda semana, la mezcla se suaviza, los bordes pierden su línea y el corte que enmarcaba tu rostro empieza a verse cansado justo en las fotos y videollamadas que ven tus clientes. Un corte completo cada dos semanas mantiene la forma intacta, y es un ritmo que nuestros barberos conocen bien: dinos tu intervalo y mantendremos el mismo patrón corte tras corte.',
        },
      },
      {
        heading: { en: 'Between Cuts: The Touch-Up', es: 'Entre cortes: el retoque' },
        body: {
          en: 'The week between cuts is where the routine pays off. A razor line-up restores the edges, a beard trim and shaping keeps the jawline clean, and a neck cleanup takes minutes — the three touch-ups that make a growing-out cut look intentional again before a big showing or closing. It has to fit your calendar, so we keep it easy: walk-ins welcome at both shops, open seven days a week, and our Hunters Creek location runs from 8 AM to 10:30 PM for early starts and late finishes. Both shops sit on South Orange Blossom Trail, near the dealerships and offices where so many of our regulars work.',
          es: 'La semana entre cortes es donde la rutina rinde. Un perfilado a navaja restaura los bordes, un arreglo y formado de barba mantiene limpia la línea de la mandíbula, y una limpieza de cuello toma minutos: los tres retoques que hacen que un corte en crecimiento se vea intencional otra vez antes de una visita importante o un cierre. Tiene que encajar en tu agenda, así que lo hacemos fácil: clientes sin cita en ambas barberías, abiertas los siete días de la semana, y nuestro local de Hunters Creek atiende de 8 AM a 10:30 PM para empezar temprano o terminar tarde. Ambas barberías están sobre South Orange Blossom Trail, cerca de los concesionarios y las oficinas donde trabajan muchos de nuestros clientes habituales.',
        },
      },
      {
        heading: { en: 'Keep the Routine', es: 'Mantén la rutina' },
        body: {
          en: 'Call to book: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Hunters Creek.',
          es: 'Llama para reservar: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Hunters Creek.',
        },
      },
    ],
  },
  {
    _id: 'post-8',
    slug: 'blog/holiday-haircuts-orlando',
    image: '/images/blog-08-holiday.webp',
    imageAlt: {
      en: 'Young client with a fresh kids fade at New Barbershop in Orlando',
      es: 'Cliente joven con un degradado infantil recién hecho en New Barbershop en Orlando',
    },
    locales: {
      en: {
        title: 'Holiday Haircuts in Orlando: Look Sharp for Thanksgiving, Christmas & New Year’s',
        seoTitle: 'Holiday Haircuts in Orlando: Look Sharp for Thanksgiving, Christmas & New Year’s | New Barbershop Orlando',
        metaDescription:
          'Holiday haircuts in Orlando — fades, line-ups, beard trims, hot towel shaves and kids cuts for Thanksgiving, Christmas and New Year’s photos. Call (407) 470-4846 or (407) 820-4541.',
        intro:
          'The holidays put you in more photos than any other season — family gatherings at Thanksgiving, Christmas pictures, New Year’s Eve. A fresh cut is the easiest upgrade in every one of those photos, and a little timing makes it look even better. Here is how our regulars plan their holiday haircuts.',
        closing:
          'Stop by either shop or call ahead — find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Holiday Haircuts in Orlando: Look Sharp for Thanksgiving, Christmas & New Year’s',
        seoTitle: 'Holiday Haircuts in Orlando: Look Sharp for Thanksgiving, Christmas & New Year’s | New Barbershop Orlando',
        metaDescription:
          'Holiday haircuts in Orlando — fades, line-ups, beard trims, hot towel shaves and kids cuts for Thanksgiving, Christmas and New Year’s photos. Call (407) 470-4846 or (407) 820-4541.',
        intro:
          'Las fiestas te ponen en más fotos que cualquier otra temporada: reuniones familiares en Acción de Gracias, fotos de Navidad, la víspera de Año Nuevo. Un corte fresco es la mejora más fácil en cada una de esas fotos, y un poco de planificación lo hace ver aún mejor. Así es como nuestros clientes habituales planean sus cortes de temporada.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama antes — encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'Get the Cut 2–3 Days Before', es: 'Córtate 2 o 3 días antes' },
        body: {
          en: 'A cut looks its sharpest after it settles for a day or two — the lines stay crisp, the blend relaxes into its natural shape, and you are not walking into the family photo straight from the chair. So aim for two to three days before the gathering, not the morning of. Thanksgiving week, the days before Christmas and the run-up to New Year’s are our busiest stretch of the year, and chairs fill fast — a quick call ahead is the surest way to hold your spot.',
          es: 'Un corte se ve mejor después de asentarse uno o dos días: las líneas se mantienen definidas, la mezcla se relaja en su forma natural y no llegas a la foto familiar recién salido de la silla. Apunta a dos o tres días antes de la reunión, no a la misma mañana. La semana de Acción de Gracias, los días previos a Navidad y la antesala de Año Nuevo son nuestra temporada más ocupada del año, y las sillas se llenan rápido: una llamada rápida es la forma más segura de apartar tu lugar.',
        },
      },
      {
        heading: { en: 'The Photo-Ready Checklist', es: 'La lista para salir listo en las fotos' },
        body: {
          en: 'For the camera, the details do the work: a clean fade shaped to your head, a razor line-up for edges that read sharp in close-ups, a beard trim and shaping so the jawline looks deliberate, and a hot towel shave for the smoothest finish. Bringing the kids in too? Kids cuts and kids fades are part of the same visit, so the whole family walks into the photo looking put together. We are a family-run business since 2003, with over 1,400 five-star Google reviews across both shops, bilingual service, and both locations open seven days a week through the season.',
          es: 'Para la cámara, los detalles hacen el trabajo: un degradado limpio adaptado a tu cabeza, un perfilado a navaja para bordes que se vean definidos en los primeros planos, un arreglo y formado de barba para que la mandíbula se vea intencional, y un afeitado con toalla caliente para el acabado más suave. ¿Traes también a los niños? Los cortes y degradados para niños son parte de la misma visita, para que toda la familia salga en la foto bien presentada. Somos un negocio familiar desde 2003, con más de 1,400 reseñas de cinco estrellas en Google entre ambas barberías, atención bilingüe y las dos ubicaciones abiertas los siete días de la semana durante toda la temporada.',
        },
      },
      {
        heading: { en: 'Call Ahead for the Holidays', es: 'Llama antes durante las fiestas' },
        body: {
          en: 'Call to book: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Hunters Creek.',
          es: 'Llama para reservar: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Hunters Creek.',
        },
      },
    ],
  },
  {
    _id: 'post-9',
    slug: 'blog/how-often-haircut-men',
    image: '/images/blog-09-how-often.webp',
    imageAlt: {
      en: 'Client with a fresh high skin fade at New Barbershop in Orlando',
      es: 'Cliente con un degradado alto al ras recién hecho en New Barbershop en Orlando',
    },
    locales: {
      en: {
        title: 'How Often Should a Man Get a Haircut? A Barber’s Honest Schedule by Style',
        seoTitle: 'How Often Should a Man Get a Haircut? An Orlando Barber’s Schedule by Style | New Barbershop Orlando',
        metaDescription:
          'How often should a man get a haircut? An Orlando barber’s honest schedule by style — skin fades, fades, tapers, classics and beards. Walk-ins welcome. Call (407) 470-4846.',
        intro:
          'It is the question we hear more than any other in the chair: how often should a man get a haircut? The honest answer is that there is no single number — it depends on the style you wear, because every style grows out at the same speed but stops looking sharp at a different week. Here is the schedule we give our own clients, style by style.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'How Often Should a Man Get a Haircut? A Barber’s Honest Schedule by Style',
        seoTitle: 'How Often Should a Man Get a Haircut? An Orlando Barber’s Schedule by Style | New Barbershop Orlando',
        metaDescription:
          'How often should a man get a haircut? An Orlando barber’s honest schedule by style — skin fades, fades, tapers, classics and beards. Walk-ins welcome. Call (407) 470-4846.',
        intro:
          'Es la pregunta que más escuchamos en la silla: ¿cada cuánto debe cortarse el cabello un hombre? La respuesta honesta es que no hay un solo número: depende del estilo que lleves, porque todos los estilos crecen a la misma velocidad, pero dejan de verse definidos en semanas distintas. Aquí está el calendario que les damos a nuestros propios clientes, estilo por estilo.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'The Schedule by Style', es: 'El calendario según el estilo' },
        body: {
          en: 'Skin fades: every 1–2 weeks — the contrast against bare skin is the whole look, and it is the first to soften. Regular fades: every 2–3 weeks keeps the blend clean. Tapers: every 3–5 weeks, because the blend only lives at the sideburns and neckline and grows out gently. Classic cuts and longer styles: every 3–6 weeks before the shape collapses. Beards run on their own clock: a line-up every 1–2 weeks, a full trim every 2–4. If your style is not on this list, ask us in the chair — the full menu is on our Services page, and we will put a number on yours.',
          es: 'Degradados al ras: cada 1–2 semanas; el contraste contra la piel es todo el estilo, y es lo primero que se suaviza. Degradados regulares: cada 2–3 semanas mantiene limpia la mezcla. Tapers: cada 3–5 semanas, porque la mezcla solo vive en las patillas y la nuca y crece con suavidad. Cortes clásicos y estilos más largos: cada 3–6 semanas, antes de que la forma se pierda. La barba tiene su propio reloj: un delineado cada 1–2 semanas y un arreglo completo cada 2–4. Si tu estilo no está en esta lista, pregúntanos en la silla: el menú completo está en nuestra página de Servicios, y le ponemos un número al tuyo.',
        },
      },
      {
        heading: { en: 'Why the Clock Runs at the Same Speed for Everyone', es: 'Por qué el reloj corre igual para todos' },
        body: {
          en: 'Hair grows about half an inch a month, no matter the style — what changes is how much growth a style can hide. A skin fade shows a week of growth; a classic cut forgives a month. Need to stretch your interval? Two tricks from the chair: ask for a slightly softer blend, which grows out more gracefully, and book a quick line-up and neck cleanup between full cuts — ten minutes that buy you another week or two. (If your calendar runs your cut for work reasons, our Two-Week Haircut Routine post breaks down the professional version of this schedule.)',
          es: 'El cabello crece alrededor de media pulgada al mes, sin importar el estilo; lo que cambia es cuánto crecimiento puede esconder cada estilo. Un degradado al ras muestra una semana de crecimiento; un corte clásico perdona un mes. ¿Necesitas estirar tu intervalo? Dos trucos de la silla: pide una mezcla un poco más suave, que crece con más gracia, y reserva un delineado y limpieza de cuello rápidos entre cortes completos: diez minutos que te compran una o dos semanas más. (Si tu calendario manda sobre tu corte por motivos de trabajo, nuestra publicación sobre la rutina de corte de dos semanas detalla la versión profesional de este calendario.)',
        },
      },
      {
        heading: { en: 'Put Your Cut on a Schedule', es: 'Pon tu corte en un calendario' },
        body: {
          en: 'Call to book: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Hunters Creek.',
          es: 'Llama para reservar: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Hunters Creek.',
        },
      },
    ],
  },
  {
    _id: 'post-10',
    slug: 'blog/psychology-fresh-haircut',
    image: '/images/blog-10-psychology.webp',
    imageAlt: {
      en: 'Client with a fresh classic haircut and a confident look at New Barbershop in Orlando',
      es: 'Cliente con un corte clásico recién hecho y una expresión segura en New Barbershop en Orlando',
    },
    locales: {
      en: {
        title: 'The Psychology of a Fresh Haircut: Why You Walk Out Standing Taller',
        seoTitle: 'The Psychology of a Fresh Haircut — Why It Boosts Confidence | New Barbershop Orlando',
        metaDescription:
          'The psychology of a fresh haircut: the mirror effect, first impressions and the reset of a clean cut, explained by Orlando barbers. Walk-ins welcome. Call (407) 470-4846.',
        intro:
          'Nobody has ever measured it in a lab, but every barber has watched it happen: a client walks in slumped and walks out standing taller, shoulders back, checking the mirror on the way to the door. There is a real psychology to a fresh haircut — nothing clinical, just the everyday way looking sharp changes how you carry yourself.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'The Psychology of a Fresh Haircut: Why You Walk Out Standing Taller',
        seoTitle: 'The Psychology of a Fresh Haircut — Why It Boosts Confidence | New Barbershop Orlando',
        metaDescription:
          'The psychology of a fresh haircut: the mirror effect, first impressions and the reset of a clean cut, explained by Orlando barbers. Walk-ins welcome. Call (407) 470-4846.',
        intro:
          'Nadie lo ha medido en un laboratorio, pero todo barbero lo ha visto pasar: un cliente entra encogido y sale erguido, con los hombros atrás, mirándose en el espejo camino a la puerta. Hay una psicología real detrás de un corte fresco; nada clínico, solo la forma cotidiana en que verte bien cambia cómo te presentas.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'The Mirror Effect', es: 'El efecto espejo' },
        body: {
          en: 'You meet your own reflection all day — in the bathroom mirror, the car window, the front camera you did not mean to open. When what you see looks deliberate, you act like it: you make eye contact, you speak up sooner, you stop adjusting and fidgeting. A grown-out cut does the opposite; it nags at the edge of your attention. That is most of the psychology of a fresh haircut — not magic, just removing a small daily distraction and replacing it with a version of yourself you are happy to present.',
          es: 'Te encuentras con tu propio reflejo todo el día: en el espejo del baño, en la ventanilla del auto, en la cámara frontal que abriste sin querer. Cuando lo que ves se ve intencional, actúas en consecuencia: haces contacto visual, hablas antes, dejas de acomodarte y de inquietarte. Un corte crecido hace lo contrario: molesta en el borde de tu atención. Esa es casi toda la psicología de un corte fresco: no es magia, es quitar una pequeña distracción diaria y reemplazarla con una versión de ti que te gusta presentar.',
        },
      },
      {
        heading: { en: 'First Impressions and the Reset', es: 'Primeras impresiones y el reinicio' },
        body: {
          en: 'People form a first impression in seconds, and grooming is the fastest cue they get — before your clothes register, before you say a word. A clean line-up and a shaped beard tell the room you handle details. The other half is the reset: a fresh cut marks a line between before and after, which is why so many men get one at a turning point — a new job, a new routine, a new chapter (our New Look, New Chapter post is all about that moment). The effect fades as the cut grows out, which is the practical argument for a regular cadence: keep the interval steady and the taller-standing feeling never fully expires. Our Services page lists every cut and finish that goes into it.',
          es: 'Las personas forman una primera impresión en segundos, y el arreglo personal es la señal más rápida que reciben, antes de que tu ropa se registre y antes de que digas una palabra. Un delineado limpio y una barba formada le dicen al cuarto que cuidas los detalles. La otra mitad es el reinicio: un corte fresco marca una línea entre el antes y el después, y por eso tantos hombres se cortan el cabello en un momento de cambio: un trabajo nuevo, una rutina nueva, un capítulo nuevo (nuestra publicación Nuevo look, nuevo capítulo trata justo de ese momento). El efecto se desvanece a medida que el corte crece, y ese es el argumento práctico de una cadencia regular: mantén el intervalo estable y la sensación de caminar erguido nunca expira del todo. Nuestra página de Servicios lista cada corte y acabado que lo hace posible.',
        },
      },
      {
        heading: { en: 'Feel the Difference', es: 'Siente la diferencia' },
        body: {
          en: 'Call to book: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Hunters Creek.',
          es: 'Llama para reservar: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Hunters Creek.',
        },
      },
    ],
  },
  {
    _id: 'post-11',
    slug: 'blog/haircut-new-start',
    image: '/images/blog-11-new-start.webp',
    imageAlt: {
      en: 'Client with a fresh burst fade and shaped beard at New Barbershop in Orlando',
      es: 'Cliente con un burst fade recién hecho y la barba formada en New Barbershop en Orlando',
    },
    locales: {
      en: {
        title: 'New Look, New Chapter: Why a Fresh Cut Is Step One of a Fresh Start',
        seoTitle: 'Haircut for a New Start: Why a Fresh Cut Is Step One | New Barbershop Orlando',
        metaDescription:
          'A haircut for a new start: why a fresh cut is step one of a fresh chapter — new job, new city, back on the dating scene. Orlando barbers, walk-ins welcome. Call (407) 470-4846.',
        intro:
          'Breakup, new job, new city, back on the dating scene — whatever the turning point, the first move is almost always the same: change the hair. It is not vanity. A fresh cut is the fastest visible change you fully control, and it tells you, before it tells anyone else, that the new chapter has started.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'New Look, New Chapter: Why a Fresh Cut Is Step One of a Fresh Start',
        seoTitle: 'Haircut for a New Start: Why a Fresh Cut Is Step One | New Barbershop Orlando',
        metaDescription:
          'A haircut for a new start: why a fresh cut is step one of a fresh chapter — new job, new city, back on the dating scene. Orlando barbers, walk-ins welcome. Call (407) 470-4846.',
        intro:
          'Una ruptura, un trabajo nuevo, una ciudad nueva, volver a la escena de las citas: sea cual sea el momento de cambio, el primer movimiento casi siempre es el mismo: cambiarse el cabello. No es vanidad. Un corte fresco es el cambio visible más rápido que controlas por completo, y te dice a ti, antes que a nadie más, que el capítulo nuevo ya empezó.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'Why the Hair Changes First', es: 'Por qué el cabello cambia primero' },
        body: {
          en: 'Most fresh starts are slow — applications, leases, routines that take months to stick. A haircut takes an hour and shows immediately, which is why it works as step one: it gives the change a face. The chair is also where the plan gets practical. Bring two or three photos of the look you are moving toward, matched to your hair type, and talk it through with your barber — the full menu of cuts, fades, designs and beard work is on our Services page, and a good barber will tell you honestly what your hair will and will not do.',
          es: 'La mayoría de los comienzos son lentos: solicitudes, contratos, rutinas que tardan meses en cuajar. Un corte toma una hora y se nota de inmediato, y por eso funciona como paso uno: le da una cara al cambio. La silla también es donde el plan se vuelve práctico. Trae dos o tres fotos del look al que quieres llegar, acordes a tu tipo de cabello, y háblalo con tu barbero; el menú completo de cortes, degradados, diseños y trabajo de barba está en nuestra página de Servicios, y un buen barbero te dirá con honestidad lo que tu cabello puede y no puede hacer.',
        },
      },
      {
        heading: { en: 'The Date-Night Version', es: 'La versión para una cita' },
        body: {
          en: 'If the new chapter includes dating, two rules from the chair: get the cut two to three days before the date, not the morning of — a cut settles into its natural shape after a day or two, and you skip the just-cut look in photos — and aim for a sharper version of you, not a costume. A clean fade or classic cut, a deliberate line-up and a shaped beard read as confidence; a drastic experiment reads as a gamble. Then make it stick: a new look expires in about three weeks without a cadence, so set your interval before you leave the chair. A fresh cut will not run your dating life for you — but walking in feeling like the best version of yourself is a fair head start.',
          es: 'Si el capítulo nuevo incluye citas, dos reglas desde la silla: córtate dos o tres días antes de la cita, no la misma mañana — un corte se asienta en su forma natural después de un día o dos, y evitas el look de recién cortado en las fotos — y apunta a una versión más definida de ti, no a un disfraz. Un degradado limpio o un corte clásico, un delineado intencional y una barba formada se leen como confianza; un experimento drástico se lee como una apuesta. Y haz que dure: un look nuevo expira en unas tres semanas sin una cadencia, así que define tu intervalo antes de levantarte de la silla. Un corte fresco no va a manejar tu vida amorosa por ti, pero entrar sintiéndote la mejor versión de ti mismo es una buena ventaja inicial.',
        },
      },
      {
        heading: { en: 'Start the Chapter', es: 'Empieza el capítulo' },
        body: {
          en: 'Call to book: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Hunters Creek.',
          es: 'Llama para reservar: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Hunters Creek.',
        },
      },
    ],
  },
  {
    _id: 'post-12',
    slug: 'blog/men-grooming-habits',
    image: '/images/blog-12-grooming-habits.webp',
    imageAlt: {
      en: 'Barber finishing a razor line-up at New Barbershop in Orlando',
      es: 'Barbero terminando un perfilado a navaja en New Barbershop en Orlando',
    },
    locales: {
      en: {
        title: 'Look Like You Mean Business: The Grooming Habits of Men Who Always Look Put Together',
        seoTitle: 'Men’s Grooming Habits: How Put-Together Men Stay Sharp | New Barbershop Orlando',
        metaDescription:
          'The men’s grooming habits that keep you looking put together — a fixed haircut cadence, deliberate beard lines, a five-minute daily routine. Orlando barbers. Call (407) 470-4846.',
        intro:
          'Some men always look put together — not dressed up, just deliberate, every day, even on a random Tuesday. It is rarely about owning more products. Watching our regulars over the years, it comes down to a handful of grooming habits, and the first one is a calendar, not a bottle.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Look Like You Mean Business: The Grooming Habits of Men Who Always Look Put Together',
        seoTitle: 'Men’s Grooming Habits: How Put-Together Men Stay Sharp | New Barbershop Orlando',
        metaDescription:
          'The men’s grooming habits that keep you looking put together — a fixed haircut cadence, deliberate beard lines, a five-minute daily routine. Orlando barbers. Call (407) 470-4846.',
        intro:
          'Algunos hombres siempre se ven bien presentados: no elegantes, solo intencionales, todos los días, incluso un martes cualquiera. Casi nunca se trata de tener más productos. Viendo a nuestros clientes habituales con los años, todo se reduce a unos pocos hábitos de cuidado personal, y el primero es un calendario, no una botella.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'Habit One: A Fixed Cadence', es: 'Hábito uno: una cadencia fija' },
        body: {
          en: 'Men who always look sharp never find themselves “between cuts” when a big moment lands — because their next cut is already a rhythm, not a reaction. Every three to four weeks for most styles, every two to three for fades, with a quick line-up in between if the week demands it. Our post on how often a man should get a haircut breaks the intervals down by style, and the Two-Week Haircut Routine shows how professionals run the tightest version. Pick your interval, and the “I need a cut before Friday” scramble disappears.',
          es: 'Los hombres que siempre se ven bien nunca quedan “entre cortes” cuando llega un momento importante, porque su próximo corte ya es un ritmo, no una reacción. Cada tres o cuatro semanas para la mayoría de los estilos, cada dos o tres para los degradados, con un delineado rápido en el medio si la semana lo exige. Nuestra publicación sobre cada cuánto debe cortarse el cabello un hombre detalla los intervalos por estilo, y la rutina de corte de dos semanas muestra cómo los profesionales llevan la versión más estricta. Elige tu intervalo, y la carrera de “necesito un corte antes del viernes” desaparece.',
        },
      },
      {
        heading: { en: 'The Details People Actually Read', es: 'Los detalles que la gente sí nota' },
        body: {
          en: 'Nobody studies your haircut — they read the edges. A beard line that is deliberate instead of accidental, a clean neckline, eyebrows tidied, the line-up crisp: those are the signals that add up to “put together.” Most of them live in services that take minutes — beard shaping, a razor line-up, an eyebrow cleanup, all on our Services page. And the daily routine behind it all is shorter than you think: one cleanser, one moisturizer, one styling product you actually use, five minutes. A drawer full of products you skip loses to three you never skip.',
          es: 'Nadie estudia tu corte: la gente lee los bordes. Una línea de barba intencional en vez de accidental, una nuca limpia, las cejas arregladas, el delineado definido: esas son las señales que suman el “bien presentado”. La mayoría vive en servicios que toman minutos: formado de barba, un perfilado a navaja, una limpieza de cejas, todo en nuestra página de Servicios. Y la rutina diaria detrás de todo es más corta de lo que crees: un limpiador, una crema hidratante, un producto de peinado que sí uses; cinco minutos. Un cajón lleno de productos que omites pierde contra tres que nunca omites.',
        },
      },
      {
        heading: { en: 'Build the Habit', es: 'Crea el hábito' },
        body: {
          en: 'Call to book: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Hunters Creek.',
          es: 'Llama para reservar: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Hunters Creek.',
        },
      },
    ],
  },
  {
    _id: 'post-13',
    slug: 'blog/haircut-layover-orlando-airport',
    image: '/images/blog-13-mco-layover.webp',
    imageAlt: {
      en: 'The waiting lounge inside New Barbershop in Orlando',
      es: 'El área de espera dentro de New Barbershop en Orlando',
    },
    locales: {
      en: {
        title: 'Flying Through MCO? The Layover & Crew Guide to Getting a Haircut in Orlando',
        seoTitle: 'Haircut on a Layover at Orlando Airport (MCO)? A Crew & Traveler Guide | New Barbershop Orlando',
        metaDescription:
          'Getting a haircut on a layover at Orlando airport (MCO) — crew and travelers: two walk-in barber shops about 15–20 minutes from MCO, open 7 days. Call (407) 820-4541.',
        intro:
          'Orlando International Airport moves millions of people through this city — and a good number of them are working the flights, not taking them. Pilots and flight attendants land at MCO with a grooming standard to keep and a schedule that changes by text message. Travelers land with long layovers and vacation photos ahead. Both groups ask the same question: where can I get a proper haircut near the airport, without an appointment? This guide is the honest answer.',
        closing:
          'Stop by either shop or call ahead — find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Flying Through MCO? The Layover & Crew Guide to Getting a Haircut in Orlando',
        seoTitle: 'Haircut on a Layover at Orlando Airport (MCO)? A Crew & Traveler Guide | New Barbershop Orlando',
        metaDescription:
          'Getting a haircut on a layover at Orlando airport (MCO) — crew and travelers: two walk-in barber shops about 15–20 minutes from MCO, open 7 days. Call (407) 820-4541.',
        intro:
          'El Aeropuerto Internacional de Orlando mueve a millones de personas por esta ciudad, y un buen número de ellas trabaja en los vuelos, no los toma. Pilotos y tripulantes de cabina llegan a MCO con un estándar de presentación que mantener y un horario que cambia por mensaje de texto. Los viajeros llegan con escalas largas y fotos de vacaciones por delante. Ambos grupos hacen la misma pregunta: ¿dónde puedo cortarme bien el cabello cerca del aeropuerto, sin cita? Esta guía es la respuesta honesta.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama antes — encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'For Crew: Grooming Is Part of the Job', es: 'Para tripulantes: el arreglo es parte del trabajo' },
        body: {
          en: 'Crew appearance standards are not vanity — neat hair kept off the ears and collar, tidy sideburns, and beards kept tight and well-kept are written into the job, and they get checked before duty. The problem is the roster: when your days off move, a booked-out barber does not work. Walk-ins do. Both of our shops take walk-ins every day, so a rest day or an overnight in Orlando is all you need: haircuts, skin fades, beard trims and line-ups that bring you back inside standard, in English or Spanish. (If you are visiting the city rather than working it, our Florida Mall visitor guide covers the vacation version.)',
          es: 'Los estándares de presentación de las tripulaciones no son vanidad: el cabello prolijo, fuera de las orejas y del cuello, las patillas cuidadas y las barbas cortas y bien mantenidas están escritos en el trabajo, y se revisan antes del servicio. El problema es el itinerario: cuando tus días libres se mueven, un barbero con agenda llena no sirve. Los clientes sin cita, sí. Nuestras dos barberías aceptan clientes sin cita todos los días, así que un día de descanso o una noche en Orlando es todo lo que necesitas: cortes, degradados al ras, arreglos de barba y delineados que te devuelven al estándar, en inglés o español. (Si estás de visita en la ciudad en vez de trabajando en ella, nuestra guía para visitantes de Florida Mall cubre la versión de vacaciones.)',
        },
      },
      {
        heading: { en: 'For Travelers: Which Layovers Honestly Work', es: 'Para viajeros: qué escalas funcionan de verdad' },
        body: {
          en: 'Let us be straight: do not leave the airport on a short connection — a haircut is not worth a missed flight. Where it works beautifully is a long or overnight layover, a rest day, or the hours before you fly home and want to look like the trip treated you well. Here is where we are, honestly: our Florida Mall shop (6220 S Orange Blossom Trl) is about 15 minutes from MCO and about a mile and a half from the Florida Mall, on the same road — an easy pairing with layover shopping. Our Hunters Creek shop (9741 S Orange Blossom Trl) is about a 20-minute drive from MCO. Both are family-run since 2003, with over 1,400 five-star Google reviews, open seven days a week. Call ahead if your window is tight, or just walk in.',
          es: 'Seamos directos: no salgas del aeropuerto en una conexión corta; un corte no vale un vuelo perdido. Donde sí funciona de maravilla es en una escala larga o con noche incluida, un día de descanso, o las horas antes de volar a casa queriendo verte como si el viaje te hubiera tratado bien. Aquí está nuestra ubicación, con honestidad: nuestro local de Florida Mall (6220 S Orange Blossom Trl) está a unos 15 minutos de MCO y a cerca de milla y media de Florida Mall, sobre la misma avenida: una combinación fácil con las compras de la escala. Nuestro local de Hunters Creek (9741 S Orange Blossom Trl) está a unos 20 minutos en auto de MCO. Ambas son barberías familiares desde 2003, con más de 1,400 reseñas de cinco estrellas en Google, abiertas los siete días de la semana. Llama antes si tu margen es corto, o simplemente ven sin cita.',
        },
      },
      {
        heading: { en: 'Walk In Between Flights', es: 'Ven sin cita entre vuelos' },
        body: {
          en: 'Call to book: Florida Mall (407) 820-4541 · Hunters Creek (407) 470-4846. WhatsApp is available at Hunters Creek.',
          es: 'Llama para reservar: Florida Mall (407) 820-4541 · Hunters Creek (407) 470-4846. WhatsApp está disponible en Hunters Creek.',
        },
      },
    ],
  },
  {
    _id: 'post-14',
    slug: 'blog/fade-vs-taper',
    image: '/images/blog-14-fade-vs-taper.webp',
    imageAlt: {
      en: 'Client with a taper fade at New Barbershop in Orlando',
      es: 'Cliente con un taper fade en New Barbershop en Orlando',
    },
    locales: {
      en: {
        title: 'Fade vs Taper: Which One Is Right for You?',
        seoTitle: 'Fade vs Taper Haircut: What’s the Difference? An Orlando Barber Explains | New Barbershop Orlando',
        metaDescription:
          'Fade vs taper haircut — what’s the difference, which grows out better, and what to ask your barber for. Explained by Orlando barbers. Walk-ins welcome. Call (407) 470-4846.',
        intro:
          'Fade or taper? It is the question behind half the photos clients show us — and the fear behind the other half is asking for the wrong one. The good news: the difference takes one sentence to explain, and choosing between them comes down to three things — how much contrast you want, how the grow-out treats you, and how often you want to sit back in the chair.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Fade vs Taper: Which One Is Right for You?',
        seoTitle: 'Fade vs Taper Haircut: What’s the Difference? An Orlando Barber Explains | New Barbershop Orlando',
        metaDescription:
          'Fade vs taper haircut — what’s the difference, which grows out better, and what to ask your barber for. Explained by Orlando barbers. Walk-ins welcome. Call (407) 470-4846.',
        intro:
          '¿Fade o taper? Es la pregunta detrás de la mitad de las fotos que nos muestran los clientes, y el miedo detrás de la otra mitad es pedir el equivocado. La buena noticia: la diferencia se explica en una frase, y elegir entre los dos se reduce a tres cosas: cuánto contraste quieres, cómo te trata el crecimiento y cada cuánto quieres volver a la silla.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'The One-Sentence Difference', es: 'La diferencia en una frase' },
        body: {
          en: 'A fade blends the sides all the way around the head, usually down to the skin at the bottom — the hair disappears gradually, with no visible line where it ends. A taper blends only at the edges — the sideburns and the neckline — while the sides keep their full length and shape. Same family, different commitment: the fade is a statement of contrast, the taper is a cleanup of the outline. (For the full tour of fade types and blends, our Expert Fades in Orlando post goes deep on that side of the family.)',
          es: 'Un fade (degradado) mezcla los lados alrededor de toda la cabeza, normalmente hasta la piel en la parte baja: el cabello desaparece gradualmente, sin una línea visible donde termina. Un taper mezcla solo los bordes — las patillas y la nuca — mientras los lados conservan su largo y su forma completos. Misma familia, compromiso distinto: el fade es una declaración de contraste; el taper es una limpieza del contorno. (Para el recorrido completo de tipos de degradado y mezclas, nuestra publicación Degradados expertos en Orlando profundiza en ese lado de la familia.)',
        },
      },
      {
        heading: { en: 'Decide by Contrast, Grow-Out and Upkeep', es: 'Decide por contraste, crecimiento y mantenimiento' },
        body: {
          en: 'Contrast: the higher and tighter the fade, the sharper and bolder the look; the taper is the office-safe, classic option that never reads as “a haircut event.” Grow-out: a fade shows its age in about two weeks as the blend climbs; a taper grows out softly for four to five weeks because there is less contrast to lose. Upkeep follows from that — fades live on a 2–3 week cadence, tapers on 3–5. Hair type breaks ties: very curly or wavy hair shows a beautiful taper, while straight, thick hair holds a fade’s gradient crisply. Still torn? Start with the taper or a low fade — you can always take it higher next visit, and every option is on our Services page.',
          es: 'Contraste: mientras más alto y ajustado el fade, más definido y audaz el look; el taper es la opción clásica y segura para la oficina, que nunca se lee como “un evento de corte”. Crecimiento: un fade muestra su edad en unas dos semanas, a medida que la mezcla sube; un taper crece con suavidad durante cuatro o cinco semanas porque hay menos contraste que perder. El mantenimiento sigue de ahí: los fades viven en una cadencia de 2–3 semanas; los tapers, de 3–5. El tipo de cabello desempata: el cabello muy rizado u ondulado luce un taper hermoso, mientras el cabello lacio y grueso sostiene el degradado de un fade con nitidez. ¿Sigues entre los dos? Empieza con el taper o un fade bajo: siempre puedes subirlo en la próxima visita, y cada opción está en nuestra página de Servicios.',
        },
      },
      {
        heading: { en: 'What to Say in the Chair', es: 'Qué decir en la silla' },
        body: {
          en: 'For a fade: “Mid fade, down to skin at the bottom, keep the top long enough to style.” For a taper: “Taper the sideburns and neckline, keep the sides full, scissor cut on top.” Either way, tell your barber — or call ahead: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Hunters Creek.',
          es: 'Para un fade: “Degradado medio, hasta la piel abajo, y arriba déjalo con largo suficiente para peinar”. Para un taper: “Taper en las patillas y la nuca, los lados completos, y arriba a tijera”. En cualquier caso, díselo a tu barbero, o llama antes: Hunters Creek (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Hunters Creek.',
        },
      },
    ],
  },
];

// ——— Sanity swap (wiring guide §6, Blog query verbatim) ———
const POSTS_QUERY = `*[_type == "post"] | order(order asc) {
  _id, "slug": slug.current,
  "image": coalesce(image.asset->url, imagePath), imageAlt,
  locales, sections[] { heading, body }
}`;

export const posts: Post[] = await (async () => {
  if (!USE_SANITY) return localPosts;
  const fetched = await fetchSanity<Post[]>('posts', POSTS_QUERY);
  if (fetched && fetched.length > 0) return fetched;
  console.error('[sanity] posts: fetch missing/incomplete — using LOCAL post data');
  return localPosts;
})();

export function getPost(slug: string): Post {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Unknown post slug: ${slug}`);
  return post;
}
