// schemas/customer.js

export default {
    name: 'customer',
    type: 'document',
    title: 'Customer',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        description: 'The name of the customer',
        validation: Rule => Rule.required()
      },
      {
        name: 'contact',
        type: 'string',
        title: 'Contact',
        description: 'The contact information of the customer (e.g., phone number or email)',
        validation: Rule => Rule.required()
      }
    ]
  }