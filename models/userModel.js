/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
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


//this Middleware will run before save the documment
userSchema.pre("save", async function (next) {
  //1. If the password has not been modified exit the function and call the next middleware.
  if (!this.isModified("password")) return next();

  //2. Hash the password using bcrypt
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
