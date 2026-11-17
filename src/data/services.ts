// Structured content — mirrors the Sanity `serviceCategory` + `service` schemas
// (sanity/schemas/service.ts). NO prices exist in this data, by owner directive.
// FINAL copy: Agent B's new-copy.md §2 (enriched descriptions + category
// intros, Spanish review pass applied). Group order and membership are B's:
// Neck Shave & Cleanup sits in Finish & Details. Tile images: originally
// stock from assets-ready/manifest.md §4; replaced 2026-11-16 (owner phone
// pass) with the owner's real photos — cuts=haircut-03, beard=haircut-02,
// finish=haircut-01, family=haircut-10, braids=haircut-13 — and the alts
// below mirror the gallery alts for those same photos in pages.ts.

import type { LocalizedString } from './locations';
import { USE_SANITY, fetchSanity } from '../lib/sanity';

export interface ServiceCategory {
  _id: string;
  slug: string;
  tileLabel: LocalizedString;
  heading: LocalizedString;
  benefit: LocalizedString;
  image: string;
  imageAlt: LocalizedString;
}

export interface Service {
  _id: string;
  slug: string;
  category: string; // category _id
  name: LocalizedString;
  description: LocalizedString;
}

const localCategories: ServiceCategory[] = [
  {
    _id: 'cat-cuts',
    slug: 'haircuts-fades',
    tileLabel: { en: 'Cuts', es: 'Cortes' },
    heading: { en: 'Haircuts & Fades', es: 'Cortes y degradados' },
    benefit: {
      en: 'Classic cuts and clean blends, shaped to your hair and your style.',
      es: 'Cortes clásicos y degradados limpios, adaptados a tu cabello y a tu estilo.',
    },
    image: '/images/tile-cuts.webp',
    imageAlt: { en: 'Client with a finished high skin fade haircut and shaped beard at a barber shop in Orlando, FL', es: 'Cliente con un degradado alto al ras terminado y barba perfilada en una barbería en Orlando, FL' },
  },
  {
    _id: 'cat-beard',
    slug: 'beard-shave',
    tileLabel: { en: 'Beard & Shave', es: 'Barba y afeitado' },
    heading: { en: 'Beard & Shave', es: 'Barba y afeitado' },
    benefit: {
      en: 'Beard grooming and traditional shaves, finished with sharp, clean lines.',
      es: 'Arreglo de barba y afeitados tradicionales, con líneas definidas y limpias.',
    },
    image: '/images/tile-beard-flip.webp',
    imageAlt: { en: 'Finished haircut and beard combo with a crisp line-up, side view, at a barber shop in Orlando, FL', es: 'Combo de corte y barba terminado con delineado definido, vista de lado, en una barbería en Orlando, FL' },
  },
  {
    _id: 'cat-finish',
    slug: 'finish-details',
    tileLabel: { en: 'Finish & Details', es: 'Acabado y detalles' },
    heading: { en: 'Finish & Details', es: 'Acabado y detalles' },
    benefit: {
      en: 'The details that make a cut look finished — edges, neckline, brows and designs.',
      es: 'Los detalles que hacen que un corte se vea terminado — bordes, línea del cuello, cejas y diseños.',
    },
    image: '/images/tile-finish.webp',
    imageAlt: { en: 'Client with a high skin fade and a razor line-up at a barber shop in Orlando, FL', es: 'Cliente con un degradado alto al ras y un delineado con navaja en una barbería en Orlando, FL' },
  },
  {
    _id: 'cat-family',
    slug: 'kids-seniors-family',
    tileLabel: { en: 'Kids & Family', es: 'Niños y familia' },
    heading: { en: 'Kids, Seniors & Family', es: 'Niños, adultos mayores y familia' },
    benefit: {
      en: 'Patient, friendly cuts for every age in the family.',
      es: 'Cortes con paciencia y buen trato para todas las edades de la familia.',
    },
    image: '/images/tile-family.webp',
    // Real photo (owner phone pass 2026-11-16): haircut-10 — the same
    // young-client kids fade as the gallery's Kids Fade entry.
    imageAlt: { en: 'Young client with a textured fringe and a kids fade haircut at a barber shop in Orlando, FL', es: 'Cliente joven con flequillo texturizado y degradado para niños en una barbería en Orlando, FL' },
  },
  {
    _id: 'cat-braids',
    slug: 'braids-styling',
    tileLabel: { en: 'Braids & Styling', es: 'Trenzas y peinado' },
    heading: { en: 'Braids & Styling', es: 'Trenzas y peinado' },
    benefit: {
      en: 'Braiding for men and women, plus wave styling and care.',
      es: 'Trenzado para hombres y mujeres, además de peinado y cuidado de waves.',
    },
    // Real photo (owner phone pass 2026-11-16): haircut-13 — the same
    // cornrows photo as the gallery's Braids entry. (This tile previously
    // carried the Shop 1 interior banner: no braids photo existed in the
    // original backup, and a fade photo must never sit here.)
    image: '/images/tile-braids.webp',
    imageAlt: { en: 'Client with neat cornrow braids and faded sides at a barber shop in Orlando, FL', es: 'Cliente con trenzas cornrow impecables y laterales degradados en una barbería en Orlando, FL' },
  },
];

const s = (
  _id: string,
  slug: string,
  category: string,
  en: string,
  es: string,
  den: string,
  des: string,
): Service => ({
  _id,
  slug,
  category,
  name: { en, es },
  description: { en: den, es: des },
});

const localServices: Service[] = [
  // Haircuts & Fades
  s('svc-haircut', 'haircut', 'cat-cuts', 'Haircut', 'Corte de cabello',
    'Our classic precision cut, tailored to your style, your hair and how you wear it every day.',
    'Nuestro corte clásico de precisión, adaptado a tu estilo, a tu tipo de cabello y a cómo lo llevas a diario.'),
  s('svc-fade', 'fade-haircut', 'cat-cuts', 'Fade Haircut', 'Corte degradado (Fade)',
    'A clean, sharp fade blended seamlessly into your style — low, high, skin or taper, shaped to your head and hair.',
    'Un degradado limpio y definido, difuminado a la perfección para integrarse con tu estilo — bajo, alto, al ras o taper, adaptado a tu cabeza y tu cabello.'),
  s('svc-buzz', 'buzz-cut', 'cat-cuts', 'Buzz Cut', 'Corte rapado (Buzz Cut)',
    'A one-length clipper cut, clean and even all over — simple, sharp and easy to maintain.',
    'Corte con máquina de una sola longitud, limpio y uniforme en todo el cabello — sencillo, definido y fácil de mantener.'),
  // Beard & Shave
  s('svc-beard-trim', 'beard-trim', 'cat-beard', 'Beard Trim', 'Arreglo de barba',
    'Clean, shaped beard grooming that keeps your beard tidy and in proportion with your cut.',
    'Arreglo de barba limpio y con forma, que la mantiene impecable y en proporción con tu corte.'),
  s('svc-beard-shaping', 'beard-shaping-detailing', 'cat-beard', 'Beard Shaping & Detailing', 'Perfilado y detalle de barba',
    'Sculpted beard lines and detailed edging, for a beard with a defined shape and a crisp finish.',
    'Líneas de barba bien definidas y bordes detallados, para una barba con forma definida y un acabado limpio.'),
  s('svc-combo', 'haircut-beard-combo', 'cat-beard', 'Haircut & Beard Combo', 'Combo corte + barba',
    'The full service in one visit — a precision haircut plus complete beard grooming, finished together.',
    'El servicio completo en una sola visita — un corte de precisión más el arreglo completo de la barba, terminados juntos.'),
  s('svc-hot-towel', 'hot-towel-shave', 'cat-beard', 'Hot Towel Shave', 'Afeitado con toalla caliente',
    'Our traditional hot towel shave — hot towels soften the beard for a close, comfortable shave.',
    'Nuestro afeitado tradicional con toalla caliente — las toallas calientes suavizan la barba para un afeitado al ras y cómodo.'),
  s('svc-mustache', 'mustache-trim', 'cat-beard', 'Mustache Trim', 'Arreglo de bigote',
    'A precise mustache trim and shaping that keeps it neat and balanced with your beard.',
    'Recorte y perfilado preciso del bigote, para mantenerlo impecable y en equilibrio con tu barba.'),
  // Finish & Details
  s('svc-lineup', 'razor-line-up', 'cat-finish', 'Razor Line-Up', 'Delineado con navaja',
    'Sharp razor edging for the hairline and beard — the crisp outline that makes a cut look fresh.',
    'Bordes definidos con navaja para la línea del cabello y la barba — el contorno preciso que hace que un corte se vea recién hecho.'),
  s('svc-neck', 'neck-shave-cleanup', 'cat-finish', 'Neck Shave & Cleanup', 'Afeitado de cuello y retoque',
    'A razor-finished neckline and a cleanup between cuts, so your haircut keeps its shape longer.',
    'Cuello definido con navaja y un retoque entre cortes, para que tu corte mantenga su forma por más tiempo.'),
  s('svc-eyebrows', 'eyebrows', 'cat-finish', 'Eyebrows', 'Cejas',
    'Neat eyebrow shaping and cleanup for a tidy, natural look.',
    'Arreglo y limpieza de cejas para una apariencia impecable y natural.'),
  s('svc-designs', 'hair-designs', 'cat-finish', 'Hair Designs', 'Diseños en el cabello',
    'Custom designs and patterns, drawn and cut to your idea.',
    'Diseños y patrones personalizados, dibujados y cortados según tu idea.'),
  s('svc-wash', 'hair-wash-shampoo', 'cat-finish', 'Hair Wash & Shampoo', 'Lavado de cabello',
    'A shampoo wash and finish that leaves your hair clean, fresh and ready to style.',
    'Lavado con champú y acabado que deja tu cabello limpio, fresco y listo para peinar.'),
  // Kids, Seniors & Family
  s('svc-kids-cuts', 'kids-cuts', 'cat-family', 'Kids Cuts', 'Cortes para niños',
    'Haircuts for kids of all ages, with the patience young clients need.',
    'Cortes de cabello para niños de todas las edades, con la paciencia que los clientes jóvenes necesitan.'),
  s('svc-kids-fades', 'kids-fades', 'cat-family', 'Kids Fades', 'Degradados para niños',
    'Fade haircuts styled for kids — clean blends and sharp lines, just like the grown-up menu.',
    'Degradados con estilo para niños — difuminados limpios y líneas definidas, igual que los de los adultos.'),
  s('svc-senior', 'senior-cuts', 'cat-family', 'Senior Cuts', 'Cortes para adultos mayores',
    'Haircuts tailored for senior clients, in a relaxed chair and at an easy pace.',
    'Cortes adaptados para clientes mayores, en un ambiente tranquilo y sin prisas.'),
  s('svc-father-son', 'father-son-cuts', 'cat-family', 'Father & Son Cuts', 'Cortes padre e hijo',
    'Side-by-side cuts for dads and kids — one visit, two fresh cuts, together.',
    'Cortes lado a lado para papás y niños — una visita, dos cortes recién hechos, juntos.'),
  // Braids & Styling
  s('svc-braids', 'braids', 'cat-braids', 'Braids', 'Trenzas',
    'Braiding for men and women — clean parts, even tension and a style made to last, from cornrows to box braids and more.',
    'Trenzado para hombres y mujeres — secciones bien definidas, tensión uniforme y un estilo hecho para durar, desde cornrows hasta box braids y más.'),
  s('svc-waves', 'waves-styling-maintenance', 'cat-braids', 'Waves Styling & Maintenance', 'Estilo y mantenimiento de waves',
    'Wave styling, brushing and care — for a defined pattern that holds between visits.',
    'Peinado, cepillado y cuidado de waves — para un patrón definido que se mantiene entre visitas.'),
];

// ——— Sanity swap (wiring guide §6, Services query verbatim: categories
// with their services nested; the flat `services` export is the same
// docs un-nested in category/order sequence, exactly the local order) ———
const CATEGORIES_QUERY = `*[_type == "serviceCategory"] | order(order asc) {
  _id, "slug": slug.current, tileLabel, heading, benefit,
  "image": coalesce(image.asset->url, imagePath), imageAlt,
  "services": *[_type == "service" && category._ref == ^._id] | order(order asc) {
    _id, "slug": slug.current, "category": category._ref, name, description
  }
}`;

type CategoryWithServices = ServiceCategory & { services: Service[] };

const resolvedServices = await (async () => {
  if (!USE_SANITY) return { categories: localCategories, services: localServices };
  const fetched = await fetchSanity<CategoryWithServices[]>(
    'service categories (+ nested services)',
    CATEGORIES_QUERY,
  );
  if (fetched && fetched.length === localCategories.length) {
    const flat = fetched.flatMap((c) => c.services);
    if (flat.length === localServices.length) {
      return {
        categories: fetched.map(({ services: _nested, ...cat }) => cat),
        services: flat,
      };
    }
  }
  console.error(
    '[sanity] services: fetch missing/incomplete — using LOCAL services data',
  );
  return { categories: localCategories, services: localServices };
})();

export const categories: ServiceCategory[] = resolvedServices.categories;
export const services: Service[] = resolvedServices.services;

export function servicesByCategory(categoryId: string): Service[] {
  return services.filter((svc) => svc.category === categoryId);
}
