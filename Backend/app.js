const createError = require('http-errors');
const express = require('express');
//const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');

//require configsp
require('./configs/db.config');
require('./configs/passport.config');
const session = require('./configs/session.config');
const cors = require('./configs/cors.config');
//require route
const authRouter = require('./routes/auth.routes');
const prodRouter = require('./routes/prod.routes');
const cartRouter = require('./routes/cart.routes');



const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors);
app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(require("body-parser").text());


app.use('/', authRouter);
app.use('/products', prodRouter);
app.use('/carrito', cartRouter);


// 404
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (error, req, res, next) {
  console.error(error);
  res.status(error.status || 500);
  const data = {}
  if (error instanceof mongoose.Error.ValidationError) {
    res.status(400);
    data.errors = {}
    Object.keys(error.errors)
      .forEach(field => data.errors[field] = error.errors[field].message)
  } else if (error instanceof mongoose.Error.CastError) {
    res.status(404);
    error.message = 'Resource not found';
  }

  data.message = error.message;
  res.json(data);
});

module.exports = app;
