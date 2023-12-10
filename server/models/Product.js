const { Schema } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  size: [{
    type: String,
  }],
  color: {
    type: String,
    required: true,
  },
  imageUrls: [{
    type: String,
  }],
  // Add more fields as needed for your application

  // You can add more fields here specific to the product schema
});


module.exports = productSchema;
