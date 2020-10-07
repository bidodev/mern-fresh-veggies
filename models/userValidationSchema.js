const { body } = require('express-validator');

exports.validateRegister = [
  // username must be an email
  body('email').isEmail().normalizeEmail(),

  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }),
];
