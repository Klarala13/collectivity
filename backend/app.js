const express = require("express");
const path = require("path");
const logger = require("morgan");

const { setCorsHeaders } = require("./middleware/security");

const indexRouter = require("./routes/index");
const { genericErrors } = require("./controllers/messageController");

const app = express();

app.use(setCorsHeaders);

app.use(logger("dev"));
app.use(express.json());

app.use("/", indexRouter);
app.use("/users", usersRouter);

// Catch any route that is not recognized
app.use((req, res, next) => {
  const error = new Error("Not Found!");
  error.statusCode = 404;
  next(error);
});

// Generic error handler
app.use(genericErrors);

module.exports = app;
