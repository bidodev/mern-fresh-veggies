const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json({
    status: 'Success',
    data: {
      message: 'Welcome to the API',
    },
  });
});

module.exports = router;
