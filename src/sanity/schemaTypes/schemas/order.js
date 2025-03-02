// schemas/order.js

export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'customerName',
        type: 'string',
        title: 'Customer Name',
        description: 'The name of the customer',
        validation: Rule => Rule.required()
      },
      {
        name: 'address',
        type: 'string',
        title: 'Address',
        description: 'The delivery address of the customer',
        validation: Rule => Rule.required()
      },
      {
        name: 'city',
        type: 'string',
        title: 'City',
        description: 'The city of the customer',
        validation: Rule => Rule.required()
      },
      {
        name: 'phoneNumber',
        type: 'string',
        title: 'Phone Number',
        description: 'The phone number of the customer',
        validation: Rule => Rule.required()
      },
      {
        name: 'date',
        type: 'string',
        title: 'Date',
      },
      {
        name: 'status',
        type: 'boolean',
        title: 'Shipped or Not',
        description: 'Select either the order is shipped or not shipped',
        initialValue: false,
        validation: Rule => Rule.required()
      },
      {
        name: 'items',
        type: 'array',
        title: 'Items',
        description: 'The list of items in the order',
        of: [
          {
            type: 'object',
            name: 'item',
            title: 'Item',
            fields: [
              {
                name: 'name',
                type: 'string',
                title: 'Product Name',
                description: 'The name of the product',
                validation: Rule => Rule.required()
              },
              {
                name: 'quantity',
                type: 'number',
                title: 'Quantity',
                description: 'The quantity of the product',
                validation: Rule => Rule.required().positive().integer()
              },
            
              {
                name: 'amountoneitem',
                type: 'number',
                title: 'Amount of 1 item',
                description: 'Price for one item',
                validation: Rule => Rule.required().positive().integer()
              }
            ]
          }
        ],
        validation: Rule => Rule.required().min(1) // Ensure at least one item is added
      }
    ]
  }