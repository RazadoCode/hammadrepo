// schemas/category.js

export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        description: 'The name of the category',
        validation: Rule => Rule.required()
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        description: 'An image representing the category',
        options: {
          hotspot: true // Enables hotspot for better image cropping
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description (optional)',
        description: 'A short description of the category',
      }
    ]
  }