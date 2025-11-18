import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'size',
      title: 'Display Size',
      type: 'number',
      description: 'Size for display (1, 2, or 3 - where 3 is largest)',
      options: {
        list: [
          { title: 'Small (1)', value: 1 },
          { title: 'Medium (2)', value: 2 },
          { title: 'Large (3)', value: 3 },
        ],
      },
      validation: Rule => Rule.required().min(1).max(3),
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
      size: 'size',
    },
    prepare(selection) {
      const { title, size } = selection;

      let sizeLabel: string;
      if (size === 3) {
        sizeLabel = 'Large';
      } else if (size === 2) {
        sizeLabel = 'Medium';
      } else {
        sizeLabel = 'Small';
      }

      return {
        title: title,
        subtitle: `Size: ${sizeLabel}`,
      };
    },
  },
});
