import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'greeting',
      title: 'Greeting',
      type: 'string',
      description: 'e.g., "Hello! I\'m"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'titles',
      title: 'Rotating Titles',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Job titles that rotate in the hero section',
      validation: Rule => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare(selection) {
      return {
        title: 'Hero Section',
        subtitle: selection.name,
      };
    },
  },
});
