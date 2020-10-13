/*
* This router is restricted to admin and farmers
* The user is already in the request
*/

/* Models */
const Product = require('../models/productModel');

/* Utils */
const AppError = require('../utils/AppError.js');
const asyncWrapper = require('../utils/asyncWrapper');


exports.retrieveProducts = asyncWrapper(async (req, res, next) => {
    const products = await Product.find();
    res.send(products)
})



exports.retrieveProduct = asyncWrapper(async (req, res, next) => {


})

exports.createProduct = asyncWrapper(async (req, res, next) => {

    const product = await Product.create(req.body)
    res.send(product)
})