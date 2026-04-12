// sanity/schemaTypes/project.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Portfolio Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Project Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug (URL ID)',
            type: 'slug',
            description: 'This acts as your ID. Click "Generate" to create it from the title.',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        // Sort Order
        defineField({
            name: 'sortOrder',
            title: 'Sort Order',
            type: 'number',
            description: 'Enter a number to control the display order (e.g., 1 for first, 2 for second).',
        }),
        defineField({
            name: 'category',
            title: 'Category (Short)',
            type: 'string',
        }),
        defineField({
            name: 'description',
            type: 'array',
            of: [{ type: 'block' }], // 👈 Add this line to enable the Rich Text editor
        }),
        // 👇 NEW: Added Location
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        // 👇 NEW: Added Year
        defineField({
            name: 'year',
            title: 'Year',
            type: 'number',
        }),
        // 👇 NEW: Added Services
        defineField({
            name: 'services',
            title: 'Services Provided',
            type: 'string',
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image (For List Page)',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'images',
            title: 'Detail Page Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
        }),
        defineField({
            name: 'link',
            title: 'External Link',
            type: 'url',
        }),
    ],
})