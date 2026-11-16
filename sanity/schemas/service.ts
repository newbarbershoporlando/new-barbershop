// Sanity schemas — serviceCategory + service (mirror src/data/services.ts).
// NO price field exists, by owner directive.
export const serviceCategory = {
  name: 'serviceCategory',
  title: 'Service Category',
  type: 'document',
  fields: [
    { name: 'tileLabel', title: 'Tile label (localized)', type: 'localizedString' },
    { name: 'heading', title: 'Group heading (localized)', type: 'localizedString' },
    { name: 'benefit', title: 'One-line benefit (localized)', type: 'localizedString' },
    { name: 'slug', title: 'Anchor slug', type: 'slug' },
    { name: 'image', title: 'Tile image', type: 'image' },
    { name: 'imageAlt', title: 'Image alt (localized)', type: 'localizedString' },
    { name: 'order', title: 'Order', type: 'number' },
  ],
};

export const service = {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name (localized)', type: 'localizedString' },
    { name: 'description', title: 'Description (localized)', type: 'localizedString' },
    { name: 'slug', title: 'Slug', type: 'slug' },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'serviceCategory' }],
    },
    { name: 'order', title: 'Order within category', type: 'number' },
  ],
};
