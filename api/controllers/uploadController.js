const multer = require('multer');
const AppError = require('../utils/AppError');

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

exports.uploadPhoto = upload.single('photo');