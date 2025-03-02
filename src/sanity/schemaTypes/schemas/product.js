// schemas/product.js

export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        description: 'The name of the product',
        validation: Rule => Rule.required()
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
        description: 'The price of the product',
        validation: Rule => Rule.required().positive()
      },
      {
        name: 'category',
        type: 'reference', // Reference to the 'category' schema
        title: 'Category',
        description: 'The category of the product',
        to: [{ type: 'category' }], // Links to the 'category' document type
        validation: Rule => Rule.required()
      },
      {
        name: 'inStock',
        type: 'boolean',
        title: 'In Stock',
        description: 'Is the product currently in stock?',
        initialValue: true,
        validation: Rule => Rule.required()
      },
      {
        name: 'bestSelling',
        type: 'boolean',
        title: 'Best Selling',
        description: 'Is the product Best Selling(This will show on front page)?',
        initialValue: false,
        validation: Rule => Rule.required()
      },
      {
        name: 'onSale',
        type: 'boolean',
        title: 'On Sale',
        description: 'Is the product currently on Sale on not?',
        initialValue: true,
        validation: Rule => Rule.required()
      },
      {
        name: 'sizes',
        type: 'array',
        title: 'Sizes',
        description: 'Available sizes for the product',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags' // This will allow you to input sizes as tags
        },
        validation: Rule => Rule.required().min(1)
      },
      {
        name: 'images',
        type: 'array',
        title: 'Images',
        description: 'Images of the product',
        of: [{ type: 'image' }],
        options: {
          hotspot: true // Enables hotspot for images
        },
        validation: Rule => Rule.required().min(1)
      },
      {
        name: 'description',
        type: 'text', // Rich text is stored as an array of blocks
        title: 'Description',
        description: 'A detailed description of the product',
        // of: [
        //   {
        //     type: 'block', // This enables the rich text editor
        //     styles: [
        //       { title: 'Normal', value: 'normal' },
        //       { title: 'H1', value: 'h1' },
        //       { title: 'H2', value: 'h2' },
        //       { title: 'H3', value: 'h3' },
        //       { title: 'Quote', value: 'blockquote' }
        //     ],
        //     lists: [
        //       { title: 'Bullet', value: 'bullet' },
        //       { title: 'Numbered', value: 'number' }
        //     ],
        //     marks: {
        //       decorators: [
        //         { title: 'Strong', value: 'strong' },
        //         { title: 'Emphasis', value: 'em' }
        //       ],
        //       annotations: [
        //         {
        //           name: 'link',
        //           type: 'object',
        //           title: 'Link',
        //           fields: [
        //             {
        //               name: 'href',
        //               type: 'url',
        //               title: 'URL'
        //             }
        //           ]
        //         }
        //       ]
        //     }
        //   }
        // ],
        validation: Rule => Rule.required()
      }
    ]
  }