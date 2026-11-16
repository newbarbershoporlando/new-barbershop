// Sanity schema — faq (mirrors src/data/faqs.ts).
export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    { name: 'question', title: 'Question (localized)', type: 'localizedString' },
    { name: 'answer', title: 'Answer (localized)', type: 'localizedText' },
    {
      name: 'scope',
      title: 'Scope',
      type: 'string',
      options: { list: ['general', 'shop1', 'shop2'] },
    },
    { name: 'order', title: 'Order', type: 'number' },
    // Optional trailing link after the answer (integration addition —
    // used once: the general booking FAQ points to the Contact page).
    { name: 'ctaSlug', title: 'CTA link slug (optional)', type: 'string' },
    { name: 'ctaLabel', title: 'CTA link label (localized, optional)', type: 'localizedString' },
  ],
};
