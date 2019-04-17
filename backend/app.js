const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const createError = require("http-errors");

const { setCorsHeaders } = require("./middleware/security");

const indexRouter = require("./routes/index");
const itemsRouter = require("./routes/items");
const usersRouter = require("./routes/users");

const { genericErrors } = require("./controllers/messageController");

const app = express();

/**
 * Connect to DB
 */
mongoose.connect("mongodb://localhost:27017/collectivity", {
  useNewUrlParser: true,
  useCreateIndex: true
});

// eslint-disable-next-line no-console
mongoose.connection.on("error", console.error);

app.use(setCorsHeaders);

app.use(logger("dev"));
app.use(express.json());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/items", itemsRouter);

// Catch any route that is not recognized
app.use((req, res, next) => {
  const error = new createError.NotFound();
  //with http-errors
  next(error);
});

// Generic error handler
app.use(genericErrors);

module.exports = app;
