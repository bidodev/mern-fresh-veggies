const { body } = require('express-validator');
const User = require('./userModel');

const userExist = async (email) => {
  return await User.findOne({ email }).then((user) => {
    if (user) {
      return Promise.reject('E-mail already in use');
    }
  });
};

exports.validateData = [
  // username must be an email
  body('email').isEmail().normalizeEmail().custom(userExist),

  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }),
];
