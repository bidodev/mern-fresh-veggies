const multer = require('multer');
const AppError = require('../utils/AppError');
const fs = require('fs');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { name } = req.user
    const path = `../client/public/uploads/${name.toLowerCase()}/images/${req.body.update}`
    fs.mkdirSync(path, { recursive: true })
    return cb(null, path)
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `${req.body.name}.${ext}`);
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
