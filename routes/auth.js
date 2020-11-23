const express = require('express');
const router = express.Router();

const { signin, login, changePassword, changeEmail, protected } = require('../controllers/authController');
const { validateData } = require('../models/userValidationSchema');

/* POST to register endpoint. */
router.route('/register/:role').post(validateData, signin);

router.route('/login').post(login)
router.route('/password').patch(protected, changePassword);
router.route('/email').patch(protected, changeEmail);

module.exports = router;
