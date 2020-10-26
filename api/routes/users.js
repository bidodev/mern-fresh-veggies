const express = require('express');

const { uploadPhoto } = require('../controllers/uploadController');
const { updateProfile, updateSettings, userConfig } = require('../controllers/userController');
const { protected } = require('../controllers/authController');

const router = express.Router();

/* Update Profile either valid for farmer or user profile */
router.patch('/profile', protected, uploadPhoto, updateProfile);
router.route('/settings').patch(protected, updateSettings).get(protected, userConfig);

module.exports = router;
