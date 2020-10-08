/*Express validator */
const { validationResult } = require('express-validator');

/* Models */
const User = require('../models/userModel');

/* Utils */
const AppError = require('../utils/appError.js');
const asyncWrapper = require('../utils/asyncWrapper');
const signToken = require('../utils/signToken.js');

/**
 * @function
 * Create a new account and sign a toke for the account
 */
exports.signin = asyncWrapper(async (req, res, next) => {
  const { name, email, password } = req.body;

  //1. Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //2. If no errors create the userAccount
  const user = await User.create({
    name,
    email,
    password,
  });

  //3. Sign a new token for the user
  const jwt = signToken(user._id);

  //4. Send the response to client
  res.status(201).json({
    status: 'success',
    jwt,
    user: {
      id: user._id,
      email: user.email,
    },
  });
});

exports.login = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;

  //1. Check if the user exist
  user = await User.findOne({ email });

  //2. Decrypt the password and check if the given password match with the password in the database
  //2.1. If no user or password does not match, return error
  if (!user || !(await user.comparePasswords(password))) {
    return next(
      new AppError(`Credentials don't match. Try again`, 403, 'fail')
    );
  }

  //3. Sign a new token for the user
  const jwt = signToken(user._id);

  //4. Send the answer back to the user
  res.status(200).json({
    status: 'success',
    jwt,
  });
});
