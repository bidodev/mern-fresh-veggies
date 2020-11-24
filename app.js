/**
 * Module dependencies.
 */
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');

const app = express();
app.use(cors());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(helmet());

/* Error controller */
const errorHandler = require('./controllers/errorController');

//import routes
const authRouter = require('./routes/auth');
const farmersRouter = require('./routes/farmers');
const usersRouter = require('./routes/users');

/* Global Midlewares */
if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again later',
});

/* Limit the number or request to /account */
app.use('/account', limiter);

/* Body parser, reading data from body */
app.use(
  express.json({
    limit: '10kb',
  })
);

//Data sanitization against NoSQL Query Injection
app.use(mongoSanitize());

app.use(express.urlencoded({ extended: false }));

/* Server public files */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes Middleware
 */
app.use('/account', authRouter);
app.use('/farmers', farmersRouter);
app.use('/users', usersRouter);

// Serving Static Files
app.use(express.static(path.join(__dirname, "client/build")));

//send react aplication
app.get("*", function (req, res) {
  const index = path.join(__dirname, "client/build", "index.html");
  res.sendFile(index);
});

/**
 * When an error is trow we catch it here and forward to errorController
 */
app.use(errorHandler);
module.exports = app;
