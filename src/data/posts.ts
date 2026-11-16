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
        seoTitle: 'Top-Rated Barber Shop in Orlando — Family-Run Since 2003',
        metaDescription:
          'Family-run barber shop in Orlando since 2003. Two shops on Orange Blossom Trail, open 7 days a week. Call (407) 470-4846 or (407) 820-4541 to book today.',
        intro:
          'Looking for a barber shop Orlando trusts for every cut? It is about more than a chair and clippers — it is about a team that knows your style, remembers how you like it, and treats every visit like it matters. At New Barbershop, that is how we have worked since 2003.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'La barbería mejor valorada de Orlando — Familiar desde 2003',
        seoTitle: 'La mejor barbería de Orlando — Familiar desde 2003',
        metaDescription:
          'Barbería familiar en Orlando desde 2003, con dos locales en Orange Blossom Trail y atención en español. Abiertos los 7 días. Llama al (407) 470-4846.',
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
          en: 'We are a family-run business with over 20 years of experience behind the chair. Our two Orlando shops sit on South Orange Blossom Trail — New Barbershop 1 at 9741 S Orange Blossom Trl, in Southchase, and New Barbershop 2 at 6220 S Orange Blossom Trl, near Florida Mall, about 3.7 miles apart. Walk-ins are always welcome, and booking is by phone. With over 1,400 Google reviews across both shops, and our Southchase shop rated 5.0 stars, we take pride in every cut and every client.',
          es: 'Somos un negocio familiar con más de 20 años de experiencia detrás de la silla. Nuestras dos barberías de Orlando están sobre South Orange Blossom Trail — New Barbershop 1 en 9741 S Orange Blossom Trl, en Southchase, y New Barbershop 2 en 6220 S Orange Blossom Trl, cerca de Florida Mall, a unas 3.7 millas de distancia. Siempre aceptamos clientes sin cita y las reservas son por teléfono. Con más de 1,400 reseñas de Google entre ambas barberías, y nuestro local de Southchase con 5.0 estrellas, nos enorgullecemos de cada corte y cada cliente.',
        },
      },
      {
        heading: { en: 'Services for Every Style', es: 'Servicios para cada estilo' },
        body: {
          en: 'Our full service covers haircuts, beard trims, hot towel shaves, hair designs, eyebrows and kids cuts — and braids for men and women at Southchase. Whether you want a clean fade, a sharp line-up or a classic cut, our barbers shape it to your style. See the full list on our Services page. We serve you in English y español, and both shops are open seven days a week, from early morning to late evening.',
          es: 'Nuestro servicio completo incluye cortes de cabello, arreglos de barba, afeitados con toalla caliente, diseños en el cabello, cejas y cortes para niños — y trenzas para hombres y mujeres en Southchase. Ya sea que quieras un degradado limpio, un delineado definido o un corte clásico, nuestros barberos lo adaptan a tu estilo. Mira la lista completa en nuestra página de Servicios. Te atendemos en English y español, y ambas barberías abren los siete días de la semana, desde temprano en la mañana hasta tarde en la noche.',
        },
      },
      {
        heading: { en: 'Visit Us or Call to Book', es: 'Visítanos o llama para reservar' },
        body: {
          en: 'Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
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
        seoTitle: 'Expert Fades in Orlando — Precision Haircuts for Every Style',
        metaDescription:
          'Expert fades in Orlando — clean blends, sharp line-ups, precision haircuts. Two shops on Orange Blossom Trail. Call (407) 470-4846 or (407) 820-4541 to book.',
        intro:
          'Looking for fades in Orlando that stay sharp long after you leave the chair? A great fade is all about the blend — clean lines, a smooth transition, and a shape that fits your style. At New Barbershop, our barbers have spent over 20 years perfecting that blend.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Degradados expertos en Orlando — Cortes de precisión para cada estilo',
        seoTitle: 'Degradados en Orlando — Cortes de precisión para tu estilo',
        metaDescription:
          'Degradados expertos en Orlando: difuminados limpios y delineados definidos. Dos locales en Orange Blossom Trail. Llama al (407) 470-4846.',
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
          en: 'From low fades to high skin fades, tapers to burst fades, we shape each cut to your hair and your look. Whether you want a clean everyday fade or a bold design, we take our time on the details — the line-up, the edges, the finish. Our full service also covers beard trims, hot towel shaves, hair designs, eyebrows and kids cuts — and braids for men and women at Southchase. See everything we do on our Services page.',
          es: 'Desde degradados bajos hasta degradados altos al ras, tapers y burst fades, adaptamos cada corte a tu cabello y tu look. Ya sea que quieras un degradado limpio para todos los días o un diseño llamativo, nos tomamos el tiempo en los detalles — el delineado, los bordes, el acabado. Nuestro servicio completo también incluye arreglos de barba, afeitados con toalla caliente, diseños en el cabello, cejas y cortes para niños — y trenzas para hombres y mujeres en Southchase. Mira todo lo que hacemos en nuestra página de Servicios.',
        },
      },
      {
        heading: { en: 'Two Orlando Shops, One Standard', es: 'Dos barberías en Orlando, un mismo estándar' },
        body: {
          en: 'We are a family-run business since 2003, with two shops on South Orange Blossom Trail — New Barbershop 1 at 9741 S Orange Blossom Trl, in Southchase, and New Barbershop 2 at 6220 S Orange Blossom Trl, near Florida Mall, about 3.7 miles apart. Walk-ins are always welcome, and booking is by phone. With over 1,400 Google reviews across both shops, and our Southchase shop rated 5.0 stars, we take pride in every cut and every client. We serve you in English y español, and both shops are open seven days a week, from early morning to late evening.',
          es: 'Somos un negocio familiar desde 2003, con dos barberías sobre South Orange Blossom Trail — New Barbershop 1 en 9741 S Orange Blossom Trl, en Southchase, y New Barbershop 2 en 6220 S Orange Blossom Trl, cerca de Florida Mall, a unas 3.7 millas de distancia. Siempre aceptamos clientes sin cita y las reservas son por teléfono. Con más de 1,400 reseñas de Google entre ambas barberías, y nuestro local de Southchase con 5.0 estrellas, nos enorgullecemos de cada corte y cada cliente. Te atendemos en English y español, y ambas barberías abren los siete días de la semana, desde temprano en la mañana hasta tarde en la noche.',
        },
      },
      {
        heading: { en: 'Book Your Fade', es: 'Reserva tu degradado' },
        body: {
          en: 'Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
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
        seoTitle: 'Braids in Orlando — Braiding for Men and Women',
        metaDescription:
          'Braids in Orlando for men and women — neat, comfortable braiding at New Barbershop 1. Call Southchase (407) 470-4846 to book your braiding appointment today.',
        intro:
          'Looking for braids in Orlando that are neat, comfortable and made to last? Braiding is a craft — clean parts, even tension, and a style that fits you. At New Barbershop 1, our braiding specialist brings that care to every head of hair, for men and women alike.',
        closing: 'Braids are a Southchase service — find the shop’s location and hours on our Contact page.',
      },
      es: {
        title: 'Trenzas en Orlando — Trenzado para hombres y mujeres',
        seoTitle: 'Trenzas en Orlando para hombres y mujeres',
        metaDescription:
          'Trenzas en Orlando para hombres y mujeres: trenzado limpio y cómodo en New Barbershop 1, Southchase. Llama al (407) 470-4846 para tu cita.',
        intro:
          '¿Buscas trenzas en Orlando que se vean prolijas, sean cómodas y duren? Trenzar es un arte — divisiones limpias, tensión uniforme y un estilo que va contigo. En New Barbershop 1, nuestra especialista en trenzas aporta ese cuidado a cada cabellera, tanto para hombres como para mujeres.',
        closing: 'Las trenzas son un servicio de Southchase — encuentra la ubicación y los horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'Braids in Orlando for Men and Women', es: 'Trenzas en Orlando para hombres y mujeres' },
        body: {
          en: 'We offer braiding for men and women at New Barbershop 1 — our shop at 9741 S Orange Blossom Trl, in Southchase. From cornrows to box braids and more, we work with your hair’s length and texture to create a style that looks sharp and feels good. Braids are available at Southchase only, so call Southchase at (407) 470-4846 to book your braiding appointment.',
          es: 'Ofrecemos trenzado para hombres y mujeres en New Barbershop 1 — nuestra barbería en 9741 S Orange Blossom Trl, en Southchase. Desde cornrows hasta box braids y más, trabajamos con el largo y la textura de tu cabello para crear un estilo que se vea definido y se sienta bien. Las trenzas están disponibles solo en Southchase, así que llama a Southchase al (407) 470-4846 para reservar tu cita de trenzado.',
        },
      },
      {
        heading: { en: 'More Than Braids', es: 'Más que trenzas' },
        body: {
          en: 'Our full service also covers haircuts, beard trims, hot towel shaves, hair designs, eyebrows and kids cuts — and our barbers shape every cut to your style. See everything we do on our Services page. We are a family-run business since 2003, with over 20 years of experience, two shops on South Orange Blossom Trail, and over 1,400 Google reviews across both shops, with our Southchase shop rated 5.0 stars. We serve you in English y español, and both shops are open seven days a week, from early morning to late evening.',
          es: 'Nuestro servicio completo también incluye cortes de cabello, arreglos de barba, afeitados con toalla caliente, diseños en el cabello, cejas y cortes para niños — y nuestros barberos adaptan cada corte a tu estilo. Mira todo lo que hacemos en nuestra página de Servicios. Somos un negocio familiar desde 2003, con más de 20 años de experiencia, dos barberías sobre South Orange Blossom Trail y más de 1,400 reseñas de Google entre ambas, con nuestro local de Southchase calificado con 5.0 estrellas. Te atendemos en English y español, y ambas barberías abren los siete días de la semana, desde temprano en la mañana hasta tarde en la noche.',
        },
      },
      {
        heading: { en: 'Book Your Braids at Southchase', es: 'Reserva tus trenzas en Southchase' },
        body: {
          en: 'Call to book braids: Southchase (407) 470-4846. WhatsApp is available at Southchase.',
          es: 'Llama para reservar trenzas: Southchase (407) 470-4846. WhatsApp está disponible en Southchase.',
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
        seoTitle: 'Welcome to Your Neighborhood Barbershop in Orlando',
        metaDescription:
          'Welcome to your neighborhood barbershop in Orlando. Family-run since 2003, two shops on Orange Blossom Trail. Call (407) 470-4846 or (407) 820-4541 to book.',
        intro:
          'Welcome to your neighborhood barbershop Orlando has trusted since 2003. New Barbershop is a family-run business cutting hair on South Orange Blossom Trail — over 20 years of experience, two shops, and a simple promise: a clean cut, a fair chair, and a team that treats you like a neighbor. This is our first post, and we wanted to use it to say hello and tell you a little about who we are.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Bienvenido a tu barbería de barrio en Orlando',
        seoTitle: 'Bienvenido a tu barbería de barrio en Orlando',
        metaDescription:
          'Tu barbería de barrio en Orlando: negocio familiar desde 2003, dos locales en Orange Blossom Trail. Llama al (407) 470-4846 o al (407) 820-4541.',
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
          en: 'We have two Orlando shops: New Barbershop 1 at 9741 S Orange Blossom Trl, in Southchase, and New Barbershop 2 at 6220 S Orange Blossom Trl, near Florida Mall, about 3.7 miles apart. Walk-ins are always welcome, and booking is by phone. With over 1,400 Google reviews across both shops, and our Southchase shop rated 5.0 stars, we take pride in every cut and every client. We serve you in English y español, and both shops are open seven days a week, from early morning to late evening.',
          es: 'Tenemos dos barberías en Orlando: New Barbershop 1 en 9741 S Orange Blossom Trl, en Southchase, y New Barbershop 2 en 6220 S Orange Blossom Trl, cerca de Florida Mall, a unas 3.7 millas de distancia. Siempre aceptamos clientes sin cita y las reservas son por teléfono. Con más de 1,400 reseñas de Google entre ambas barberías, y nuestro local de Southchase con 5.0 estrellas, nos enorgullecemos de cada corte y cada cliente. Te atendemos en English y español, y ambas barberías abren los siete días de la semana, desde temprano en la mañana hasta tarde en la noche.',
        },
      },
      {
        heading: { en: 'What We Do', es: 'Lo que hacemos' },
        body: {
          en: 'Our full service covers haircuts, beard trims, hot towel shaves, hair designs, eyebrows and kids cuts — and braids for men and women at Southchase. Whether you want a sharp fade, a clean line-up or a classic cut, our barbers shape it to your style. See the full list on our Services page.',
          es: 'Nuestro servicio completo incluye cortes de cabello, arreglos de barba, afeitados con toalla caliente, diseños en el cabello, cejas y cortes para niños — y trenzas para hombres y mujeres en Southchase. Ya sea que quieras un degradado definido, un delineado limpio o un corte clásico, nuestros barberos lo adaptan a tu estilo. Mira la lista completa en nuestra página de Servicios.',
        },
      },
      {
        heading: { en: 'Come See Us', es: 'Ven a visitarnos' },
        body: {
          en: 'Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
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
        seoTitle: 'Visiting Orlando? Get a Fresh Haircut Near Florida Mall',
        metaDescription:
          'Visiting Orlando? Get a fresh haircut minutes from Florida Mall — walk-ins welcome, bilingual service, open 7 days a week. Call (407) 820-4541 or (407) 470-4846.',
        intro:
          'In Orlando on vacation and your haircut did not survive the trip? It happens — Florida heat, pool days and theme parks are rough on a fresh cut. The good news: you do not need an appointment or a plan. Walk into New Barbershop, sit down, and walk out looking sharp for the rest of your trip.',
        closing:
          'Stop by either shop or call ahead — find both locations and hours on our Contact page.',
      },
      es: {
        title: '¿De visita en Orlando? Hazte un corte fresco cerca de Florida Mall',
        seoTitle: '¿De visita en Orlando? Corte cerca de Florida Mall',
        metaDescription:
          '¿De visita en Orlando? Hazte un corte a minutos de Florida Mall: sin cita, atención bilingüe y abiertos los 7 días. Llama al (407) 820-4541.',
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
          en: 'Both of our shops sit on South Orange Blossom Trail. New Barbershop 2, at 6220 S Orange Blossom Trl, is minutes from Florida Mall — an easy stop between the mall, your hotel and the attractions. Down the Trail, New Barbershop 1 at 9741 S Orange Blossom Trl serves the Southchase side. We are a family-run business since 2003, with over 1,400 five-star Google reviews across both shops, and both locations are open seven days a week — so whenever your free hour lands, a chair is ready.',
          es: 'Nuestras dos barberías están sobre South Orange Blossom Trail. New Barbershop 2, en 6220 S Orange Blossom Trl, está a minutos de Florida Mall: una parada fácil entre el centro comercial, tu hotel y las atracciones. Más adelante sobre la Trail, New Barbershop 1, en 9741 S Orange Blossom Trl, atiende el lado de Southchase. Somos un negocio familiar desde 2003, con más de 1,400 reseñas de cinco estrellas en Google entre ambas barberías, y las dos ubicaciones abren los siete días de la semana: cuando tengas una hora libre, una silla te espera.',
        },
      },
      {
        heading: { en: 'Walk In or Call Ahead', es: 'Ven sin cita o llama antes' },
        body: {
          en: 'Call to book: Florida Mall (407) 820-4541 · Southchase (407) 470-4846. WhatsApp is available at Southchase.',
          es: 'Llama para reservar: Florida Mall (407) 820-4541 · Southchase (407) 470-4846. WhatsApp está disponible en Southchase.',
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
        seoTitle: 'Car Shopping on Orange Blossom Trail? Get a Haircut Nearby',
        metaDescription:
          'Spending the day at the dealerships on Orange Blossom Trail? Both New Barbershop locations are right on the Trail — walk-ins welcome. Call (407) 470-4846 or (407) 820-4541.',
        intro:
          'If you are spending the day on Orange Blossom Trail, you know the rhythm: a test drive, some paperwork, a wait in the service lounge, more paperwork. The Trail is Orlando’s car row — and both of our barber shops sit right on it, close enough that a fresh cut fits neatly into the hours you are already here.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: '¿Comprando un auto en Orange Blossom Trail? Córtate el cabello mientras estás por la zona',
        seoTitle: '¿Comprando auto en Orange Blossom Trail? Córtate el cabello',
        metaDescription:
          '¿De concesionario en concesionario por Orange Blossom Trail? Nuestras dos barberías están sobre la misma calle. Sin cita. Llama al (407) 470-4846.',
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
          en: 'New Barbershop 1 at 9741 S Orange Blossom Trl, in Southchase, and New Barbershop 2 at 6220 S Orange Blossom Trl, near Florida Mall, are about 3.7 miles apart — and both are surrounded by the dealerships that line this corridor. Buying, trading in or waiting on service, you are never more than a short drive from one of our chairs. Walk-ins are welcome at both shops, and both are open seven days a week.',
          es: 'New Barbershop 1, en 9741 S Orange Blossom Trl, en Southchase, y New Barbershop 2, en 6220 S Orange Blossom Trl, cerca de Florida Mall, están a unas 3.7 millas de distancia, y ambas están rodeadas por los concesionarios que bordean este corredor. Comprando, entregando tu auto o esperando un servicio, nunca estás a más de un corto trayecto de una de nuestras sillas. Aceptamos clientes sin cita en las dos barberías, y ambas abren los siete días de la semana.',
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
          en: 'Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
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
        seoTitle: 'The Two-Week Haircut Routine for Sales Pros & Realtors',
        metaDescription:
          'Realtors, loan officers and sales pros: keep your fade sharp on a two-week routine — full cuts, line-up and beard touch-ups, walk-ins welcome. Call (407) 470-4846 or (407) 820-4541.',
        intro:
          'When your job is face-to-face — showings, closings, client meetings, the sales floor — your haircut is part of the first impression, and it is on a clock. A fade that looks perfect this week starts growing out the next. The fix is not a better cut; it is a routine: a full cut about every two weeks, with quick touch-ups in between.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Agentes inmobiliarios, oficiales de préstamos y profesionales de ventas: la rutina de corte cada dos semanas',
        seoTitle: 'La rutina de corte cada dos semanas para profesionales',
        metaDescription:
          'Agentes, prestamistas y vendedores: mantén tu degradado impecable con una rutina de dos semanas. Sin cita. Llama al (407) 470-4846 o al (407) 820-4541.',
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
          en: 'The week between cuts is where the routine pays off. A razor line-up restores the edges, a beard trim and shaping keeps the jawline clean, and a neck cleanup takes minutes — the three touch-ups that make a growing-out cut look intentional again before a big showing or closing. It has to fit your calendar, so we keep it easy: walk-ins welcome at both shops, open seven days a week, and our Southchase location runs from 8 AM to 10:30 PM for early starts and late finishes. Both shops sit on South Orange Blossom Trail, near the dealerships and offices where so many of our regulars work.',
          es: 'La semana entre cortes es donde la rutina rinde. Un perfilado a navaja restaura los bordes, un arreglo y formado de barba mantiene limpia la línea de la mandíbula, y una limpieza de cuello toma minutos: los tres retoques que hacen que un corte en crecimiento se vea intencional otra vez antes de una visita importante o un cierre. Tiene que encajar en tu agenda, así que lo hacemos fácil: clientes sin cita en ambas barberías, abiertas los siete días de la semana, y nuestro local de Southchase atiende de 8 AM a 10:30 PM para empezar temprano o terminar tarde. Ambas barberías están sobre South Orange Blossom Trail, cerca de los concesionarios y las oficinas donde trabajan muchos de nuestros clientes habituales.',
        },
      },
      {
        heading: { en: 'Keep the Routine', es: 'Mantén la rutina' },
        body: {
          en: 'Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
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
        seoTitle: 'Holiday Haircuts in Orlando for Thanksgiving & Christmas',
        metaDescription:
          'Holiday haircuts in Orlando — fades, line-ups, beard trims, hot towel shaves and kids cuts for Thanksgiving, Christmas and New Year’s photos. Call (407) 470-4846 or (407) 820-4541.',
        intro:
          'The holidays put you in more photos than any other season — family gatherings at Thanksgiving, Christmas pictures, New Year’s Eve. A fresh cut is the easiest upgrade in every one of those photos, and a little timing makes it look even better. Here is how our regulars plan their holiday haircuts.',
        closing:
          'Stop by either shop or call ahead — find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Cortes para las fiestas en Orlando: luce impecable en Acción de Gracias, Navidad y Año Nuevo',
        seoTitle: 'Cortes para las fiestas en Orlando: luce impecable',
        metaDescription:
          'Cortes para las fiestas en Orlando: degradados, delineados, barba y cortes para niños para las fotos de fin de año. Llama al (407) 470-4846.',
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
          en: 'Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
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
        seoTitle: 'How Often Should a Man Get a Haircut? A Barber’s Schedule',
        metaDescription:
          'How often should a man get a haircut? An Orlando barber’s honest schedule by style — skin fades, fades, tapers, classics and beards. Walk-ins welcome. Call (407) 470-4846.',
        intro:
          'It is the question we hear more than any other in the chair: how often should a man get a haircut? The honest answer is that there is no single number — it depends on the style you wear, because every style grows out at the same speed but stops looking sharp at a different week. Here is the schedule we give our own clients, style by style.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: '¿Cada cuánto debe cortarse el cabello un hombre? El calendario honesto de un barbero, según tu estilo',
        seoTitle: '¿Cada cuánto debe cortarse el cabello un hombre?',
        metaDescription:
          '¿Cada cuánto cortarse el cabello? La guía honesta de un barbero de Orlando según tu estilo: degradados, taper, clásicos y barba. Llama al (407) 470-4846.',
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
          en: 'Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
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
        seoTitle: 'The Psychology of a Fresh Haircut — Why It Boosts Confidence',
        metaDescription:
          'The psychology of a fresh haircut: the mirror effect, first impressions and the reset of a clean cut, explained by Orlando barbers. Walk-ins welcome. Call (407) 470-4846.',
        intro:
          'Nobody has ever measured it in a lab, but every barber has watched it happen: a client walks in slumped and walks out standing taller, shoulders back, checking the mirror on the way to the door. There is a real psychology to a fresh haircut — nothing clinical, just the everyday way looking sharp changes how you carry yourself.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'La psicología de un corte fresco: por qué sales con la cabeza en alto',
        seoTitle: 'La psicología de un corte fresco: confianza al instante',
        metaDescription:
          'La psicología de un corte de cabello fresco: el efecto espejo, las primeras impresiones y el reinicio de un buen corte. Llama al (407) 470-4846.',
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
          en: 'Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
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
        seoTitle: 'Haircut for a New Start: Why a Fresh Cut Is Step One',
        metaDescription:
          'A haircut for a new start: why a fresh cut is step one of a fresh chapter — new job, new city, back on the dating scene. Orlando barbers, walk-ins welcome. Call (407) 470-4846.',
        intro:
          'Breakup, new job, new city, back on the dating scene — whatever the turning point, the first move is almost always the same: change the hair. It is not vanity. A fresh cut is the fastest visible change you fully control, and it tells you, before it tells anyone else, that the new chapter has started.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Nuevo look, nuevo capítulo: por qué un corte fresco es el primer paso de un nuevo comienzo',
        seoTitle: 'Corte para un nuevo comienzo: el primer paso',
        metaDescription:
          'Un corte para un nuevo comienzo: trabajo nuevo, ciudad nueva o de vuelta a las citas. Barberos en Orlando, sin cita. Llama al (407) 470-4846.',
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
          en: 'Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
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
        seoTitle: 'Men’s Grooming Habits: How Put-Together Men Stay Sharp',
        metaDescription:
          'The men’s grooming habits that keep you looking put together — a fixed haircut cadence, deliberate beard lines, a five-minute daily routine. Orlando barbers. Call (407) 470-4846.',
        intro:
          'Some men always look put together — not dressed up, just deliberate, every day, even on a random Tuesday. It is rarely about owning more products. Watching our regulars over the years, it comes down to a handful of grooming habits, and the first one is a calendar, not a bottle.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Luce como un profesional: los hábitos de cuidado personal de los hombres que siempre se ven impecables',
        seoTitle: 'Hábitos de cuidado personal para hombres impecables',
        metaDescription:
          'Los hábitos de cuidado de los hombres que lucen impecables: rutina de corte fija, barba cuidada y 5 minutos al día. Llama al (407) 470-4846.',
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
          en: 'Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
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
        seoTitle: 'Haircut on a Layover at Orlando Airport (MCO)? Crew Guide',
        metaDescription:
          'Getting a haircut on a layover at Orlando airport (MCO) — crew and travelers: two walk-in barber shops about 15–20 minutes from MCO, open 7 days. Call (407) 820-4541.',
        intro:
          'Orlando International Airport moves millions of people through this city — and a good number of them are working the flights, not taking them. Pilots and flight attendants land at MCO with a grooming standard to keep and a schedule that changes by text message. Travelers land with long layovers and vacation photos ahead. Both groups ask the same question: where can I get a proper haircut near the airport, without an appointment? This guide is the honest answer.',
        closing:
          'Stop by either shop or call ahead — find both locations and hours on our Contact page.',
      },
      es: {
        title: '¿Pasando por MCO? La guía de escalas y tripulaciones para cortarte el cabello en Orlando',
        seoTitle: '¿Escala en el aeropuerto de Orlando (MCO)? Guía de corte',
        metaDescription:
          '¿Escala en el aeropuerto de Orlando (MCO)? Dos barberías sin cita a unos 15–20 minutos, abiertas los 7 días. Llama al (407) 820-4541.',
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
          en: 'Let us be straight: do not leave the airport on a short connection — a haircut is not worth a missed flight. Where it works beautifully is a long or overnight layover, a rest day, or the hours before you fly home and want to look like the trip treated you well. Here is where we are, honestly: our Florida Mall shop (6220 S Orange Blossom Trl) is about 15 minutes from MCO and about a mile and a half from the Florida Mall, on the same road — an easy pairing with layover shopping. Our Southchase shop (9741 S Orange Blossom Trl) is about a 20-minute drive from MCO. Both are family-run since 2003, with over 1,400 five-star Google reviews, open seven days a week. Call ahead if your window is tight, or just walk in.',
          es: 'Seamos directos: no salgas del aeropuerto en una conexión corta; un corte no vale un vuelo perdido. Donde sí funciona de maravilla es en una escala larga o con noche incluida, un día de descanso, o las horas antes de volar a casa queriendo verte como si el viaje te hubiera tratado bien. Aquí está nuestra ubicación, con honestidad: nuestro local de Florida Mall (6220 S Orange Blossom Trl) está a unos 15 minutos de MCO y a cerca de milla y media de Florida Mall, sobre la misma avenida: una combinación fácil con las compras de la escala. Nuestro local de Southchase (9741 S Orange Blossom Trl) está a unos 20 minutos en auto de MCO. Ambas son barberías familiares desde 2003, con más de 1,400 reseñas de cinco estrellas en Google, abiertas los siete días de la semana. Llama antes si tu margen es corto, o simplemente ven sin cita.',
        },
      },
      {
        heading: { en: 'Walk In Between Flights', es: 'Ven sin cita entre vuelos' },
        body: {
          en: 'Call to book: Florida Mall (407) 820-4541 · Southchase (407) 470-4846. WhatsApp is available at Southchase.',
          es: 'Llama para reservar: Florida Mall (407) 820-4541 · Southchase (407) 470-4846. WhatsApp está disponible en Southchase.',
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
        seoTitle: 'Fade vs Taper Haircut: What’s the Difference?',
        metaDescription:
          'Fade vs taper haircut — what’s the difference, which grows out better, and what to ask your barber for. Explained by Orlando barbers. Walk-ins welcome. Call (407) 470-4846.',
        intro:
          'Fade or taper? It is the question behind half the photos clients show us — and the fear behind the other half is asking for the wrong one. The good news: the difference takes one sentence to explain, and choosing between them comes down to three things — how much contrast you want, how the grow-out treats you, and how often you want to sit back in the chair.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Degradado vs. taper: ¿cuál es el indicado para ti?',
        seoTitle: 'Degradado vs taper: ¿cuál es la diferencia?',
        metaDescription:
          'Degradado o taper: cuál es la diferencia, cuál crece mejor y qué pedirle a tu barbero. Te lo explican barberos de Orlando. Llama al (407) 470-4846.',
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
          en: 'For a fade: “Mid fade, down to skin at the bottom, keep the top long enough to style.” For a taper: “Taper the sideburns and neckline, keep the sides full, scissor cut on top.” Either way, tell your barber — or call ahead: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Para un fade: “Degradado medio, hasta la piel abajo, y arriba déjalo con largo suficiente para peinar”. Para un taper: “Taper en las patillas y la nuca, los lados completos, y arriba a tijera”. En cualquier caso, díselo a tu barbero, o llama antes: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
        },
      },
    ],
  },
  {
    _id: 'post-15',
    slug: 'blog/how-often-wash-hair-men',
    image: '/images/blog-15-wash-hair.webp',
    imageAlt: {
      en: 'Client with a clean low fade at New Barbershop in Orlando',
      es: 'Cliente con un degradado bajo y limpio en New Barbershop en Orlando',
    },
    locales: {
      en: {
        title: 'How Often Should a Man Wash His Hair? The Schedule by Hair Type and Scalp',
        seoTitle: 'How Often Should a Man Wash His Hair? A Barber’s Guide',
        metaDescription:
          'How often to wash men’s hair — the schedule by hair type and scalp, from an Orlando barber: oily, wavy, thick, curly and coily. Walk-ins welcome. Call (407) 470-4846.',
        intro:
          'Ask ten men how often they wash their hair and you will hear everything from “every day, obviously” to “whenever it starts to itch.” Both can be right — because the honest answer depends on your hair type and your scalp, not on a rule somebody sold you. Here is the schedule we walk clients through in the chair.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: '¿Cada cuánto debe lavarse el cabello un hombre? El calendario según tu tipo de cabello y cuero cabelludo',
        seoTitle: '¿Cada cuánto debe lavarse el cabello un hombre?',
        metaDescription:
          '¿Cada cuánto lavar el cabello de un hombre? La guía de un barbero de Orlando según tu tipo de cabello y cuero cabelludo. Llama al (407) 470-4846.',
        intro:
          'Pregúntale a diez hombres cada cuánto se lavan el cabello y escucharás de todo: desde “todos los días, obvio” hasta “cuando empieza a picar”. Ambos pueden tener razón, porque la respuesta honesta depende de tu tipo de cabello y de tu cuero cabelludo, no de una regla que alguien te vendió. Este es el calendario que repasamos con los clientes en la silla.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'The Schedule by Hair Type', es: 'El calendario según tu tipo de cabello' },
        body: {
          en: 'Oily or straight hair: daily to every other day — oil shows fast on straight strands. Wavy hair: two to three times a week. Thick or coarse hair: about twice a week. Curly hair: once or twice a week. Coily hair: once a week or longer between washes. Not sure which band you are in? Run the day-two test: by the second day after a wash, if your scalp itches, flakes, or your roots feel waxy and heavy, wash sooner; if everything still feels clean and light, you can stretch. Your scalp votes — listen to it.',
          es: 'Cabello graso o lacio: a diario o un día sí y uno no; la grasa se nota rápido en el cabello lacio. Cabello ondulado: dos o tres veces por semana. Cabello grueso: unas dos veces por semana. Cabello rizado: una o dos veces por semana. Cabello muy rizado o afro: una vez por semana o con más espacio entre lavados. ¿No sabes en qué grupo estás? Haz la prueba del segundo día: si al segundo día de lavarlo el cuero cabelludo te pica, suelta escamas o las raíces se sienten pesadas y con cera, lava antes; si todo se sigue sintiendo limpio y ligero, puedes estirar. Tu cuero cabelludo vota: escúchalo.',
        },
      },
      {
        heading: { en: 'Technique Beats Calendar', es: 'La técnica le gana al calendario' },
        body: {
          en: 'How you wash matters as much as how often. Shampoo is for the scalp — fingertips, never nails, worked into the skin where oil and product actually live. Conditioner is for the lengths, not the roots. A water-only rinse handles gym days and sweat without stripping anything, and if you style with product daily, you have voted yourself into more frequent real washes, because product has to come out. Orlando moves the number too: heat, humidity, outdoor work and pool days all push you up the schedule. Still guessing? Our Hair Wash & Shampoo service is the reset button — and while you are in the chair, ask us to read your scalp and place you in your band honestly.',
          es: 'Cómo te lavas importa tanto como cada cuánto. El champú es para el cuero cabelludo: con las yemas de los dedos, nunca con las uñas, trabajado sobre la piel, donde viven la grasa y el producto. El acondicionador es para el largo, no para las raíces. Un enjuague solo con agua resuelve los días de gimnasio y sudor sin resecar nada, y si te peinas con producto a diario, tú mismo votaste por lavados reales más frecuentes, porque ese producto tiene que salir. Orlando también mueve el número: el calor, la humedad, el trabajo al aire libre y los días de piscina te suben en el calendario. ¿Sigues adivinando? Nuestro servicio de lavado y champú es el botón de reinicio, y mientras estás en la silla, pídenos que revisemos tu cuero cabelludo y te ubiquemos en tu grupo con honestidad.',
        },
      },
      {
        heading: { en: 'Ask Us in the Chair', es: 'Pregúntanos en la silla' },
        body: {
          en: 'Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
        },
      },
    ],
  },
  {
    _id: 'post-16',
    slug: 'blog/360-waves-routine',
    image: '/images/blog-16-waves.webp',
    imageAlt: {
      en: 'Client with a short crop — the starting point for training 360 waves',
      es: 'Cliente con un corte corto: el punto de partida para entrenar las 360 waves',
    },
    locales: {
      en: {
        title: '360 Waves: The Brush, Durag and Wolfing Routine, Explained by a Barber',
        seoTitle: '360 Waves Routine: Brush, Durag and Wolfing Explained',
        metaDescription:
          'The 360 waves routine from an Orlando barber — brush sessions, durag compression, wash-and-style and wolfing, plus our Waves Styling & Maintenance service. Call (407) 470-4846.',
        intro:
          'Waves are the most misunderstood style we cut. Clients ask for them like a haircut; barbers know they are a training program that a haircut merely starts. The pattern is laid by your brush, held by your durag and deepened by your patience — here is the routine, the way we explain it in the chair.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: '360 waves: la rutina del cepillo, el durag y el wolfing, explicada por un barbero',
        seoTitle: 'Rutina 360 waves: cepillo, durag y wolfing',
        metaDescription:
          'La rutina 360 waves de un barbero de Orlando: sesiones de cepillado, compresión con durag, lavado y wolfing. Llama al (407) 470-4846.',
        intro:
          'Las waves son el estilo más incomprendido de los que cortamos. Los clientes las piden como si fueran un corte; los barberos sabemos que son un programa de entrenamiento que el corte apenas inicia. El patrón lo crea tu cepillo, lo sostiene tu durag y lo profundiza tu paciencia. Esta es la rutina, tal como la explicamos en la silla.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'Trained, Not Cut: The Brush Sessions', es: 'Se entrenan, no se cortan: las sesiones de cepillo' },
        body: {
          en: 'It starts with the right base: a cut with the grain, usually a #1.5 to #2 guard, so the hair lies in the direction the pattern will run. From there, the brush does the work — sessions from the crown outward, in every direction the waves will flow, spread through the day, every day. Short, consistent sessions beat one long one. Most men see a first pattern forming within a few weeks of honest brushing; depth takes months, and anyone who promises you waves in a week is selling something. This is exactly the upkeep our Waves Styling & Maintenance service is built around — check the Services page for what the in-shop side covers.',
          es: 'Todo empieza con la base correcta: un corte a favor del grano, normalmente con una guía #1.5 a #2, para que el cabello se acueste en la dirección en que correrá el patrón. De ahí, el cepillo hace el trabajo: sesiones desde la coronilla hacia afuera, en cada dirección en que fluirán las waves, repartidas durante el día, todos los días. Las sesiones cortas y constantes le ganan a una sola sesión larga. La mayoría de los hombres ve un primer patrón formándose en pocas semanas de cepillado honesto; la profundidad toma meses, y quien te prometa waves en una semana te está vendiendo algo. Este es justo el mantenimiento alrededor del cual está construido nuestro servicio de peinado y mantenimiento de waves; revisa la página de Servicios para ver qué cubre la parte en la barbería.',
        },
      },
      {
        heading: { en: 'Compression and the Wash-and-Style', es: 'La compresión y el lavado con peinado' },
        body: {
          en: 'Brushing lays the pattern; compression keeps it. The durag goes on after every brush session and stays on all night — skip it and the day’s work puffs back up by morning. Once a week, wash-and-style: cleanse the hair while brushing the pattern in, rinse, brush again, then durag while it dries so the waves set clean instead of frizzy. Keep the hair moisturized between washes — dry hair refuses to lay down, and forcing it only breaks it. The honest promise of the whole system is not faster growth; it is less breakage and a pattern that survives.',
          es: 'El cepillado crea el patrón; la compresión lo conserva. El durag se pone después de cada sesión de cepillo y se queda toda la noche; si te lo saltas, el trabajo del día se esponja para la mañana. Una vez por semana, lavado con peinado: limpia el cabello mientras cepillas el patrón, enjuaga, cepilla otra vez y ponte el durag mientras se seca, para que las waves se fijen limpias en vez de con frizz. Mantén el cabello hidratado entre lavados: el cabello seco se niega a acostarse, y forzarlo solo lo quiebra. La promesa honesta de todo el sistema no es un crecimiento más rápido; es menos quiebre y un patrón que perdura.',
        },
      },
      {
        heading: { en: 'Wolfing: Where the Depth Comes From', es: 'Wolfing: de dónde sale la profundidad' },
        body: {
          en: 'Wolfing means growing the hair out — typically four to eight weeks without a cut — while brushing harder than ever, so the waves stack and deepen. During a wolf, your barber visits change: most are edges-only (a razor line-up to keep the wolf looking deliberate), and the final visit is the reveal cut, taken back down with the grain to show what you built. Knowing which visit is which is the difference between a deep pattern and an accidental reset. That rhythm — line-ups during the wolf, the reveal at the end — is the heart of our Waves Styling & Maintenance service. Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Wolfing significa dejar crecer el cabello — normalmente de cuatro a ocho semanas sin corte — mientras te cepillas más que nunca, para que las waves se apilen y ganen profundidad. Durante un wolf, tus visitas al barbero cambian: la mayoría son solo de bordes (un perfilado a navaja para que el wolf se vea intencional), y la visita final es el corte de revelación, de vuelta abajo y a favor del grano, para mostrar lo que construiste. Saber qué visita es cuál es la diferencia entre un patrón profundo y un reinicio accidental. Ese ritmo — delineados durante el wolf y la revelación al final — es el corazón de nuestro servicio de peinado y mantenimiento de waves. Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
        },
      },
    ],
  },
  {
    _id: 'post-17',
    slug: 'blog/braids-aftercare',
    image: '/images/blog-17-braids-aftercare.webp',
    imageAlt: {
      en: 'Client with clean cornrows braided at New Barbershop 1 in Orlando',
      es: 'Cliente con trenzas cornrows limpias hechas en New Barbershop 1 en Orlando',
    },
    locales: {
      en: {
        title: 'Braids Aftercare: How to Keep Them Clean, Comfortable and In Longer',
        seoTitle: 'Braids Aftercare: Keep Them Clean and In Longer',
        metaDescription:
          'Braids aftercare from our Orlando braiders — how long braids last, how to wash them, sleeping in a durag, and when they must come out. Braids at Southchase. Call (407) 470-4846.',
        intro:
          'The install is only half the service. What you do at home decides whether your braids look fresh for the long end of their life or tired by week two. Our braider at New Barbershop 1 gives every client the same aftercare talk — here it is in writing. (Still deciding on the style itself? Start with our Braids in Orlando post; this one is about life after the chair.)',
        closing: 'Braids are a Southchase service — find the shop’s location and hours on our Contact page.',
      },
      es: {
        title: 'Cuidado de las trenzas: cómo mantenerlas limpias, cómodas y por más tiempo',
        seoTitle: 'Cuidado de las trenzas: que duren más y se vean limpias',
        metaDescription:
          'Cuidado de las trenzas: cuánto duran, cómo lavarlas y cuándo retirarlas, por barberos de Orlando. Trenzas en Southchase. Llama al (407) 470-4846.',
        intro:
          'La instalación es solo la mitad del servicio. Lo que haces en casa decide si tus trenzas se ven frescas hasta el final de su vida útil o cansadas en la segunda semana. Nuestra trenzadora en New Barbershop 1 le da a cada cliente la misma charla de cuidado posterior; aquí está por escrito. (¿Todavía estás decidiendo el estilo? Empieza con nuestra publicación Trenzas en Orlando; esta trata de la vida después de la silla.)',
        closing: 'Las trenzas son un servicio de Southchase — encuentra la ubicación y los horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'The Honest Lifespan', es: 'La vida útil, con honestidad' },
        body: {
          en: 'Most men’s braids and cornrows live four to eight weeks, depending on the style and the care — cornrows often sit at the shorter end. What actually ends them is rarely the calendar: it is new growth loosening the base, frizz lifting the pattern, and buildup collecting at the roots. Care stretches you toward the long end of that range; nothing stretches past it, and a style left in too long starts costing you the hair it was protecting — tangles and breakage at takedown. Plan the takedown when you book the install, and the style never overstays.',
          es: 'La mayoría de las trenzas y cornrows para hombre viven de cuatro a ocho semanas, según el estilo y el cuidado; las cornrows suelen estar en el extremo más corto. Lo que en realidad las termina rara vez es el calendario: es el crecimiento nuevo aflojando la base, el frizz levantando el patrón y la acumulación en las raíces. El cuidado te acerca al extremo largo de ese rango; nada lo estira más allá, y un estilo que se queda demasiado tiempo empieza a costarte el cabello que protegía: enredos y quiebre al retirarlo. Planifica la retirada cuando reserves la instalación, y el estilo nunca se queda de más.',
        },
      },
      {
        heading: { en: 'The Weekly Routine', es: 'La rutina semanal' },
        body: {
          en: 'Yes, you can wash braids — about once a week, with diluted shampoo worked onto the scalp with your fingertips, not scrubbed through the braids themselves; rinse well and dry fully, every time, because damp braids left to air-dry under a durag stay damp where you cannot see. Between washes, a few drops of light oil along the parts every two or three days keeps the scalp comfortable. And every single night: satin or a durag. Sleep friction is the number-one frizz machine, and it works eight hours a night against an unprotected install.',
          es: 'Sí, las trenzas se pueden lavar: más o menos una vez por semana, con champú diluido trabajado sobre el cuero cabelludo con las yemas de los dedos, sin frotar las trenzas en sí; enjuaga bien y seca por completo, siempre, porque unas trenzas húmedas bajo un durag se quedan húmedas donde no se ve. Entre lavados, unas gotas de aceite ligero a lo largo de las divisiones cada dos o tres días mantienen cómodo el cuero cabelludo. Y cada noche, sin falta: satén o un durag. La fricción al dormir es la máquina de frizz número uno, y trabaja ocho horas por noche contra una instalación desprotegida.',
        },
      },
      {
        heading: { en: 'Takedown Discipline — and the Tension Rule', es: 'Disciplina al retirarlas — y la regla de la tensión' },
        body: {
          en: 'Two things we say in the chair that belong in writing. First, the tension rule: braids that hurt are too tight — say so at the install, on the day, not weeks later; a good braider adjusts on the spot. Second, when the growth at the base turns into tangles, the style is done, no matter how good it still looks from the front. A mid-wear check at the shop keeps an install honest, and your next set starts from healthy hair. Braids are done at our Southchase shop, for men and women. Call to book braids: Southchase (407) 470-4846. WhatsApp is available at Southchase.',
          es: 'Dos cosas que decimos en la silla y que merecen estar por escrito. Primero, la regla de la tensión: las trenzas que duelen están demasiado apretadas; dilo en la instalación, ese mismo día, no semanas después; una buena trenzadora ajusta en el momento. Segundo, cuando el crecimiento en la base se convierte en enredos, el estilo terminó, sin importar lo bien que se vea de frente. Una revisión a mitad de uso en la barbería mantiene honesta la instalación, y tu próximo set empieza desde un cabello sano. Las trenzas se hacen en nuestro local de Southchase, para hombres y mujeres. Llama para reservar tus trenzas: Southchase (407) 470-4846. WhatsApp está disponible en Southchase.',
        },
      },
    ],
  },
  {
    _id: 'post-18',
    slug: 'blog/best-hair-product-for-men',
    image: '/images/blog-18-hair-products.webp',
    imageAlt: {
      en: 'Barber styling a client’s hair at New Barbershop in Orlando',
      es: 'Barbero peinando el cabello de un cliente en New Barbershop en Orlando',
    },
    locales: {
      en: {
        title: 'Pomade, Clay, Wax, Gel or Paste? Pick Your Product by Hold and Shine',
        seoTitle: 'Best Hair Product for Men: Pomade, Clay, Wax, Gel or Paste?',
        metaDescription:
          'The best hair product for men, decoded by hold and shine — pomade, clay, wax, gel and paste compared by Orlando barbers, plus how to apply each. Call (407) 470-4846.',
        intro:
          'The shelf is confusing on purpose: five tubs that all promise “hold,” each doing something completely different. Most men own the wrong one, and then blame their hair. Forget brands — barbers pick product with two questions: how much hold, and how much shine? Answer those and the right category picks itself.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: '¿Pomada, arcilla, cera, gel o pasta? Elige tu producto según fijación y brillo',
        seoTitle: '¿Pomada, cera, arcilla, gel o pasta? Guía para hombres',
        metaDescription:
          'El mejor producto para el cabello del hombre, según fijación y brillo: pomada, arcilla, cera, gel y pasta comparados. Llama al (407) 470-4846.',
        intro:
          'El estante confunde a propósito: cinco envases que prometen “fijación”, cada uno haciendo algo completamente distinto. La mayoría de los hombres tiene el equivocado, y luego culpa a su cabello. Olvida las marcas: los barberos elegimos el producto con dos preguntas: ¿cuánta fijación y cuánto brillo? Respóndelas y la categoría correcta se elige sola.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'The Decoder: Five Categories, Two Axes', es: 'El decodificador: cinco categorías, dos ejes' },
        body: {
          en: 'Pomade — medium-to-strong hold with real shine: the combed styles (slick back, side part, pompadour). Clay — strong hold, no shine: matte texture, and the one that makes fine hair look thicker because it adds grip without gloss. Wax — flexible, reworkable hold with a little shine: restyle it at noon, it forgives. Gel — the hardest set and the wettest look, locked all day and crunchy if you overdo it. Paste — the middle ground: medium hold, low shine, a natural finish — if you own exactly one tub, this is the default. Match the category to the cut first; our Services page shows the styles each one was made for.',
          es: 'Pomada: fijación media a fuerte con brillo real; los estilos peinados (slick back, raya al lado, pompadour). Arcilla (clay): fijación fuerte, cero brillo; textura mate, y la que hace que el cabello fino se vea más grueso porque aporta agarre sin brillo. Cera (wax): fijación flexible y retocable con un poco de brillo; la reacomodas al mediodía y perdona. Gel: la fijación más dura y el look más húmedo; dura todo el día y se pone crujiente si te pasas. Pasta (paste): el punto medio; fijación media, poco brillo, acabado natural. Si vas a tener un solo envase, este es el predeterminado. Combina primero la categoría con el corte; nuestra página de Servicios muestra los estilos para los que fue hecho cada uno.',
        },
      },
      {
        heading: { en: 'Application Is Where Most Men Fail', es: 'La aplicación es donde la mayoría falla' },
        body: {
          en: 'The right tub used wrong still fails. The rules: start with a pea-to-dime amount — you can add, you cannot subtract. Warm it between your palms until it disappears. Work it back to front so the front does not get the whole load. And match the water to the product: water-based products go on damp hair; clay and wax go on dry hair, or they slide and clump. If your style dies by midday, nine times out of ten it is amount or application, not the product.',
          es: 'El envase correcto, usado mal, también falla. Las reglas: empieza con una cantidad del tamaño de un guisante a una moneda; puedes añadir, no puedes quitar. Caliéntalo entre las palmas hasta que desaparezca. Trabájalo de atrás hacia adelante, para que el frente no se lleve toda la carga. Y combina el agua con el producto: los productos a base de agua van sobre cabello húmedo; la arcilla y la cera van sobre cabello seco, o se resbalan y se apelotonan. Si tu peinado muere al mediodía, nueve de cada diez veces es la cantidad o la aplicación, no el producto.',
        },
      },
      {
        heading: { en: 'Wash-Out Reality', es: 'La realidad al lavarlo' },
        body: {
          en: 'Water-based products rinse out in a normal wash. Oil-based ones do not — work conditioner in first to break them down, then shampoo. And the habit that quietly causes trouble: sleeping in product, night after night, is how buildup starts — residue that flakes off and gets mistaken for dandruff. (Our washing-schedule post covers how often to wash it all out, by hair type.) When in doubt, bring your tub to your appointment and ask your barber which one your cut actually wants. Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Los productos a base de agua salen con un lavado normal. Los de base aceitosa, no: trabaja primero el acondicionador para deshacerlos y luego lava con champú. Y el hábito que causa problemas en silencio: dormir con producto, noche tras noche, es como empieza la acumulación: residuo que se desprende en escamas y se confunde con caspa. (Nuestra publicación sobre el calendario de lavado cubre cada cuánto lavar todo esto, según el tipo de cabello.) Ante la duda, trae tu envase a tu cita y pregúntale a tu barbero cuál quiere en realidad tu corte. Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
        },
      },
    ],
  },
  {
    _id: 'post-19',
    slug: 'blog/curly-hair-routine-men',
    image: '/images/blog-19-curly-routine.webp',
    imageAlt: {
      en: 'Client with a curly textured top and burst fade at New Barbershop in Orlando',
      es: 'Cliente con la parte superior rizada y texturizada y un burst fade en New Barbershop en Orlando',
    },
    locales: {
      en: {
        title: 'The Curly Hair Routine for Men: Wash Less, Condition Every Time, Touch Less',
        seoTitle: 'Curly Hair Routine for Men: Wash Less, Condition More',
        metaDescription:
          'The curly hair routine for men — wash less, condition every wash, detangle wet, style on damp hair, touch less. From Orlando barbers who cut curls daily. Call (407) 470-4846.',
        intro:
          'Curly hair is not difficult hair — it is hair playing by different rules, usually being managed by the straight-hair rulebook. Run the curly routine and the same head of hair that frizzed every afternoon turns cooperative. Three principles run the whole thing: wash less, condition every time, touch less.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'La rutina para cabello rizado en hombres: lava menos, acondiciona siempre, toca menos',
        seoTitle: 'Rutina para cabello rizado en hombres: lava menos',
        metaDescription:
          'La rutina para el cabello rizado del hombre: lava menos, acondiciona siempre, desenreda mojado y toca poco. Barberos de Orlando. Llama al (407) 470-4846.',
        intro:
          'El cabello rizado no es cabello difícil: es cabello que juega con otras reglas y que normalmente se maneja con el manual del cabello lacio. Aplica la rutina para rizos y la misma cabellera que se llenaba de frizz cada tarde se vuelve cooperadora. Tres principios lo gobiernan todo: lava menos, acondiciona siempre, toca menos.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'Wash Less, Condition Every Time', es: 'Lava menos, acondiciona siempre' },
        body: {
          en: 'Why the rules differ: oil from your scalp travels easily down a straight strand and barely around a curved one, so curls run dry by design. Shampoo accordingly — once to three times a week depending on your curl type (our washing-schedule post has the full by-type table) — but condition every single wash, without exception. Detangling happens in exactly one situation: wet, with conditioner in, using your fingers or a wide-tooth comb. Detangle dry curls and you are not detangling them; you are breaking them and shredding the pattern into frizz.',
          es: 'Por qué las reglas cambian: la grasa de tu cuero cabelludo viaja fácil por un cabello lacio y apenas logra rodear uno curvo, así que los rizos son secos por diseño. Lava en consecuencia — de una a tres veces por semana según tu tipo de rizo (nuestra publicación sobre el calendario de lavado tiene la tabla completa por tipo) — pero acondiciona en cada lavado, sin excepción. El desenredo ocurre en una sola situación: con el cabello mojado, con acondicionador puesto, usando los dedos o un peine de dientes anchos. Desenredar rizos secos no es desenredarlos: es quebrarlos y destrozar el patrón hasta convertirlo en frizz.',
        },
      },
      {
        heading: { en: 'Style Wet, Then Touch Less', es: 'Peina mojado y luego toca menos' },
        body: {
          en: 'Curly styling happens on wet or damp hair — that is when the pattern sets. One product, scrunched upward into the curls, is usually enough; two is a crowd. Dry it by scrunching with a microfiber towel or an old T-shirt, never by rubbing with a bath towel, which roughs the surface into frizz. Then the hardest rule: once it is dry, hands off. Every touch breaks the cast, separates the curls and manufactures the frizz you were trying to avoid — and a dry brush is worse than any hand, turning a defined pattern into a cloud in ten seconds. Refresh on non-wash days with water and a little conditioner, scrunched the same way.',
          es: 'El peinado rizado ocurre sobre el cabello mojado o húmedo: ahí es cuando el patrón se fija. Un producto, apretado hacia arriba dentro de los rizos (scrunch), suele bastar; dos ya son multitud. Sécalo apretando con una toalla de microfibra o una camiseta vieja, nunca frotando con una toalla de baño, que áspera la superficie hasta volverla frizz. Y luego la regla más difícil: cuando esté seco, manos fuera. Cada toque rompe la fijación, separa los rizos y fabrica el frizz que querías evitar; y un cepillo en seco es peor que cualquier mano: convierte un patrón definido en una nube en diez segundos. En los días sin lavado, refresca con agua y un poco de acondicionador, apretando de la misma forma.',
        },
      },
      {
        heading: { en: 'Curls Welcome in Both Shops', es: 'Los rizos son bienvenidos en ambas barberías' },
        body: {
          en: 'Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
        },
      },
    ],
  },
  {
    _id: 'post-20',
    slug: 'blog/beard-care-at-home',
    image: '/images/blog-20-beard-care.webp',
    imageAlt: {
      en: 'Client with a full, shaped beard at New Barbershop in Orlando',
      es: 'Cliente con una barba completa y formada en New Barbershop en Orlando',
    },
    locales: {
      en: {
        title: 'Beard Care at Home: Wash It, Feed It, Grow It Out Right',
        seoTitle: 'Beard Care at Home: Wash, Condition and Grow It Out Right',
        metaDescription:
          'Beard care at home — how to wash and condition a beard, get through the itch phase, handle patchy spots honestly, and use oils and balms right. Orlando barbers. Call (407) 470-4846.',
        intro:
          'A good beard is grown at home and finished in the chair. What you do at the sink between visits decides whether it looks kept or neglected — and beard hair plays by its own rules, because it is not head hair: it is coarser, drier, and growing out of the most washed-and-shaved skin on your body. Here is the home routine we teach.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Cuidado de la barba en casa: lávala, nútrela y déjala crecer bien',
        seoTitle: 'Cuidado de la barba en casa: lávala y déjala crecer bien',
        metaDescription:
          'Cuidado de la barba en casa: cómo lavarla y acondicionarla, pasar la picazón y usar aceites y bálsamos bien. Llama al (407) 470-4846.',
        intro:
          'Una buena barba se crece en casa y se termina en la silla. Lo que haces en el lavabo entre visitas decide si se ve cuidada o descuidada, y el vello de la barba juega con sus propias reglas, porque no es cabello de la cabeza: es más grueso, más seco y crece sobre la piel más lavada y rasurada de tu cuerpo. Esta es la rutina casera que enseñamos.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'Wash It Like a Beard, Not Like Hair', es: 'Lávala como barba, no como cabello' },
        body: {
          en: 'Beard hygiene starts with a correction: the shampoo that suits your scalp is usually too harsh for your face, and a dirty beard holds the whole day — food, sweat, city air — against your skin. Wash the beard two to three times a week with a dedicated beard wash (or a gentle cleanser), rinse it with water on the other days, and condition it: a little conditioner worked through after washing keeps coarse beard hair from turning wiry. Dry it by patting, not rubbing. That is the whole hygiene system — everything else is styling.',
          es: 'La higiene de la barba empieza con una corrección: el champú que le sirve a tu cuero cabelludo suele ser demasiado fuerte para tu cara, y una barba sucia guarda todo el día — comida, sudor, aire de la ciudad — contra tu piel. Lava la barba dos o tres veces por semana con un lavado específico para barba (o un limpiador suave), enjuágala con agua los demás días y acondiciónala: un poco de acondicionador después del lavado evita que el vello grueso de la barba se vuelva áspero. Sécala con toques, sin frotar. Ese es todo el sistema de higiene; lo demás es peinado.',
        },
      },
      {
        heading: { en: 'Growing It Out: Stages, Itch and Honest Patchiness', es: 'Dejarla crecer: etapas, picazón y zonas despobladas, con honestidad' },
        body: {
          en: 'Every beard grow-out has the same plot: two clean weeks, then the itch phase — new growth curling back into the skin — which is where most beards get shaved off in frustration. Push through it with washing, conditioning and brushing; it passes as the hair gains length and softens. While it grows, resist shaping it daily at home; let it gain bulk first, and let the barber set the lines once there is something to shape. And the honest part about patchy spots: styling and shaping can work with what grows — brushing neighboring hair over a thin spot, choosing a length and shape that flatter your pattern — but no routine creates hair where none grows. A good barber will build the best beard your growth allows and tell you straight if a style is not in your hair.',
          es: 'Todo crecimiento de barba tiene la misma trama: dos semanas limpias y luego la fase de picazón — el vello nuevo curvándose contra la piel — que es donde la mayoría de las barbas se afeitan por frustración. Supérala con lavado, acondicionador y cepillado; pasa cuando el vello gana largo y se suaviza. Mientras crece, resiste la tentación de formarla a diario en casa; déjala ganar volumen primero y deja que el barbero fije las líneas cuando haya algo que formar. Y la parte honesta sobre las zonas despobladas: el peinado y el formado pueden trabajar con lo que crece — cepillar el vello vecino sobre una zona delgada, elegir un largo y una forma que favorezcan tu patrón — pero ninguna rutina crea vello donde no crece. Un buen barbero construirá la mejor barba que tu crecimiento permita y te dirá de frente si un estilo no está en tu vello.',
        },
      },
      {
        heading: { en: 'Oils, Balms and the Barber’s Anchor', es: 'Aceites, bálsamos y el ancla del barbero' },
        body: {
          en: 'Beard oil has one job: conditioning — softening the hair and moisturizing the skin underneath, worked in on a slightly damp beard, down to the skin first and then through the hair. Let us be plain, because the internet is not: oil does not grow hair, and neither does balm. Balm adds light hold and shape on top of oil for longer beards; a brush or comb distributes everything and trains the direction daily. Home care keeps a beard healthy between visits — the shape itself is the chair’s work: our Beard Trim and Beard Shaping & Detailing services set the cheek lines, the neckline and the architecture every few weeks, and a hot towel shave cleans up what home razors rough up. Keep the home routine daily and the shaping on schedule, and the beard always looks deliberate. Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'El aceite de barba tiene un solo trabajo: acondicionar — suavizar el vello e hidratar la piel debajo — aplicado sobre la barba ligeramente húmeda, primero hasta la piel y luego a través del vello. Seamos claros, porque internet no lo es: el aceite no hace crecer el vello, y el bálsamo tampoco. El bálsamo aporta fijación ligera y forma sobre el aceite en barbas más largas; un cepillo o peine distribuye todo y entrena la dirección a diario. El cuidado en casa mantiene la barba sana entre visitas; la forma en sí es trabajo de la silla: nuestros servicios de arreglo de barba y de formado y detalle de barba fijan las líneas de las mejillas, la línea del cuello y la arquitectura cada pocas semanas, y un afeitado con toalla caliente limpia lo que las navajas caseras ásperan. Mantén la rutina diaria en casa y el formado en calendario, y la barba siempre se verá intencional. Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
        },
      },
    ],
  },
  {
    _id: 'post-21',
    slug: 'blog/are-beards-attractive',
    image: '/images/blog-21-beards-attractive.webp',
    imageAlt: {
      en: 'Client with a well-kept, shaped beard at New Barbershop in Orlando',
      es: 'Cliente con una barba cuidada y formada en New Barbershop en Orlando',
    },
    locales: {
      en: {
        title: 'Are Beards Attractive? What the Research Says — and Why Upkeep Decides It',
        seoTitle: 'Are Beards Attractive? What the Research Says',
        metaDescription:
          'Are beards attractive? What research finds about maturity, masculinity and status — and why upkeep, shaping and clean lines decide it. Orlando barbers. Call (407) 470-4846.',
        intro:
          'It is the question half our beard clients are quietly asking when they sit down: are beards actually attractive, or is that just something bearded men tell each other? Researchers have genuinely studied this one — and their answer is more interesting than a yes or a no. What the studies keep finding is that a beard changes how a man is read. Whether that reading works for you depends on what you do with it.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: '¿Son atractivas las barbas? Lo que dice la investigación — y por qué el cuidado lo decide',
        seoTitle: '¿Son atractivas las barbas? Lo que dice la ciencia',
        metaDescription:
          '¿Son atractivas las barbas? Lo que encuentra la investigación sobre madurez y presencia, y por qué el cuidado decide. Llama al (407) 470-4846.',
        intro:
          'Es la pregunta que la mitad de nuestros clientes de barba se hace en silencio al sentarse: ¿las barbas son atractivas de verdad, o es algo que los hombres con barba se dicen entre ellos? Los investigadores sí han estudiado esto, y su respuesta es más interesante que un sí o un no. Lo que los estudios encuentran una y otra vez es que una barba cambia cómo se lee a un hombre. Que esa lectura juegue a tu favor depende de lo que hagas con ella.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'What the Studies Actually Find', es: 'Lo que los estudios encuentran en realidad' },
        body: {
          en: 'Across a run of published studies where people rate photographs of the same men clean-shaven and bearded, a pattern repeats: bearded faces are consistently read as older and more mature, more masculine, and higher in social status — the words raters reach for are things like “confident,” “capable” and “established.” Heavier, fuller beards tend to push those particular readings the furthest. In plain barbershop terms: a beard adds presence. It makes a young face look seasoned and a professional look like he has been one for a while. That is a real effect, measured with photographs and rating scales — not a legend beards tell about themselves.',
          es: 'En una serie de estudios publicados donde las personas califican fotografías de los mismos hombres afeitados y con barba, un patrón se repite: los rostros con barba se leen consistentemente como mayores y más maduros, más masculinos y de mayor estatus social; las palabras que los evaluadores buscan son cosas como “seguro”, “capaz” y “establecido”. Las barbas más pobladas y completas tienden a llevar esas lecturas más lejos. En términos de barbería: una barba añade presencia. Hace que un rostro joven se vea curtido y que un profesional parezca llevar tiempo siéndolo. Es un efecto real, medido con fotografías y escalas de calificación, no una leyenda que las barbas cuentan sobre sí mismas.',
        },
      },
      {
        heading: { en: 'The Honest Nuance', es: 'El matiz honesto' },
        body: {
          en: 'Now the part the headlines skip. The effect is not a law: it shifts with beard length — many raters put the sweet spot at a kept, medium beard rather than the wildest growth — and it shifts with the person, the face and the context; a boardroom, a first date and a job site do not read the same beard the same way. And one finding shows up everywhere, in the research and in our mirrors: condition beats coverage. An unkempt beard — patchy lines, a wandering neckline, dry and unbrushed — reads the opposite of mature and capable; it reads neglected. The studies rate beards as a category; the world rates your beard, in the state you keep it in.',
          es: 'Ahora la parte que los titulares se saltan. El efecto no es una ley: cambia con el largo de la barba — muchos evaluadores ponen el punto ideal en una barba cuidada y media, no en el crecimiento más salvaje — y cambia con la persona, el rostro y el contexto; una sala de juntas, una primera cita y una obra no leen la misma barba de la misma manera. Y un hallazgo aparece en todas partes, en la investigación y en nuestros espejos: el estado le gana a la cobertura. Una barba descuidada — líneas desparejas, una línea de cuello errante, seca y sin cepillar — se lee como lo opuesto de maduro y capaz: se lee abandonada. Los estudios califican las barbas como categoría; el mundo califica tu barba, en el estado en que la mantienes.',
        },
      },
      {
        heading: { en: 'The Barber’s Part: Upkeep Decides It', es: 'La parte del barbero: el mantenimiento lo decide' },
        body: {
          en: 'So the research hands you a lever — maturity, masculinity, presence — and upkeep decides which way it moves. Shaping gives the beard architecture instead of accident; clean cheek lines and a deliberate neckline are what separate “grew a beard” from “wears a beard”; and conditioning keeps it looking like hair, not wire — our Beard Care at Home post covers the sink routine in full. In the chair, our Beard Trim and Beard Shaping & Detailing services do the geometry every few weeks. No barber can promise a beard will change your luck — but a kept beard is the version of you the studies were describing. Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Así que la investigación te entrega una palanca — madurez, masculinidad, presencia — y el mantenimiento decide hacia dónde se mueve. El formado le da a la barba arquitectura en vez de accidente; unas líneas de mejilla limpias y una línea de cuello intencional son lo que separa “se dejó la barba” de “lleva una barba”; y el acondicionamiento hace que se vea como cabello y no como alambre: nuestra publicación sobre el cuidado de la barba en casa cubre la rutina del lavabo completa. En la silla, nuestros servicios de arreglo de barba y de formado y detalle de barba hacen la geometría cada pocas semanas. Ningún barbero puede prometer que una barba cambiará tu suerte, pero una barba cuidada es la versión de ti que los estudios describían. Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
        },
      },
    ],
  },
  {
    _id: 'post-22',
    slug: 'blog/wave-haircut-technique',
    image: '/images/blog-22-wave-cut.webp',
    imageAlt: {
      en: 'Client with a short, with-the-grain cut — the barber’s canvas for 360 waves',
      es: 'Cliente con un corte corto a favor del grano: el lienzo del barbero para las 360 waves',
    },
    locales: {
      en: {
        title: 'The Wave Cut, Done Right: Grain, Guards and the Wolf — From the Barber’s Side of the Chair',
        seoTitle: 'Wave Haircut Technique: Grain, Guards and the Wolf',
        metaDescription:
          'Wave haircut technique from the barber’s side of the chair — grain mapping, guard choice, crown protection and wolf-cycle cuts in Orlando. Call (407) 470-4846.',
        intro:
          'Our wave-3 routine post covered your half of the work — the brush, the durag, the wolfing care at home. This post is the other half: what a barber who cuts waves actually does in the chair, and why two men on the same home routine get different results from different barbers. A wave cut is a technique, and it starts before the clippers ever turn on.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'El corte para waves, bien hecho: grano, guías y wolfing — desde la silla del barbero',
        seoTitle: 'Técnica del corte para waves: grano, guías y wolfing',
        metaDescription:
          'La técnica del corte waves desde la silla del barbero: mapa del grano, elección de guías y protección de la corona. Llama al (407) 470-4846.',
        intro:
          'Nuestra publicación de la ola 3 sobre la rutina cubrió tu mitad del trabajo: el cepillo, el durag, el cuidado del wolfing en casa. Esta publicación es la otra mitad: lo que un barbero que corta waves hace en realidad en la silla, y por qué dos hombres con la misma rutina casera obtienen resultados distintos con barberos distintos. Un corte para waves es una técnica, y empieza antes de que la máquina se encienda.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'First, the Barber Reads the Pattern', es: 'Primero, el barbero lee el patrón' },
        body: {
          en: 'A wave cut follows a map that is already on your head: the crown, where the pattern spirals from, and the grain direction on every panel — front, sides, back — because hair does not grow in one direction and the cut has to run with each panel’s flow, the same directions you brush. A barber who cuts waves studies that map dry, before water or product, finds your crown’s center and your weak spots (every waver has one panel that lags), and plans the pass directions from it. Skip the reading and the cut fights the pattern for the next month.',
          es: 'Un corte para waves sigue un mapa que ya está en tu cabeza: la coronilla, desde donde el patrón gira en espiral, y la dirección del grano en cada panel — frente, lados, parte trasera — porque el cabello no crece en una sola dirección y el corte tiene que correr con el flujo de cada panel, las mismas direcciones en que te cepillas. Un barbero que corta waves estudia ese mapa en seco, antes del agua o el producto, encuentra el centro de tu coronilla y tus zonas débiles (todo waver tiene un panel que se atrasa) y planifica las direcciones de pasada a partir de ahí. Si se salta la lectura, el corte pelea con el patrón durante el próximo mes.',
        },
      },
      {
        heading: { en: 'Guards Are a Stage Decision', es: 'Las guías son una decisión de etapa' },
        body: {
          en: 'The guard is chosen for where you are in the cycle, not by habit. Setting or maintaining a pattern: a #1.5 to #2, cut with the grain — against the grain at a low guard can scalp the pattern and erase weeks of training in one pass, so a careful barber simply does not do it. Mid-wolf trims go higher, taking off just enough to keep the wolf orderly without touching the depth you are building. And the reveal cut after a wolf surprises first-timers: it is cut higher than the wolf started, because the length that trained the depth is not the length that shows it. The crown gets protected throughout — it is thinned last and least, because a scalped crown cannot hold a spiral.',
          es: 'La guía se elige según el momento del ciclo en que estás, no por costumbre. Para fijar o mantener un patrón: una #1.5 a #2, cortada a favor del grano; ir contra el grano con una guía baja puede arrasar el patrón y borrar semanas de entrenamiento en una sola pasada, así que un barbero cuidadoso simplemente no lo hace. Los recortes a mitad del wolf van más altos, quitando solo lo necesario para mantener el wolf ordenado sin tocar la profundidad que estás construyendo. Y el corte de revelación después de un wolf sorprende a los primerizos: se corta más alto de lo que empezó el wolf, porque el largo que entrenó la profundidad no es el largo que la muestra. La coronilla se protege durante todo el proceso: se rebaja al final y lo menos posible, porque una coronilla arrasada no puede sostener una espiral.',
        },
      },
      {
        heading: { en: 'Two Kinds of Wolf Visits — and the Same Hands', es: 'Dos tipos de visita durante el wolf — y las mismas manos' },
        body: {
          en: 'During a wolf, most of your appointments should be edges-only: a razor line-up that keeps the hairline and neckline deliberate while the top stays untouched — that visit is part of our Waves Styling & Maintenance service, along with the reveal cut that ends the wolf. What makes the whole system compound is consistency: the same barber remembers your guard, your crown, your lagging panel and exactly how your last cut grew in. Every new pair of hands restarts that learning curve. Pick a barber who cuts waves, then let the same hands keep the pattern. Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Durante un wolf, la mayoría de tus citas deberían ser solo de bordes: un perfilado a navaja que mantiene intencionales la línea del cabello y la nuca mientras la parte superior queda intacta; esa visita es parte de nuestro servicio de peinado y mantenimiento de waves, junto con el corte de revelación que termina el wolf. Lo que hace que todo el sistema se acumule es la consistencia: el mismo barbero recuerda tu guía, tu coronilla, tu panel atrasado y exactamente cómo creció tu último corte. Cada par de manos nuevo reinicia esa curva de aprendizaje. Elige un barbero que corte waves y deja que las mismas manos mantengan el patrón. Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
        },
      },
    ],
  },
  {
    _id: 'post-23',
    slug: 'blog/line-up-haircut',
    image: '/images/blog-23-line-up.webp',
    imageAlt: {
      en: 'Barber finishing a razor line-up — the edge work that frames a cut',
      es: 'Barbero terminando un perfilado a navaja: el trabajo de bordes que enmarca un corte',
    },
    locales: {
      en: {
        title: 'The Line-Up, Explained: Edge-Up, Shape-Up, and Keeping Your Hairline Where It Grows',
        seoTitle: 'Line-Up Haircut: What It Is and How Long It Lasts',
        metaDescription:
          'The line-up haircut explained — line-up, edge-up and shape-up are one service; how long it stays crisp, the razor finish, and protecting your natural hairline. Orlando. Call (407) 470-4846.',
        intro:
          'Order it in Orlando and it is a line-up; in New York it is an edge-up; in plenty of Southern shops it is a shape-up. Three names, one service — and the one most likely to be misunderstood, rushed, or done in a way that costs you hairline you never get back. Here is the full explainer, including the part nobody tells you.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'El delineado, explicado: edge-up, shape-up y cómo mantener tu línea donde nace',
        seoTitle: 'Delineado (line-up): qué es y cuánto dura',
        metaDescription:
          'El delineado explicado: line-up, edge-up y shape-up son el mismo servicio; cuánto dura definido y cómo cuidar tu línea natural. Llama al (407) 470-4846.',
        intro:
          'Pídelo en Orlando y es un line-up; en Nueva York es un edge-up; en muchas barberías del sur es un shape-up. Tres nombres, un solo servicio — y el que tiene más probabilidades de ser malentendido, hecho a la carrera o ejecutado de una forma que te cuesta línea de cabello que nunca recuperas. Aquí está la explicación completa, incluyendo la parte que nadie te cuenta.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'What a Line-Up Actually Is', es: 'Qué es un line-up en realidad' },
        body: {
          en: 'A line-up defines the frame: the front hairline, the temples, the sideburns and the neckline, sharpened with trimmer and straight razor. It is its own service — our Razor Line-Up on the Services page — not a haircut: no length comes off the top, and plenty of clients get one between full cuts to reset the frame while the cut itself still has life. The finish matters, too: a trimmer line is clean, but a razor finish reads harder and crisper, because the razor takes the edge down to skin with no stubble shadow. Neckline shape is a choice within the service — blocked, rounded or tapered — and a good barber asks which you wear before defaulting.',
          es: 'Un line-up define el marco: la línea frontal del cabello, las sienes, las patillas y la línea de la nuca, afilados con recortadora y navaja recta. Es un servicio propio — nuestro perfilado a navaja en la página de Servicios — no un corte: no se quita largo de la parte superior, y muchos clientes se lo hacen entre cortes completos para reiniciar el marco mientras el corte todavía tiene vida. El acabado también importa: una línea con recortadora es limpia, pero un acabado a navaja se lee más duro y definido, porque la navaja lleva el borde hasta la piel sin sombra de vello. La forma de la nuca es una elección dentro del servicio — recta (blocked), redondeada o degradada (tapered) — y un buen barbero pregunta cuál llevas antes de asumir.',
        },
      },
      {
        heading: { en: 'The Honest Lifespan', es: 'La vida útil, con honestidad' },
        body: {
          en: 'A line-up is at its crispest for the first several days. Inside a week, new growth softens the edges — that is not a bad line-up, that is hair doing what hair does at about half an inch a month. The standard rhythm is a refresh every one to two weeks between full cuts, which is why the line-up is the most-booked in-between service in the shop: ten-odd minutes that make a two-week-old cut read fresh again. Anyone who promises you a line-up that stays razor-crisp for a month is promising you something biology does not sell.',
          es: 'Un line-up está en su punto más definido durante los primeros días. Dentro de una semana, el crecimiento nuevo suaviza los bordes; eso no es un mal line-up, es el cabello haciendo lo que hace a razón de media pulgada al mes. El ritmo estándar es un retoque cada una o dos semanas entre cortes completos, y por eso el line-up es el servicio intermedio más reservado de la barbería: unos diez minutos que hacen que un corte de dos semanas se lea fresco otra vez. Quien te prometa un line-up que se mantiene definido a navaja por un mes te está prometiendo algo que la biología no vende.',
        },
      },
      {
        heading: { en: 'Keeping Your Hairline Where It Grows', es: 'Mantener tu línea de cabello donde crece' },
        body: {
          en: 'Here is the differentiator, and it matters more than the razor: your natural hairline is not ruler-straight. It has small irregularities, a widow’s peak here, a softer corner there. A barber who forces it geometrically straight has to cut into real hairline to do it — and doing that every two weeks migrates the line backward, cut by cut, until the “clean” look has cost you hairline that does not grow back on schedule. The craftsman’s rule is the opposite: line me up where it grows, do not take it back. We line up the hairline you have — sharpened, cleaned of the fuzz beyond it, never relocated. If a barber starts pushing your line back for sharpness, that is the sentence to say. It is your hairline; the razor works for it, not the other way around.',
          es: 'Aquí está el diferenciador, y importa más que la navaja: tu línea natural de cabello no es recta como una regla. Tiene pequeñas irregularidades: un pico de viuda aquí, una esquina más suave allá. Un barbero que la fuerza geométricamente recta tiene que cortar dentro de la línea real para lograrlo, y hacer eso cada dos semanas migra la línea hacia atrás, corte tras corte, hasta que el look “limpio” te ha costado línea de cabello que no vuelve a crecer en calendario. La regla del artesano es la contraria: perfílame donde crece, no la lleves hacia atrás. Nosotros perfilamos la línea que tienes: afilada, limpia de la pelusa más allá de ella, nunca reubicada. Si un barbero empieza a empujar tu línea hacia atrás en nombre de la definición, esa es la frase que debes decir. Es tu línea de cabello; la navaja trabaja para ella, no al revés.',
        },
      },
    ],
  },
  {
    _id: 'post-24',
    slug: 'blog/skin-fade-textured-hair',
    image: '/images/blog-24-textured-skin-fade.webp',
    imageAlt: {
      en: 'Client with a high skin fade on textured hair at New Barbershop in Orlando',
      es: 'Cliente con un degradado alto al ras en cabello texturizado en New Barbershop en Orlando',
    },
    locales: {
      en: {
        title: 'Skin Fades on Textured Hair Are a Different Craft — Here’s What Your Barber Is Actually Doing',
        seoTitle: 'Skin Fade on Textured Hair: The Technique, Explained',
        metaDescription:
          'A skin fade on textured hair is a different craft — shrinkage, dry cutting, guideline and lever work, shadow vs skin finish. Orlando barbers explain. Call (407) 470-4846.',
        intro:
          'A skin fade is a skin fade — until the hair is curly or coily, and then nearly every variable changes: how long the hair really is, how the blend behaves, how many passes it takes, where the guidelines go. This is not the style-choice question (our Fade vs Taper post owns that). This is execution: what your barber is actually doing differently on textured hair, and why it takes the time it takes.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Los degradados al ras en cabello texturizado son otro oficio — esto es lo que tu barbero hace en realidad',
        seoTitle: 'Degradado al ras en cabello texturizado: la técnica',
        metaDescription:
          'El degradado al ras en cabello texturizado es otro oficio: encogimiento, corte en seco y acabado sombra o al ras. Llama al (407) 470-4846.',
        intro:
          'Un degradado al ras es un degradado al ras — hasta que el cabello es rizado o afro, y entonces casi todas las variables cambian: cuánto mide el cabello en realidad, cómo se comporta la mezcla, cuántas pasadas toma, dónde van las guías. Esta no es la pregunta de elección de estilo (nuestra publicación Fade vs Taper se encarga de eso). Esto es ejecución: lo que tu barbero hace en realidad de forma distinta en el cabello texturizado, y por qué toma el tiempo que toma.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'Shrinkage Runs the Whole Job', es: 'La contracción manda en todo el trabajo' },
        body: {
          en: 'Coily hair shrinks — the tightest coils can show a fraction of their true length once dry — so a fade on textured hair is judged and cut dry, in its real state, not wet and stretched into a lie. Texture also softens transitions: the curl diffuses the edge between lengths, which a skilled barber uses as a blending ally instead of fighting it — and which is why the work takes more passes, checking the blend from distance and in different light as it builds. Rush those passes and the fade shows steps; respect them and the gradient melts.',
          es: 'El cabello afro se contrae: los rizos más cerrados pueden mostrar una fracción de su largo real una vez secos, así que un degradado en cabello texturizado se juzga y se corta en seco, en su estado real, no mojado y estirado en una mentira. La textura también suaviza las transiciones: el rizo difumina el borde entre largos, y un barbero hábil lo usa como aliado de la mezcla en vez de pelear contra él; por eso el trabajo toma más pasadas, revisando la mezcla desde lejos y con distinta luz mientras se construye. Si apuras esas pasadas, el degradado muestra escalones; si las respetas, el degradado se funde.',
        },
      },
      {
        heading: { en: 'Guidelines, Levers and the Shadow Choice', es: 'Guías, palancas y la elección del acabado sombra' },
        body: {
          en: 'Technique, translated: the first guideline is set lower than the fade’s final height, deliberately, to leave room to blend upward into it. The blend itself is built with lever work and half-guard steps — small, controlled increments instead of jumps between full guards — because textured hair punishes jumps with visible lines. Then comes a real choice your barber should offer: a true skin finish, taken all the way down, or a shadow fade that stops around a #0.5 to #1 — softer against sensitive scalps, gentler in the grow-out, and nearly as sharp in the mirror. Neither is the “right” answer; the right answer is the one matched to your skin and your calendar.',
          es: 'La técnica, traducida: la primera guía se fija más baja que la altura final del degradado, deliberadamente, para dejar espacio de mezclar hacia arriba hasta ella. La mezcla en sí se construye con trabajo de palanca y pasos de media guía — incrementos pequeños y controlados en vez de saltos entre guías completas — porque el cabello texturizado castiga los saltos con líneas visibles. Luego viene una elección real que tu barbero debería ofrecerte: un acabado al ras verdadero, llevado hasta abajo, o un degradado sombra (shadow fade) que se detiene alrededor de una #0.5 a #1: más suave con los cueros cabelludos sensibles, más amable al crecer y casi tan definido en el espejo. Ninguna es la respuesta “correcta”; la correcta es la que combina con tu piel y tu calendario.',
        },
      },
      {
        heading: { en: 'The Named Cuts — and the Right Photo to Show', es: 'Los cortes con nombre — y la foto correcta para mostrar' },
        body: {
          en: 'This audience asks in a specific vocabulary: the temp fade (Brooklyn fade) that cleans the temples and edges while the top keeps its length and pattern, the low taper that keeps a wave pattern safe, the high skin fade for maximum contrast. All of them live on our Services page under Fade Haircut and High Skin Fade. One practical tip that changes outcomes: show your barber a side-profile photo on hair like yours. A front shot on a different texture shows a silhouette; a profile on your own texture shows the blend, the guideline height and the finish — the actual decisions. Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Este público pide con un vocabulario específico: el temp fade (Brooklyn fade) que limpia las sienes y los bordes mientras la parte superior conserva su largo y su patrón, el taper bajo que mantiene seguro un patrón de waves, el degradado alto al ras para el máximo contraste. Todos viven en nuestra página de Servicios bajo Corte degradado y Degradado alto al ras. Un consejo práctico que cambia resultados: muéstrale a tu barbero una foto de perfil lateral en un cabello como el tuyo. Una foto de frente en otra textura muestra una silueta; un perfil en tu propia textura muestra la mezcla, la altura de la guía y el acabado: las decisiones reales. Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
        },
      },
    ],
  },
  {
    _id: 'post-25',
    slug: 'blog/orlando-textured-hair-barber',
    image: '/images/blog-25-find-your-barber.webp',
    imageAlt: {
      en: 'Inside New Barbershop 2 on South Orange Blossom Trail in Orlando',
      es: 'Interior de New Barbershop 2 sobre South Orange Blossom Trail en Orlando',
    },
    locales: {
      en: {
        title: 'New to Orlando — or Just Done Searching? How to Find a Barber Who Actually Cuts Your Hair',
        seoTitle: 'Finding an Orlando Textured Hair Barber: A Vetting Guide',
        metaDescription:
          'Searching for an Orlando textured hair barber? How to vet a shop — portfolio on your texture, the right questions, the trial cut. Two shops on the Trail. Call (407) 470-4846.',
        intro:
          'Every man with textured hair who moves to a new city knows this search, and knows it is not the same search everyone else runs. The question is not “who cuts hair well?” — it is “who can cut MY hair?” Grain, shrinkage and pattern work make textured hair a specialty, and a shop that is excellent on straight hair can still be the wrong chair. Here is how to vet one before you sit in it.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: '¿Nuevo en Orlando — o ya cansado de buscar? Cómo encontrar un barbero que sí sepa cortar tu cabello',
        seoTitle: 'Barbero para cabello texturizado en Orlando: guía',
        metaDescription:
          '¿Buscas un barbero para cabello texturizado en Orlando? Cómo evaluar una barbería: portafolio en tu textura y el corte de prueba. Llama al (407) 470-4846.',
        intro:
          'Todo hombre con cabello texturizado que se muda a una ciudad nueva conoce esta búsqueda, y sabe que no es la misma que hacen los demás. La pregunta no es “¿quién corta bien el cabello?”, es “¿quién puede cortar MI cabello?”. El grano, la contracción y el trabajo de patrones hacen del cabello texturizado una especialidad, y una barbería excelente en cabello lacio puede seguir siendo la silla equivocada. Así se evalúa una antes de sentarte en ella.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'Vet the Portfolio — on Your Texture', es: 'Evalúa el portafolio — en tu textura' },
        body: {
          en: 'The single most reliable test: photos of finished work on hair like yours. Not just any sharp fade — your texture, your style family. If you wear waves, look for wave clients and line-ups that respect natural hairlines; if you wear designs, look for design work, because not every barber does it. Reviews help the same way when they name the style — “he keeps my waves right” tells you more than five stars alone. A shop confident in this work shows it; a shop that cannot show it is asking you to be the experiment.',
          es: 'La prueba más confiable: fotos de trabajos terminados en un cabello como el tuyo. No cualquier degradado definido: tu textura, tu familia de estilos. Si llevas waves, busca clientes con waves y perfilados que respeten las líneas naturales; si llevas diseños, busca trabajos de diseño, porque no todo barbero los hace. Las reseñas ayudan igual cuando nombran el estilo: “mantiene mis waves perfectas” te dice más que cinco estrellas solas. Una barbería segura de este trabajo lo muestra; una que no puede mostrarlo te está pidiendo que seas el experimento.',
        },
      },
      {
        heading: { en: 'Ask the Direct Questions', es: 'Haz las preguntas directas' },
        body: {
          en: 'Before the first cut, three questions separate specialists from generalists. Do you cut waves with the grain — and what guard do you start a first wave cut at? (You are listening for “with the grain” and a number in the #1.5–#2 range.) Do you do freestyle design work, and can I see some? And if braids are your thing: who here braids — at our shops, braiding is a Southchase service, done by our braider for men and women, and we will tell you that on the phone rather than seat you in the wrong shop. Straight answers, given easily, are the sign you found the right chair.',
          es: 'Antes del primer corte, tres preguntas separan a los especialistas de los generalistas. ¿Cortas las waves a favor del grano, y con qué guía empiezas un primer corte para waves? (Buscas escuchar “a favor del grano” y un número en el rango #1.5–#2.) ¿Haces diseños freestyle, y puedo ver algunos? Y si lo tuyo son las trenzas: ¿quién aquí hace trenzas? En nuestras barberías, el trenzado es un servicio de Southchase, hecho por nuestra trenzadora para hombres y mujeres, y te lo diremos por teléfono en vez de sentarte en el local equivocado. Respuestas directas, dadas con facilidad, son la señal de que encontraste la silla correcta.',
        },
      },
      {
        heading: { en: 'The Trial Cut — and What Comes After', es: 'El corte de prueba — y lo que sigue' },
        body: {
          en: 'Treat the first visit as a trial: a straightforward cut, honestly judged at week one and week two, tells you more than any review. Then give a good barber two or three cuts to learn your crown, your grain and how your hair grows in — because the consistency of one pair of hands is what turns good cuts into your cut, especially on waves and patterns. That is the invitation at our two shops: New Barbershop 1 in Southchase and New Barbershop 2 near Florida Mall, both on South Orange Blossom Trail, family-run since 2003 with over 1,400 five-star Google reviews, open seven days a week, walk-ins welcome, service in English and Spanish. Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Trata la primera visita como una prueba: un corte directo, juzgado con honestidad en la primera y la segunda semana, te dice más que cualquier reseña. Luego dale a un buen barbero dos o tres cortes para aprender tu coronilla, tu grano y cómo crece tu cabello, porque la consistencia de un solo par de manos es lo que convierte los buenos cortes en tu corte, especialmente en waves y patrones. Esa es la invitación en nuestras dos barberías: New Barbershop 1 en Southchase y New Barbershop 2 cerca de Florida Mall, ambas sobre South Orange Blossom Trail, familiares desde 2003 con más de 1,400 reseñas de cinco estrellas en Google, abiertas los siete días de la semana, clientes sin cita bienvenidos, atención en inglés y español. Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
        },
      },
    ],
  },
  {
    _id: 'post-26',
    slug: 'blog/freestyle-hair-designs',
    image: '/images/blog-26-hair-designs.webp',
    imageAlt: {
      en: 'Client with a freestyle design carved into a fade at New Barbershop in Orlando',
      es: 'Cliente con un diseño freestyle tallado en un degradado en New Barbershop en Orlando',
    },
    locales: {
      en: {
        title: 'Freestyle Hair Designs: Wearable Art, Cut Fresh',
        seoTitle: 'Freestyle Hair Designs: How They Work and How Long They Last',
        metaDescription:
          'Freestyle hair designs in Orlando — how barber art is drawn into a fade, how long a design stays sharp (about 1–2 weeks), redraws and kids’ designs. Call (407) 470-4846.',
        intro:
          'A hair design is the one service in the shop that is genuinely art: no stencil, no template — lines and shapes drawn freehand with a trimmer and razor into the fade, different on every head. It is also the service with the most honest clock in barbering. Here is how designs work, how to commission one well, and how long the art actually lasts.',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Diseños freestyle en el cabello: arte que se lleva puesto, recién hecho',
        seoTitle: 'Diseños freestyle en el cabello: cómo se hacen',
        metaDescription:
          'Diseños freestyle en Orlando: cómo se dibuja el arte en un degradado y cuánto dura definido (1–2 semanas). Llama al (407) 470-4846.',
        intro:
          'Un diseño en el cabello es el único servicio de la barbería que es arte de verdad: sin plantilla, sin molde — líneas y formas dibujadas a mano alzada con recortadora y navaja dentro del degradado, distintas en cada cabeza. También es el servicio con el reloj más honesto de la barbería. Así funcionan los diseños, cómo encargar uno bien y cuánto dura el arte en realidad.',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'The Fade Is the Canvas', es: 'El degradado es el lienzo' },
        body: {
          en: 'Designs are carved into short, faded sides, and the physics are simple: the shorter and smoother the canvas, the sharper the line — which is why designs read best on skin-level fades and on darker hair, where the contrast between hair and skin draws the picture for you. The barber sketches the design into the fade with the trimmer, then cleans and hardens the lines with the razor. It is why our Hair Designs service sits next to Fade Haircut and High Skin Fade on the Services page: the art and the canvas are one appointment. And a boundary worth knowing before you sit down — not every barber does design work. Check the portfolio first; a barber who designs will have the photos ready.',
          es: 'Los diseños se tallan en lados cortos y degradados, y la física es simple: mientras más corto y suave el lienzo, más definida la línea; por eso los diseños se leen mejor en degradados a nivel de piel y en cabello más oscuro, donde el contraste entre el cabello y la piel dibuja la imagen por ti. El barbero bosqueja el diseño dentro del degradado con la recortadora y luego limpia y endurece las líneas con la navaja. Por eso nuestro servicio de diseños en el cabello vive junto al corte degradado y al degradado alto al ras en la página de Servicios: el arte y el lienzo son una sola cita. Y un límite que vale la pena conocer antes de sentarte: no todo barbero hace diseños. Revisa el portafolio primero; un barbero que diseña tendrá las fotos listas.',
        },
      },
      {
        heading: { en: 'Commissioning One Well', es: 'Cómo encargar uno bien' },
        body: {
          en: 'Bring a photo — then expect your barber to adapt it, not photocopy it. Head shape, hairline and hair texture all change how a design lands, so a good barber redraws the reference for your head; a line-for-line promise is a red flag, not a selling point. Choose bold, simple lines over fine detail: thick lines read from across the room and survive the grow-out, while hairline-thin detail blurs first. Kids’ designs follow the same rules with simpler, bolder art — a line, a star, a number — and the same honesty about what a young hairline should carry.',
          es: 'Trae una foto — y espera que tu barbero la adapte, no que la fotocopie. La forma de la cabeza, la línea del cabello y la textura cambian cómo cae un diseño, así que un buen barbero redibuja la referencia para tu cabeza; una promesa línea por línea es una señal de alerta, no un argumento de venta. Elige líneas audaces y simples sobre el detalle fino: las líneas gruesas se leen desde el otro lado del cuarto y sobreviven al crecimiento, mientras el detalle fino como un cabello se difumina primero. Los diseños para niños siguen las mismas reglas con arte más simple y audaz — una línea, una estrella, un número — y la misma honestidad sobre lo que una línea de cabello joven debería llevar.',
        },
      },
      {
        heading: { en: 'The Honest Clock: About 1–2 Weeks', es: 'El reloj honesto: unas 1–2 semanas' },
        body: {
          en: 'A design is sharpest the day it is cut and stays sharp for about one to two weeks, before regrowth softens the lines — the same growth clock as every cut, which our how-often schedule post maps out by style. The good news inside that clock: a redraw along the original lines is quicker than the first sitting, because the map is already there, so plenty of clients refresh the same design two or three times before retiring it. Time yours backward from the event, the photos or the first day of school, and the art peaks when you want it to. Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'Un diseño está más definido el día en que se corta y se mantiene así por una o dos semanas, antes de que el crecimiento suavice las líneas: el mismo reloj de crecimiento de cada corte, que nuestra publicación sobre cada cuánto cortarse el cabello detalla por estilo. La buena noticia dentro de ese reloj: un redibujo sobre las líneas originales es más rápido que la primera sesión, porque el mapa ya está ahí, así que muchos clientes refrescan el mismo diseño dos o tres veces antes de retirarlo. Calcula el tuyo hacia atrás desde el evento, las fotos o el primer día de clases, y el arte llega a su punto máximo cuando tú quieres. Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
        },
      },
    ],
  },
  {
    _id: 'post-27',
    slug: 'blog/beard-shaping-sensitive-skin',
    image: '/images/blog-27-bump-prone-beard.webp',
    imageAlt: {
      en: 'Client with a shaped beard and clean lines at New Barbershop in Orlando',
      es: 'Cliente con una barba formada y líneas limpias en New Barbershop en Orlando',
    },
    locales: {
      en: {
        title: 'Beard Shaping for Bump-Prone Skin: What a Careful Barber Does Differently',
        seoTitle: 'Beard Shaping for Sensitive, Bump-Prone Skin',
        metaDescription:
          'Beard shaping for bump-prone skin — hot-towel prep, with-the-grain work, clipper finishes on the neck and honest length, from Orlando barbers. Call (407) 470-4846.',
        intro:
          'If your skin bumps up after shaving, you already know the dread: the closer the shave, the worse the week after. This post is the chair-side half of that problem — what a careful barber does differently when shaping and shaving bump-prone skin. (The home-care half — washing, oils, the daily routine — lives in our Beard Care at Home post; this one never leaves the chair.)',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: 'Perfilado de barba para piel propensa a granitos: lo que un barbero cuidadoso hace diferente',
        seoTitle: 'Formado de barba para piel sensible, propensa a bultos',
        metaDescription:
          'Formado de barba para piel propensa a bultos: preparación con toalla caliente, trabajo a favor del grano y acabado cuidadoso. Llama al (407) 470-4846.',
        intro:
          'Si tu piel se llena de granitos después de afeitarte, ya conoces el temor: mientras más al ras el afeitado, peor la semana siguiente. Esta publicación es la mitad del problema que ocurre en la silla: lo que un barbero cuidadoso hace distinto al formar y afeitar una piel propensa a los granitos. (La mitad del cuidado en casa — lavado, aceites, la rutina diaria — vive en nuestra publicación sobre el cuidado de la barba en casa; esta nunca sale de la silla.)',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'Why It Happens — Hair Geometry, Not Hygiene', es: 'Por qué pasa: geometría del vello, no higiene' },
        body: {
          en: 'The mechanism is simple and it is not your fault or your cleanliness: tightly curled beard hair, cut very close — or below the skin’s surface — can curl back into the skin as it regrows, and the skin reacts to the intrusion with a bump. The closer and more aggressive the cut, the more likely the curl-back, which is why the neck, where hair grows in swirls and gets shaved closest, is where it concentrates. Everything a careful barber does follows from that one paragraph: the goal stops being “as close as possible” and becomes “as clean as your skin allows.”',
          es: 'El mecanismo es simple y no es tu culpa ni tu limpieza: el vello de barba muy rizado, cortado muy al ras — o por debajo de la superficie de la piel — puede curvarse de vuelta hacia la piel al recrecer, y la piel reacciona a la intrusión con un granito. Mientras más cerrado y agresivo el corte, más probable el regreso del rizo, y por eso el cuello, donde el vello crece en remolinos y se afeita más al ras, es donde se concentra. Todo lo que hace un barbero cuidadoso sigue de ese párrafo: la meta deja de ser “lo más al ras posible” y pasa a ser “lo más limpio que tu piel permite”.',
        },
      },
      {
        heading: { en: 'What a Careful Barber Does Differently', es: 'Lo que un barbero cuidadoso hace distinto' },
        body: {
          en: 'Four technique choices, all visible from the chair. Hot-towel prep first: heat and moisture soften the beard hair so it cuts instead of tugging and snapping back. Work with the grain on the passes that matter, especially the neck — against-the-grain closeness is exactly what bump-prone skin is asking not to receive. On the neckline, a clipper or guarded finish instead of a skin-close razor pass where you are prone, trading a whisper of length for a week of calm skin. And shaping that respects the same logic: cheek and neck lines set where your skin tolerates them, as part of our Beard Shaping & Detailing and Beard Trim services — the architecture from our Services page, executed at your skin’s settings, not the template’s.',
          es: 'Cuatro decisiones de técnica, todas visibles desde la silla. Primero, preparación con toalla caliente: el calor y la humedad suavizan el vello de la barba para que se corte en vez de halar y rebotar. Trabajar a favor del grano en las pasadas que importan, especialmente el cuello: la cercanía contra el grano es justo lo que una piel propensa a granitos está pidiendo no recibir. En la línea del cuello, un acabado con máquina o con guía en vez de una pasada de navaja al ras donde eres propenso, cambiando un suspiro de largo por una semana de piel tranquila. Y un formado que respeta la misma lógica: líneas de mejilla y cuello fijadas donde tu piel las tolera, como parte de nuestros servicios de formado y detalle de barba y de arreglo de barba — la arquitectura de nuestra página de Servicios, ejecutada con los ajustes de tu piel, no los de una plantilla.',
        },
      },
      {
        heading: { en: 'Say It Before the Cape Goes On', es: 'Dilo antes de que te pongan la capa' },
        body: {
          en: 'The most useful sentence in this whole post is yours: “I bump easily — here, and here.” Tell your barber where before the work starts, and expect the plan to change around it: a hot towel shave with a bump-aware hand is a different service from a race to baby-smooth, and a good barber would rather leave a hint of length than send you home inflamed. One boundary we keep honestly: bumps that are painful, infected-looking, scarring, or simply not improving belong to a dermatologist, not a barber — we will shape around your skin all day, but we will not pretend a chair treats skin. Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'La frase más útil de toda esta publicación es tuya: “Me salen granitos fácil — aquí, y aquí”. Dile a tu barbero dónde antes de que empiece el trabajo, y espera que el plan cambie alrededor de eso: un afeitado con toalla caliente con una mano consciente de los granitos es un servicio distinto a una carrera hacia la suavidad total, y un buen barbero preferirá dejar un toque de largo antes que enviarte a casa inflamado. Un límite que mantenemos con honestidad: los granitos dolorosos, con aspecto infectado, que dejan cicatriz o que simplemente no mejoran le pertenecen a un dermatólogo, no a un barbero; formaremos alrededor de tu piel todo el día, pero no fingiremos que una silla trata la piel. Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
        },
      },
    ],
  },
  {
    _id: 'post-28',
    slug: 'blog/new-car-haircut',
    image: '/images/blog-28-new-ride.webp',
    imageAlt: {
      en: 'Client with a fresh skin fade at New Barbershop in Orlando — the finishing touch on new-car day',
      es: 'Cliente con un degradado al ras recién hecho en New Barbershop en Orlando: el toque final del día del auto nuevo',
    },
    locales: {
      en: {
        title: 'New Ride? New Cut — Finish the Upgrade',
        seoTitle: 'Fresh Cut After Buying a Car: Finish the Upgrade',
        metaDescription:
          'Just bought a car on Orange Blossom Trail? Finish the upgrade with a fresh cut — fade, line-up and beard shape, minutes from the dealerships. Walk-ins, open 7 days. Call (407) 470-4846.',
        intro:
          'There is a specific feeling that comes with signing the papers and getting handed the keys, and it has a look problem attached: you feel brand new, and the mirror in the visor says otherwise. This post is about the smallest, fastest part of new-car day — the fresh cut after buying a car, done on the same road where you bought it. (Already covered the waiting-around version? Our Orange Blossom Trail dealership post handles the service-wait and staff angles; this one is purely the buyer’s moment.)',
        closing:
          'Stop by either shop or call to book your chair. Find both locations and hours on our Contact page.',
      },
      es: {
        title: '¿Auto nuevo? Corte nuevo — completa el cambio',
        seoTitle: '¿Auto nuevo? Termina el cambio con un corte fresco',
        metaDescription:
          '¿Acabas de comprar un auto en Orange Blossom Trail? Termina el cambio con un corte fresco, a minutos de los concesionarios. Llama al (407) 470-4846.',
        intro:
          'Hay una sensación específica que llega al firmar los papeles y recibir las llaves, y trae un problema de imagen adjunto: te sientes nuevo, y el espejo de la visera dice otra cosa. Esta publicación trata de la parte más pequeña y rápida del día del auto nuevo: el corte de cabello nuevo después de comprar un auto, hecho sobre la misma calle donde lo compraste. (¿Ya viste la versión de la espera? Nuestra publicación sobre los concesionarios de Orange Blossom Trail cubre la espera del servicio y al personal; esta es puramente el momento del comprador.)',
        closing:
          'Pasa por cualquiera de las dos barberías o llama para reservar tu silla. Encuentra ambas ubicaciones y horarios en nuestra página de Contacto.',
      },
    },
    sections: [
      {
        heading: { en: 'From Test Drive to Fresh Fade', es: 'De la prueba de manejo al degradado fresco' },
        body: {
          en: 'A new car resets how you see yourself for about a week — the first commute feels different, the first fill-up feels like an occasion. It is the same psychology as any fresh start, just with a steering wheel: the upgrade is visible, so the man driving it wants to be visible to match. That is why the barbershop stop happens on the way home so often on this corridor. It is not vanity; it is finishing the job. The car got detailed before delivery. You should get the same courtesy.',
          es: 'Un auto nuevo reinicia cómo te ves durante una semana: el primer viaje al trabajo se siente distinto, la primera tanqueada se siente como una ocasión. Es la misma psicología de cualquier comienzo fresco, solo que con volante: la mejora es visible, así que el hombre que la maneja quiere verse a la altura. Por eso la parada en la barbería ocurre tan seguido de camino a casa en este corredor. No es vanidad; es terminar el trabajo. El auto fue detallado antes de la entrega. Tú mereces la misma cortesía.',
        },
      },
      {
        heading: { en: 'Match the Cut to the Moment', es: 'Combina el corte con el momento' },
        body: {
          en: 'New-car day has two photo sessions built in: the first drive, and the first pictures — yours, and the ones friends demand when you pull up. The cut that serves both is clean and deliberate rather than experimental: a fresh fade with a crisp razor line-up reads sharp in every one of those photos, and a beard trim or shape makes the whole face look as considered as the purchase. Save the brand-new style experiment for a quieter week (our New Look, New Chapter post makes that case); today is about the polished version of you, delivered in one sitting from the Fade Haircut, Razor Line-Up and Beard Shaping services on our Services page.',
          es: 'El día del auto nuevo trae dos sesiones de fotos incluidas: el primer manejo y las primeras fotos — las tuyas y las que los amigos exigen cuando llegas. El corte que sirve para ambas es limpio e intencional, no experimental: un degradado fresco con un perfilado a navaja definido se lee impecable en cada una de esas fotos, y un arreglo o formado de barba hace que todo el rostro se vea tan pensado como la compra. Guarda el experimento de estilo nuevo para una semana más tranquila (nuestra publicación Nuevo look, nuevo capítulo defiende ese caso); hoy se trata de la versión pulida de ti, entregada en una sola sesión con los servicios de corte degradado, perfilado a navaja y formado de barba de nuestra página de Servicios.',
        },
      },
      {
        heading: { en: 'Same Road, Same Day', es: 'La misma calle, el mismo día' },
        body: {
          en: 'The logistics are the whole point: both of our shops sit right on South Orange Blossom Trail, on the same corridor as the dealerships — New Barbershop 1 in Southchase and New Barbershop 2 near Florida Mall. So the route writes itself: drive out of the lot, drive in for the cut. No appointment needed — walk-ins are welcome, we are open seven days a week, and the Southchase shop runs 8 AM to 10:30 PM for the evening buyers. Keys in a new car, cut to match: that is the upgrade, finished. Call to book: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp is available at Southchase.',
          es: 'La logística es todo el punto: nuestras dos barberías están sobre South Orange Blossom Trail, en el mismo corredor que los concesionarios — New Barbershop 1 en Southchase y New Barbershop 2 cerca de Florida Mall. Así que la ruta se escribe sola: sales del lote manejando y entras por tu corte. No necesitas cita: los clientes sin cita son bienvenidos, abrimos los siete días de la semana y el local de Southchase funciona de 8 AM a 10:30 PM para los compradores de la tarde-noche. Llaves en un auto nuevo, corte a la altura: esa es la mejora, terminada. Llama para reservar: Southchase (407) 470-4846 · Florida Mall (407) 820-4541. WhatsApp está disponible en Southchase.',
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

// ——— Internal linking (pre-launch audit H3, owner-authorized 2026-11-16) ———
// Topic clusters for the related-posts block: every post belongs to
// exactly one cluster, and related posts are drawn ONLY from the same
// cluster, in canonical post order. Data-driven — edit the cluster
// lists here and every post page follows.
/** 480px card thumbnail variant of a post hero (audit M12). */
export function postThumb(post: Post): string {
  return post.image.replace(/\.webp$/, '-480.webp');
}

const CLUSTERS: string[][] = [
  // Fades & styles
  ['blog/expert-fades-orlando', 'blog/fade-vs-taper', 'blog/skin-fade-textured-hair', 'blog/line-up-haircut', 'blog/freestyle-hair-designs', 'blog/wave-haircut-technique'],
  // Braids, waves & textured hair
  ['blog/braids-orlando', 'blog/braids-aftercare', 'blog/360-waves-routine', 'blog/curly-hair-routine-men', 'blog/orlando-textured-hair-barber'],
  // Beard & grooming habits
  ['blog/beard-care-at-home', 'blog/are-beards-attractive', 'blog/beard-shaping-sensitive-skin', 'blog/men-grooming-habits'],
  // Hair care & routine
  ['blog/how-often-wash-hair-men', 'blog/best-hair-product-for-men', 'blog/how-often-haircut-men', 'blog/two-week-haircut-routine-professionals'],
  // Local & visits
  ['blog/haircut-near-florida-mall', 'blog/haircut-layover-orlando-airport', 'blog/haircut-orange-blossom-trail-car-shopping', 'blog/new-car-haircut', 'blog/holiday-haircuts-orlando'],
  // The shop & fresh starts
  ['blog/top-rated-barber-shop-orlando', 'blog/welcome-neighborhood-barbershop-orlando', 'blog/psychology-fresh-haircut', 'blog/haircut-new-start'],
];

export function relatedPosts(post: Post, count = 3): Post[] {
  const cluster = CLUSTERS.find((c) => c.includes(post.slug));
  if (!cluster) return [];
  return posts
    .filter((p) => p.slug !== post.slug && cluster.includes(p.slug))
    .slice(0, count);
}
