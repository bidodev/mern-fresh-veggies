const express = require('express');
const router = express.Router();

const { signin, login } = require('../controllers/authController');
const { validateData } = require('../models/userValidationSchema');

/* POST to register endpoint. */
router.route('/register').post(validateData, signin);

router.route('/login').post(login);

module.exports = router;
