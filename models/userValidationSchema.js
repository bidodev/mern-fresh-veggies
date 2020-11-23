const { body } = require('express-validator');
const User = require('./userModel');

const userExist = async (email) => {
  return await User.findOne({ email }).then((user) => {
    if (user) {
      throw new Error('Email already exist');
    }
  });
};

const passwordsMatch = (value, { req }) => {
  if (value !== req.body.password) {
    throw new Error('Password confirmation does not match password');
  }
  // Indicates the success of this synchronous custom validator
  return true;
};

exports.validateData = [
  // name
  body('name').exists(),

  // username must be an email
  body('email').isEmail().custom(userExist),

  // password must be at least 5 chars long
  body('password')
    .isLength({ min: 8 })
    .withMessage('must be at least 8 chars long')
    .matches(/\d/)
    .withMessage('must contain a number'),
  body('passwordConfirmation').custom(passwordsMatch),
];
