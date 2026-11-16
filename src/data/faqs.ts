// Structured content — mirrors the Sanity `faq` schema (sanity/schemas/faq.ts).
// FINAL copy: Agent B's new-copy.md §1 (Spanish review pass applied, §7).
// Placement per build-spec.md §3.11/§4: location pages carry their shop's
// set — the braids question appears on Shop 1's page ONLY (§3.11/§4.6), so
// Shop 2's set ships without it (B's Shop 2 braids answer stays in
// new-copy.md). The Services-page general set reuses six of B's Q&As; its
// booking answer points to the Contact page instead of printing a number
// (no-call-buttons rule on that page).

import type { LocalizedString } from './locations';

export interface Faq {
  _id: string;
  scope: 'general' | 'shop1' | 'shop2';
  question: LocalizedString;
  answer: LocalizedString;
  /** Optional trailing link rendered after the answer (general booking → Contact). */
  cta?: { slug: string; label: LocalizedString };
}

const q = (
  _id: string,
  scope: Faq['scope'],
  qen: string,
  qes: string,
  aen: string,
  aes: string,
  cta?: Faq['cta'],
): Faq => ({ _id, scope, question: { en: qen, es: qes }, answer: { en: aen, es: aes }, cta });

export const faqs: Faq[] = [
  // ——— General (Services page) ———
  q('faq-g-walkins', 'general',
    'Do I need an appointment, or can I walk in?',
    '¿Necesito cita o puedo venir sin cita?',
    'Walk-ins are always welcome at both New Barbershop locations — just come by during opening hours. If you’d rather lock in your time, call ahead and book your chair.',
    'Siempre aceptamos clientes sin cita en ambas barberías de New Barbershop — solo ven durante nuestro horario de atención. Si prefieres apartar tu cita, llámanos antes.'),
  q('faq-g-book', 'general',
    'How do I book an appointment?',
    '¿Cómo reservo una cita?',
    'Booking is by phone — call the shop you want to visit and we’ll set your time. We don’t take bookings online.',
    'Las reservas son por teléfono — llama a la barbería que quieres visitar y agendamos tu cita. No aceptamos reservas en línea.',
    {
      slug: 'contact',
      label: {
        en: 'See our Contact page for both shops’ numbers',
        es: 'Consulta nuestra página de Contacto para ver los números de ambas barberías',
      },
    }),
  q('faq-g-kids', 'general',
    'Do you cut kids’ hair?',
    '¿Cortan el cabello a niños?',
    'Yes — we offer kids cuts and kids fades for children of all ages, plus father & son cuts so dads and kids can sit side by side.',
    'Sí — ofrecemos cortes y degradados para niños de todas las edades, además de cortes padre e hijo para que papás y niños se sienten lado a lado.'),
  q('faq-g-braids', 'general',
    'Do you offer braids?',
    '¿Hacen trenzas?',
    'Braids are done at our Shop 1 location near Kissimmee, by our braiding specialist. Call Shop 1 at (407) 470-4846 to book your braiding appointment.',
    'Las trenzas se hacen en Shop 1, cerca de Kissimmee, a cargo de nuestra especialista en trenzas. Llama a Shop 1 al (407) 470-4846 para apartar tu cita.'),
  q('faq-g-spanish', 'general',
    'Do you speak Spanish?',
    '¿Hablan español?',
    'Yes — we serve you in English y español, whichever you’re more comfortable with.',
    'Sí — te atendemos en inglés o español, como te sientas más cómodo.'),
  q('faq-g-prices', 'general',
    'How much does a haircut cost?',
    '¿Cuánto cuesta un corte de cabello?',
    'We don’t post our prices online — call either shop and we’ll gladly give you the price for the service you want.',
    'No publicamos nuestros precios en línea — llama a cualquiera de las dos barberías y con gusto te damos el precio del servicio que buscas.'),

  // ——— Shop 1 (new-copy.md §1A/1B, verbatim) ———
  q('faq-1-walkins', 'shop1',
    'Do I need an appointment, or can I walk in?',
    '¿Necesito cita o puedo venir sin cita?',
    'Walk-ins are always welcome at New Barbershop 1 — just come by during opening hours. If you’d rather lock in your time, call ahead at (407) 470-4846 and book your chair.',
    'En New Barbershop 1 siempre aceptamos clientes sin cita — solo ven durante nuestro horario de atención. Si prefieres apartar tu cita, llámanos antes al (407) 470-4846.'),
  q('faq-1-book', 'shop1',
    'How do I book an appointment?',
    '¿Cómo reservo una cita?',
    'Booking is by phone — call (407) 470-4846 and we’ll set your time. We don’t take bookings online, and you can also reach Shop 1 on WhatsApp.',
    'Las reservas son por teléfono — llama al (407) 470-4846 y agendamos tu cita. No aceptamos reservas en línea, y también puedes escribirnos por WhatsApp.'),
  q('faq-1-hours', 'shop1',
    'What are your hours?',
    '¿Cuál es el horario?',
    'We’re open every day of the week, 8:00 AM to 10:30 PM — early morning to late evening, seven days a week.',
    'Abrimos todos los días de la semana, de 8:00 AM a 10:30 PM — desde temprano en la mañana hasta tarde en la noche, los siete días.'),
  q('faq-1-where', 'shop1',
    'Where is New Barbershop 1 located?',
    '¿Dónde está New Barbershop 1?',
    'We’re at 9741 S Orange Blossom Trl, Orlando, FL 32837, on the south end of Orange Blossom Trail near Kissimmee. This is the original New Barbershop, family-run since 2003.',
    'Estamos en 9741 S Orange Blossom Trl, Orlando, FL 32837, en el extremo sur de Orange Blossom Trail, cerca de Kissimmee. Es el local original de New Barbershop, un negocio familiar desde 2003.'),
  q('faq-1-braids', 'shop1',
    'Do you offer braids?',
    '¿Hacen trenzas?',
    'Yes — braiding for men and women is a Shop 1 service, done by our braiding specialist. Call (407) 470-4846 to book your braiding appointment.',
    'Sí — las trenzas para hombres y mujeres son un servicio de Shop 1, a cargo de nuestra especialista en trenzas. Llama al (407) 470-4846 para apartar tu cita.'),
  q('faq-1-kids', 'shop1',
    'Do you cut kids’ hair?',
    '¿Cortan el cabello a niños?',
    'Yes — we offer kids cuts and kids fades for children of all ages, plus father & son cuts so dads and kids can sit side by side.',
    'Sí — ofrecemos cortes y degradados para niños de todas las edades, además de cortes padre e hijo para que papás y niños se sienten lado a lado.'),
  q('faq-1-spanish', 'shop1',
    'Do you speak Spanish?',
    '¿Hablan español?',
    'Yes — we serve you in English y español, whichever you’re more comfortable with.',
    'Sí — te atendemos en inglés o español, como te sientas más cómodo.'),
  q('faq-1-prices', 'shop1',
    'How much does a haircut cost?',
    '¿Cuánto cuesta un corte de cabello?',
    'We don’t post our prices online — call (407) 470-4846 and we’ll gladly give you the price for the service you want.',
    'No publicamos nuestros precios en línea — llama al (407) 470-4846 y con gusto te damos el precio del servicio que buscas.'),
  q('faq-1-first', 'shop1',
    'It’s my first visit. What should I expect?',
    'Es mi primera visita. ¿Qué debo esperar?',
    'Walk in or call ahead, then tell your barber the style you’re after — our barbers take the time to understand your preferences before the first cut. You’ll get the same care our regulars have trusted for over 20 years.',
    'Ven sin cita o llama antes, y cuéntale a tu barbero el estilo que buscas — nuestros barberos se toman el tiempo de entender tus preferencias antes del primer corte. Recibirás la misma atención que nuestros clientes de siempre han recibido durante más de 20 años.'),

  // ——— Shop 2 (new-copy.md §1C/1D, verbatim, minus the braids question) ———
  q('faq-2-walkins', 'shop2',
    'Do I need an appointment, or can I walk in?',
    '¿Necesito cita o puedo venir sin cita?',
    'Walk-ins are always welcome at New Barbershop 2 — come by any time during opening hours. To book ahead instead, call us at (407) 820-4541.',
    'En New Barbershop 2 siempre aceptamos clientes sin cita — ven en cualquier momento dentro del horario de atención. Si prefieres reservar antes, llámanos al (407) 820-4541.'),
  q('faq-2-book', 'shop2',
    'How do I book an appointment?',
    '¿Cómo reservo una cita?',
    'Booking is by phone — call (407) 820-4541 and we’ll set your time. We don’t take bookings online.',
    'Las reservas son por teléfono — llama al (407) 820-4541 y agendamos tu hora. No aceptamos reservas en línea.'),
  q('faq-2-hours', 'shop2',
    'What are your hours?',
    '¿Cuál es el horario?',
    'We’re open seven days a week: Tuesday to Saturday 9:00 AM to 10:00 PM, Monday 9:30 AM to 9:00 PM, and Sunday 9:30 AM to 8:30 PM.',
    'Abrimos los siete días de la semana: de martes a sábado de 9:00 AM a 10:00 PM, lunes de 9:30 AM a 9:00 PM y domingo de 9:30 AM a 8:30 PM.'),
  q('faq-2-where', 'shop2',
    'Where is New Barbershop 2 located?',
    '¿Dónde está New Barbershop 2?',
    'We’re at 6220 S Orange Blossom Trl, Orlando, FL 32809, near Florida Mall — about 3.7 miles north of our original Shop 1.',
    'Estamos en 6220 S Orange Blossom Trl, Orlando, FL 32809, cerca de Florida Mall — a unas 3.7 millas al norte de nuestro local original, Shop 1.'),
  q('faq-2-kids', 'shop2',
    'Do you cut kids’ hair?',
    '¿Cortan el cabello a niños?',
    'Yes — we’re a family-friendly shop with haircuts for all ages, from kids to seniors, including kids fades and father & son cuts.',
    'Sí — somos una barbería familiar con cortes para todas las edades, desde niños hasta adultos mayores, incluyendo degradados para niños y cortes padre e hijo.'),
  q('faq-2-spanish', 'shop2',
    'Do you speak Spanish?',
    '¿Hablan español?',
    'Yes — we serve you in English y español, whichever you’re more comfortable with.',
    'Sí — te atendemos en inglés o español, como te sientas más cómodo.'),
  q('faq-2-prices', 'shop2',
    'How much does a haircut cost?',
    '¿Cuánto cuesta un corte de cabello?',
    'We don’t post our prices online — call (407) 820-4541 and we’ll gladly give you the price for the service you want.',
    'No publicamos nuestros precios en línea — llama al (407) 820-4541 y con gusto te damos el precio del servicio que buscas.'),
  q('faq-2-first', 'shop2',
    'It’s my first visit. What should I expect?',
    'Es mi primera visita. ¿Qué debo esperar?',
    'Walk in or call ahead, and tell your barber the style you’re after — we’ll take it from there in a welcoming, relaxed atmosphere. It’s the same care behind our 174 Google reviews.',
    'Ven sin cita o llama antes, y cuéntale a tu barbero el estilo que buscas — nosotros nos encargamos del resto en un ambiente acogedor y relajado. Es la misma calidad de atención que reflejan nuestras 174 reseñas de Google.'),
];

export function faqsFor(scope: Faq['scope']): Faq[] {
  return faqs.filter((f) => f.scope === scope);
}
