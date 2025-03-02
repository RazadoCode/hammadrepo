// schemas/sale.js

export default {
    name: 'sale',
    type: 'document',
    title: 'Sale',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Sale Name',
        description: 'The name of the sale or discount',
        validation: Rule => Rule.required()
      },
      {
        name: 'percentageOff',
        type: 'number',
        title: 'Percentage Off',
        description: 'The percentage discount being offered (e.g., 20 for 20%)',
        validation: Rule => Rule.required().min(0).max(100) // Ensures the value is between 0 and 100
      }
    ]
  }