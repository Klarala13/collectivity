const express = require('express');
const path = require('path');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const { genericErrors } = require('./controllers/messageController');

const app = express();

app.use(logger('dev'));
app.use(express.json());

/**
 * ROOM FOR IMPROVEMENT
 * TODO:
 * - Create a middleware to handle setting headers on all responses and
 *   place it in a separate directory dedicated to middleware
 */

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Allow-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
  next();
});

app.use('/', indexRouter);
//app.use('/users', usersRouter);

// Catch any route that is not recognized
app.use((req, res, next) => {
  const error = new Error('Not Found!');
  error.statusCode = 404;
  next(error);
});

/**
 * ROOM FOR IMPROVEMENT
 * TODO:
 * - Create a new controller file dedicated for messages (or add a function to
 *   it if it already exists) and move the error handling middleware to
 *   that controller
 */

// Generic error handler
app.use(genericErrors);

module.exports = app;