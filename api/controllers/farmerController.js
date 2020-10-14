/*
 * This router is restricted to admin and farmers
 * The user is already in the request
 */
const mongoose = require('mongoose');

/* Models */
const Product = require('../models/productModel');
const User = require('../models/userModel');

/* Utils */
const AppError = require('../utils/AppError.js');
const asyncWrapper = require('../utils/asyncWrapper');

/**
 * get all farmers
 */
exports.getAllFarmers = asyncWrapper(async (req, res, next) => {
  const farmers = await User.find({ role: 'farmer' }).select('-password');

  res.status(200).json({
    status: 'success',
    data: {
      farmers,
    }
  })
})

/**
 * get a farmer page
 */
exports.getFarmerPage = asyncWrapper(async (req, res, next) => {

  //check if its a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(new AppError('Not valid id', 400, 'fail'));
  }
  
  //find the user
  const user = await User.findById(req.params.id);
  
  if (!user || user.role !== 'farmer') {
    return next(new AppError('You could not find a farmer page with the given id', 404, 'fail'));
  }

  res.status(200).json({
    status: 'success',
    data: {
      name: user.name,
      products: user.products,
    },
  });
});

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
