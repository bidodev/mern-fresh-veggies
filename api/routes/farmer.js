const express = require('express');
const router = express.Router();

/**
 * if the user need be logged, add the protected middleware to your route
 * if the router is restricted to a specific role add restrictedAccess
 */

const {
  protected,
  restrictedAccess,
} = require('../controllers/authController');

/* stock controller */
const { retrieveProducts, retrieveProduct, createProduct } = require('../controllers/farmerController');
/*
 * METHOD: POST - Create a product
 */
const authMiddlewares = [
  protected,
  restrictedAccess('farmer', 'admin'),
];

router.route('/product/:id').get(...authMiddlewares, retrieveProduct);

router.route('/products').get(...authMiddlewares, retrieveProducts).post(...authMiddlewares, createProduct);;

module.exports = router;
