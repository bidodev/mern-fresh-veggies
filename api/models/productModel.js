const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  name: {
      type: String,
    },
  type: String,
  description: {
    type: String,
  },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
