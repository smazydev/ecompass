// ad.js

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'ad',
  title: 'Ad',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Ad Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Ad Description',
      type: 'text',
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Ad Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Text for screen readers (alt attribute).',
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' }, // Reference to the category schema
      description: 'Select the category for which this ad is relevant.',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
});
