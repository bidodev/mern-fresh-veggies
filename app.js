/**
 * Module dependencies.
 */

const express = require('express');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');

const app = express();
app.use(helmet());

/* Error controller */
const errorHandler = require("./controllers/errorController");

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


/**
 * When an error is trow we catch it here and forward to errorController
 */
app.use(errorHandler);
module.exports = app;
