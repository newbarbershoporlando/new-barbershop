// Sanity schema — location (mirrors src/data/locations.ts).
// Plain-object schema definitions (Sanity document shape) so they can be
// dropped into a Sanity Studio `schemaTypes` array at deploy time; wrap with
// defineType/defineField from 'sanity' when the live project is created.
export default {
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    { name: 'name', title: 'Shop name', type: 'string', validation: (r: any) => r.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'area', title: 'Area label (localized)', type: 'localizedString' },
    { name: 'street', title: 'Street address', type: 'string' },
    { name: 'city', title: 'City', type: 'string' },
    { name: 'state', title: 'State', type: 'string' },
    { name: 'zip', title: 'ZIP', type: 'string' },
    { name: 'phoneDisplay', title: 'Phone (display)', type: 'string' },
    { name: 'phoneHref', title: 'Phone (tel: link)', type: 'string' },
    { name: 'whatsapp', title: 'WhatsApp URL (Shop 1 only)', type: 'url' },
    { name: 'mapsUrl', title: 'Google Maps listing URL', type: 'url' },
    { name: 'geo', title: 'Coordinates (from Maps pin)', type: 'geopoint' },
    { name: 'rating', title: 'Google rating (display)', type: 'string' },
    { name: 'reviewCount', title: 'Google review count', type: 'number' },
    {
      name: 'hours',
      title: 'Hours (7 days, Sunday first)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', type: 'localizedString' },
            { name: 'opens', type: 'string' },
            { name: 'closes', type: 'string' },
            { name: 'display', type: 'localizedString' },
          ],
        },
      ],
    },
    { name: 'hoursSummary', title: 'Hours summary (localized)', type: 'localizedString' },
    { name: 'introHeading', title: 'Intro heading (localized)', type: 'localizedString' },
    { name: 'intro', title: 'Intro (localized text)', type: 'localizedText' },
  ],
};
