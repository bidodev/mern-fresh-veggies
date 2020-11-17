/* jwt */
const jwt = require('jsonwebtoken');

/* Express validator */
const { validationResult } = require('express-validator');

/* Models */
const User = require('../models/userModel');

/* Utils */
const AppError = require('../utils/AppError.js');
const Email = require('../utils/Email');
const asyncWrapper = require('../utils/asyncWrapper');
const signToken = require('../utils/signToken.js');

/**
 * Sign token and cookie and send it to the client
 *
 * @param {*} user  | user documment
 * @param {*} status | Http status
 * @param {*} req
 * @param {*} res
 */
const createSendToken = (user, status, req, res) => {
  const jwt = signToken(user._id);

  res.cookie('jwt', jwt, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  });

  //destructuring only what we need
  const { _id, email, name, role, images } = user;

  res.status(status).json({
    status: 'success',
    data: {
      _id,
      name,
      email,
      role,
      images
    },
  });
};

/**
 * @function
 * Create a new account and sign a toke for the account
 */
exports.signin = asyncWrapper(async (req, res, next) => {
  const { role } = req.params;
  const { name, email, password } = req.body;

  /* Avoid someone to create an account as admin */
  const roles = ['user', 'farmer'];
  if (!roles.includes(role)) {
    return next(new AppError(`Invalid Request`, 400, 'fail'));
  }

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
    role,
  });

  //3. Send an welcome email to the user
  const url = `${req.protocol}://${req.get('host')}/account/${user.role}`;
  await new Email(user, url).sendWelcome();

  //4. Send the response to the client
  createSendToken(user, 201, req, res);
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

  //3. Send the response to the client
  createSendToken(user, 200, req, res);
});

/* protected route */
exports.protected = asyncWrapper(async (req, res, next) => {
  const { cookie } = req.headers;

  let token;
  //1. check if the token is sent along with headers.

  if (!cookie) {
    return next(new AppError(`Authorization Header is missing`, 400, 'fail'));
  }

  //2.1 If there is header and start with Bearer ,we use substring to take the rest and save in the token var
  if (cookie.startsWith('jwt')) {
    token = cookie.substring('jwt='.length);
  }

  //2.2. If no token, return.
  if (!token) {
    return next(new AppError(`You are not logged in`, 401, 'fail'));
  }

  //3. Verification token
  const jwtVerification = jwt.verify(token, process.env.JWT_SECRET);

  //4. Check if the user still exists
  const tokenOwner = await User.findById(jwtVerification.id);
  if (!tokenOwner) {
    return next(new AppError(`This user was deleted`, 401, 'fail'));
  }

  //6.2 Send the user into the request
  req.user = tokenOwner;

  //6. If all conditions were satisfed continue to next middleware
  //6.1 Grant access to the protected route
  next();
});

exports.restrictedAccess = (...roles) => {
  return (req, res, next) => {
    const { role } = req.user;

    if (!roles.includes(role)) {
      return next(
        new AppError(
          `You don't have permission to access on this server`,
          403,
          'fail'
        )
      );
    }
    next();
  };
};

exports.changePassword = asyncWrapper(async (req, res, next) => {
  // TODO: Get the user (remember we have access to the user, because of the protected middleware)
  const user = await User.findById(req.user.id);

  // 2) Check if POSTed current password is correct
  if (!(await user.comparePasswords(req.body.currentPassword))) {
    return next(new AppError('Your current password is wrong.', 401));
  }
  // 3) If so, update password
  user.password = req.body.password;
  await user.save();
  // User.findByIdAndUpdate will NOT work as intended!

  // 4) Log user in, send JWT
  createSendToken(user, 200, req, res);
});

exports.changeEmail = asyncWrapper(async (req, res, next) => {
  // TODO: Get the user (remember we have access to the user, because of the protected middleware)
  const user = await User.findById(req.user.id);

  // 2) Check if POSTed current password is correct
  if (!(await user.comparePasswords(req.body.currentPassword))) {
    return next(new AppError('Your current password is wrong.', 401));
  }

  //if everything is okay, update email
  user.email = req.body.email;
  await user.save();

  createSendToken(user, 200, req, res);
});
