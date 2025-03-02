// schemas/banner.js

export default {
    name: 'banner',
    type: 'document',
    title: 'Banner',
    fields: [
      {
        name: 'imageMobile',
        type: 'image',
        title: 'Image for Mobile',
        description: 'The image optimized for mobile devices',
        options: {
          hotspot: true // Enables hotspot for better image cropping
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'imageDesktop',
        type: 'image',
        title: 'Image for Desktop',
        description: 'The image optimized for desktop devices',
        options: {
          hotspot: true // Enables hotspot for better image cropping
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'text',
        type: 'text',
        title: 'Banner Text',
        description: 'The text to display on the banner (shared for both mobile and desktop)',
        validation: Rule => Rule.required().max(150) // Adjust max length as needed
      }
    ]
  }