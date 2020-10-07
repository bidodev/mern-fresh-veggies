const express = require('express');
const router = express.Router();

const { signin, login } = require('../controllers/authController');
const { validateRegister } = require('../models/userValidationSchema');

/* POST to register endpoint. */
router.post(
  '/register', validateRegister,
  signin
);

router.route('/login').post(login);

module.exports = router;
