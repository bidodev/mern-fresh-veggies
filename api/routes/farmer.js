const express = require('express');
const router = express.Router();

/**
 * if the user need be logged, add the protected middleware to your route
 * if the router is restricted to a specific role add restrictedAccess('role')
 */

const {
  protected,
  restrictedAccess,
} = require('../controllers/authController');

/* stock controller */
const { getAllFarmers, getFarmerPage, retrieveFarmerProducts, retrieveProduct, createProduct } = require('../controllers/farmerController');

/* select the farmer page based on the id */
router.route('/').get(getAllFarmers)
router.route('/:id').get(getFarmerPage)



const authMiddlewares = [
  protected,
  restrictedAccess('farmer', 'admin'),
];

/* all the routes from this point have are restricted to 'farmer' and 'admin' */
router.use(...authMiddlewares)

/*
 * METHOD: POST - Create a product
 * METHOD: GET - Retrieve all the products
 */
router.route('/product/:name').get(retrieveProduct);
router.route('/products').get(retrieveFarmerProducts).post(createProduct);

module.exports = router;
