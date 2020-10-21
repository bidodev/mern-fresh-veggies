const express = require('express');
const {
  uploadUserPhoto,
  updateProfile,
} = require('../controllers/userController');

const { protected } = require('../controllers/authController');

const router = express.Router();

/* Update Profile either valid for farmer or user profile */
router.patch('/profile', protected, uploadUserPhoto, updateProfile);

module.exports = router;
