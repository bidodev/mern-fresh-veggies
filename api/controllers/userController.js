const User = require('../models/userModel');
const AppError = require('../utils/AppError');
const asyncWrapper = require('../utils/asyncWrapper');

exports.updateProfile = asyncWrapper(async (req, res, next) => {
  //1. Update user photo
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { photo: req.file.filename },
    {
      new: true,
    }
  );

  if (!user) {
    return next(new AppError('Failed', 400, 'fail'));
  }

  res.status(200).json({
    status: 'success',
  });
});

/**
 * METHOD: PATCH
 */
exports.updateSettings = asyncWrapper(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { config: req.body },
    {
      new: true,
    }
  );

  //console.log(req.user)
  res.status(200).json({
    status: 'success',
  });
});

exports.userConfig = asyncWrapper(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      config: req.user.config
    }
  });
});

