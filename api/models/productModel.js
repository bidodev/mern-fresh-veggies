const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  name: {
    type: String,
    required: [true, 'The product name is required'],
    },
  type: String,
  description: {
    type: String,
    default: 'Please edit the product description'
  },
  price: {
    type: Number,
    required: [true, 'The price is required']
  },
  quantity: {
    type: Number,
    required: [true, 'The amount is required'],
    default: 1
  },
  unity: {
    type: String,
    required: [true, 'The amount is required'],
    default: 'unity'
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
  photos: [
    {
      type: String,
    },
  ],
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
