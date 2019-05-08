const express = require("express");
const logger = require("morgan");
const createError = require("http-errors");

const { setCorsHeaders } = require("./middleware/security");

const indexRouter = require("./routes/index");
const itemsRouter = require("./routes/items");
const usersRouter = require("./routes/users");

const { genericErrors } = require("./lib/controllers/messageController");

const app = express();

const postgres = require("pg");
const { Client } = require("pg");

require('dotenv').config({ path: './.env' })
console.log(process.env.DBUSER);

const client = new Client({
  user: process.env.DBUSER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DBPORT
});
client.connect();

// promise
client
  .query("select * from public.user")
  .then(res => {
    if (
      res.rowCount >= 1 &&
      res.rows.filter(user => user.email === "admin@dci.de").length > 0
    ) {
      console.log("All users:", res.rows);
    } else {
      client.query(
        `INSERT INTO public.user("firstName", "lastName", "email", "password", "city", "zipCode", "registrationDate", "rating") 
        VALUES ('The', 'Admin', 'admin@dci.de', '123456', 'Berlin', 10234, '2019-05-04', 5)`
      );
      console.log("Admin seeded");
    }
  })
  .catch(e => console.error(e.stack));

console.log("Hello from postgres"); 

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
