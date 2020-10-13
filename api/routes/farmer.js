const express = require('express');
const router = express.Router();

/**
 * if the user need be logged, add the protected middleware to your route
 * if the router is restricted to a specific role add restrictedAccess
 */

const { protected, restrictedAccess } = require("../controllers/authController");
const { createProduct } = require('../controllers/farmerController');

/*
* METHOD: POST - Create a product
*/
router.route('/product').post(protected, restrictedAccess('farmer', 'admin'), createProduct)

module.exports = router;