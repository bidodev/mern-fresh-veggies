const express = require('express');

const { uploadPhoto } = require('../controllers/uploadController');
const { updateProfile, updateSettings, userConfig } = require('../controllers/userController');
const { protected: protectedRoute } = require('../controllers/authController');

const router = express.Router();

/* Update Profile either valid for farmer or user profile */
router.patch('/profile', protectedRoute, uploadPhoto, updateProfile);
router.route('/settings').patch(protectedRoute, updateSettings).get(protectedRoute, userConfig);

module.exports = router;
