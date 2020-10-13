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


exports.createProduct = asyncWrapper(async (req, res, next) => {
  //1. Grab our user
  const user = req.user;

  //2. Create a new product
  const product = await Product.create(req.body);

  //3. Add the product ObjectId to the array of products
  user.products.push(product._id);

  //4. Save the user
  await user.save();

  res.status(201).json({
    status: 'success',
    data: {
      product,
    },
  });
});

exports.retrieveProduct = asyncWrapper(async (req, res, next) => {});

exports.deleteProduct = asyncWrapper(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
    data: {
      product,
    },
  });
});

exports.updateProduct = asyncWrapper(async (req, res, next) => {});