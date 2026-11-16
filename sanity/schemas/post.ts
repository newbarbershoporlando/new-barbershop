// Sanity schema — post (mirrors src/data/posts.ts).
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title.en' } },
    { name: 'title', title: 'Title (localized)', type: 'localizedString' },
    { name: 'seoTitle', title: 'SEO title (localized)', type: 'localizedString' },
    { name: 'metaDescription', title: 'Meta description (localized)', type: 'localizedText' },
    { name: 'image', title: 'Featured image', type: 'image' },
    { name: 'imageAlt', title: 'Image alt (localized)', type: 'localizedString' },
    { name: 'intro', title: 'Intro (localized)', type: 'localizedText' },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'heading', type: 'localizedString' },
            { name: 'body', type: 'localizedText' },
          ],
        },
      ],
    },
    { name: 'closing', title: 'Closing line (localized)', type: 'localizedText' },
  ],
};
