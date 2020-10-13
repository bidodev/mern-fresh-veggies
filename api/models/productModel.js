const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;