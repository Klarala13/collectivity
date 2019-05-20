require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const logger = require("morgan");
const createError = require("http-errors");

const { setCorsHeaders } = require("./middleware/security");

const { genericErrors } = require("./lib/controllers/messageController");

const app = express();

const usersRouter = require("./routes/users");

const postgres = require("pg");
const { Client } = require("pg");

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

async function seedAdmin() {
  return client
    .query("select * from public.users")
    .then(res => {
   
      console.log("User's name:", res.rows[0].lastName);
      if (
        res.rowCount >= 1 &&
        res.rows.filter(user => user.email === "admin@dci.de").length > 0
      ) {
        console.log("All users:", res.rows);
      } else {
        client.query(
          `INSERT INTO public.users("firstName", "lastName", "email", "password", "city", "zipCode", "registrationDate", "rating") 
        VALUES ('The', 'Admin', 'admin@dci.de', '123456', 'Berlin', 10234, '2019-05-04', 5)`
        );
        console.log("Admin seeded");
      }
    })
    .catch(e => console.error(e.stack));
}

client.query("SELECT to_regclass('public.users')").then(async res => {
  console.log("RES", res.rows);
  if (res.rows[0].to_regclass !== null) {
    const response = await seedAdmin();
  } else {
    client
      .query(
        `CREATE TABLE public."users"
      (
          "firstName" character varying(30) COLLATE pg_catalog."default" NOT NULL,
          "lastName" character varying(30) COLLATE pg_catalog."default" NOT NULL,
          email character varying(20) COLLATE pg_catalog."default" NOT NULL,
          password character varying(20) COLLATE pg_catalog."default" NOT NULL,
          city character varying(20) COLLATE pg_catalog."default",
          "zipCode" integer,
          "registrationDate" date,
          rating integer
      )
      WITH (
          OIDS = FALSE
      )
      TABLESPACE pg_default;
      
      ALTER TABLE public."users"
          OWNER to postgres;
      `
      )
      .then(() => seedAdmin());
  }
});

console.log("Hello from postgres");

app.use(setCorsHeaders);

app.use(logger("dev"));
app.use(express.json());

app.get("/", function(req, res) {
  console.log("Welcome to Collectivity")
  res.json({
    message: "Welcome to Collectivity! We're very happy to see you here"
  });
});

app.use("/users", usersRouter);
// app.get("/users", async function(req, res, next) {
//   console.log("users");
//   try {
//     const userQuery = "select * from public.users";
//     await client.query(userQuery).then(response => {
//       // console.log("query", userQuery);
//       // console.log("res", res.rows);

//       const user = response.rows[0];
//       res.send(user);
//     });
//   } catch (e) {
//     console.log("ERROR", e);
//     next(e);
//   }});
app.get("/items", function(req, res) {
  res.json({ message: "Item list" });
});
app.get("/services", function(req, res) {
  res.json({ message: "Service list" });
});

// Catch any route that is not recognized
app.use((req, res, next) => {
  const error = new createError.NotFound();
  //with http-errors
  next(error);
});

// Generic error handler
app.use(genericErrors);

module.exports = app;
