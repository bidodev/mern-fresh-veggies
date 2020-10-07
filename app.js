/**
 * Module dependencies.
 */

const express = require('express');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');

const app = express();
app.use(helmet());

//import routes
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * routes Middleware
 */
app.use('/', indexRouter);
app.use('/account', authRouter);

module.exports = app;
