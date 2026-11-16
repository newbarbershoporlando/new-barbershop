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
