/*
 * This router is restricted to admin and farmers
 * The user is already in the request
 */

/* Models */
const Product = require('../models/productModel');
const User = require('../models/userModel');

/* Utils */
const AppError = require('../utils/AppError.js');
const asyncWrapper = require('../utils/asyncWrapper');

exports.retrieveFarmerProducts = asyncWrapper(async (req, res, next) => {
  const products = await User.find(req.user._id).select('products').populate({
    path: 'products',
    select: '-__v',
  });

  res.status(200).json({
    status: 'success',
    data: {
      farmer: req.user.name,
      products: products,
    },
  });
});

exports.retrieveProduct = asyncWrapper(async (req, res, next) => {});

exports.createProduct = asyncWrapper(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.send(product);
});
