const multer = require('multer');
const AppError = require('../utils/AppError');
const User = require('../models/userModel');
const asyncWrapper = require('../utils/asyncWrapper');

const multerStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, '../client/public/images/users');
  },
  filename: (req, file, callback) => {
    const [type, extension] = file.mimetype.split('/');

    callback(
      null,
      `${req.user.role}-${req.user.id}-${Date.now()}.${extension}`
    );
  },
});

const multerFilter = (req, file, callback) => {
  console.log(file)
  if (file.mimetype.startsWith('image')) {
    callback(null, true);
  } else {
    
    callback(
      new AppError('Invalid format. Please upload only images', 403, 'fail'),
      false
    );
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadUserPhoto = upload.single('photo');

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
