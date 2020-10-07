const express = require('express');
const router = express.Router();

const { signin, login } = require('../controllers/authController');

/* POST to register endpoint. */
router.route('/register').post(signin);
router.route('login').post(login)

module.exports = router;
