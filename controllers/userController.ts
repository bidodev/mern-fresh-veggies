const User = require('../models/userModel');
const AppError = require('../utils/AppError');
const asyncWrapper = require('../utils/asyncWrapper');

exports.updateProfile = asyncWrapper(async (req, res, next) => {

  const user = await User.findById(req.user.id);

  if (!req.file) {
    return next(new AppError('Please upload an image file.', 400, 'fail'));
  }

  if (req.body.update === 'gallery') {
    const filter = user.images.gallery.map((obj) =>
      obj.name === req.body.name ? { ...obj, path: req.file.filename } : obj
    );
    user.images = { ...user.images, gallery: filter };
    await user.save();
    return res.status(200).json({
      status: 'success',
    });
  }

  switch (req.body.update) {
    case 'profile': {
      user.images = { ...user.images, profile: req.file.filename };
      break;
    }
    case 'cover': {
      user.images = { ...user.images, cover: req.file.filename };
      break;
    }
    default: {
      return next(new AppError('Invalid update type.', 400, 'fail'));
    }
  }

  await user.save();
  
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
      config: req.user.config,
    },
  });
});
