// Sanity schema — review (mirrors src/data/reviews.ts). Quotes are verbatim
// Google reviews; editors must not rewrite them.
export default {
  name: 'review',
  title: 'Review (curated, verbatim)',
  type: 'document',
  fields: [
    { name: 'author', title: 'Reviewer name (as on Google)', type: 'string' },
    { name: 'text', title: 'Quote (localized; verbatim per language)', type: 'localizedText' },
    {
      name: 'location',
      title: 'Shop',
      type: 'reference',
      to: [{ type: 'location' }],
    },
    { name: 'order', title: 'Order', type: 'number' },
  ],
};
