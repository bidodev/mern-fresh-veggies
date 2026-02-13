const multer = require('multer');
const path = require('path');
const slugify = require('slugify');
const AppError = require('../utils/AppError');
const asyncWrapper = require('../utils/asyncWrapper');
const {
  deleteFileByFilename,
  uploadBuffer,
  findFileByFilename,
  openDownloadStreamByFilename,
} = require('../utils/gridfs');

const multerStorage = multer.memoryStorage();

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
  limits: { fileSize: 5 * 1024 * 1024 },
});

const persistUpload = asyncWrapper(async (req, res, next) => {
  if (!req.file) {
    return next(new AppError('Please upload an image file.', 400, 'fail'));
  }

  if (!req.body.update) {
    return next(new AppError('Missing upload category.', 400, 'fail'));
  }

  if (!req.user) {
    return next(new AppError('Authentication required for uploads.', 401, 'fail'));
  }

  const slugSource = req.user.slug || req.user.name || 'user';
  const slug = slugify(slugSource, { lower: true });
  const category = req.body.update.toLowerCase();
  const nameBase = req.body.name || req.file.originalname || 'image';
  const extFromMime = req.file.mimetype ? req.file.mimetype.split('/')[1] : '';
  const ext = extFromMime || path.extname(req.file.originalname).replace('.', '') || 'jpg';
  const safeName = slugify(nameBase, { lower: true }) || 'image';
  const filename = `${safeName}.${ext}`;
  const gridFsFilename = `${slug}/images/${category}/${filename}`;

  await deleteFileByFilename(gridFsFilename);
  await uploadBuffer({
    filename: gridFsFilename,
    buffer: req.file.buffer,
    contentType: req.file.mimetype,
    metadata: { slug, category, originalName: req.file.originalname },
  });

  req.file.filename = filename;
  req.file.gridFsFilename = gridFsFilename;

  return next();
});

exports.uploadPhoto = [upload.single('photo'), persistUpload];

exports.getUpload = asyncWrapper(async (req, res, next) => {
  const { slug, category, filename } = req.params;
  const gridFsFilename = `${slug}/images/${category}/${filename}`;
  const file = await findFileByFilename(gridFsFilename);

  if (!file) {
    return next(new AppError('File not found.', 404, 'fail'));
  }

  res.set('Content-Type', file.contentType || 'application/octet-stream');
  res.set('Content-Length', file.length);
  res.set('Cache-Control', 'public, max-age=31536000, immutable');

  const stream = openDownloadStreamByFilename(gridFsFilename);
  stream.on('error', next);
  return stream.pipe(res);
});
