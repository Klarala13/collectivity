const express = require('express');
const path = require('path');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const { genericErrors } = require('./controllers/messageController');

const app = express();

app.use(logger('dev'));
app.use(express.json());

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


// Generic error handler
app.use(genericErrors);

module.exports = app;
