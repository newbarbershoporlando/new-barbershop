// Sanity client + data-layer switch (sanity-wiring.md §6).
//
// The site builds from the local src/data/ files by default. When
// PUBLIC_USE_SANITY=1, each data module fetches its content from Sanity
// at build time with the GROQ in sanity-wiring.md §6 (the queries return
// the exact local shapes). Any fetch failure is logged loudly and the
// module falls back to its local data — a Sanity outage can never take
// the build down, but it can never pass silently either.

import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const sanity = createClient({
  // The project ID is public by design (it ships in client code) and is
  // committed in .env.example; the fallback keeps flag-off local builds
  // working with no .env file present. Env always wins when set.
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? 'xbq1m2t8',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION ?? '2025-01-01',
  useCdn: true, // static build-time fetches; CDN is fine and fast
});

const builder = createImageUrlBuilder(sanity);
export const urlFor = (source: unknown) => builder.image(source as never);

/** The one flag that routes the data layer (wiring guide §6). */
export const USE_SANITY = import.meta.env.PUBLIC_USE_SANITY === '1';

/**
 * Build-time GROQ fetch with evidence + loud fallback semantics.
 * Returns the fetched data on success (and logs how much came back, so
 * the build log proves Sanity data was actually used); returns null on
 * any failure after logging the error — callers then keep local data.
 */
export async function fetchSanity<T>(
  label: string,
  query: string,
  params: Record<string, unknown> = {},
): Promise<T | null> {
  try {
    const data = await sanity.fetch<T>(query, params);
    const count = Array.isArray(data) ? data.length : data == null ? 0 : 1;
    console.log(
      `[sanity] ${label}: fetched ${count} doc(s) from Sanity ` +
        `(project ${import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? 'xbq1m2t8'}, ` +
        `dataset ${import.meta.env.PUBLIC_SANITY_DATASET ?? 'production'})`,
    );
    if (count === 0) {
      console.error(
        `[sanity] WARNING: ${label}: query returned 0 docs — caller falls back to local data`,
      );
      return null;
    }
    return data;
  } catch (err) {
    console.error(
      `[sanity] ERROR: ${label}: fetch failed (${err instanceof Error ? err.message : String(err)}) ` +
        `— falling back to local data`,
    );
    return null;
  }
}
