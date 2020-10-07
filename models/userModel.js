/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: ['true', 'The email is required'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: ['true', 'Please provide a password'],
    select: false,
    },
  
  role: {
    type: String,
    enum: ['user', 'farmer', 'admin'],
    default: 'user',
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
