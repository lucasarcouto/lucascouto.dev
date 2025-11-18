import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Platform Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule =>
        Rule.required().uri({
          scheme: ['http', 'https', 'mailto'],
        }),
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      description: 'Platform identifier for icon mapping (e.g., github, linkedin, twitter, email)',
      options: {
        list: [
          { title: 'GitHub', value: 'github' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Twitter', value: 'twitter' },
          { title: 'Email', value: 'email' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required().min(0),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'platform',
    },
  },
});
