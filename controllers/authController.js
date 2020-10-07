const asyncWrapper = require('../utils/asyncWrapper');

exports.signin = asyncWrapper(async (req, res, next) => {
  res
    .status(200)
    .json({ message: 'Post request received at /account/register' });
});

exports.login = asyncWrapper(async (req, res, next) => {
  res.status(200).json({ message: 'Post request received at /account/login' });
});
