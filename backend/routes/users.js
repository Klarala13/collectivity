const express = require("express");
const router = express.Router();

const { Client } = require("pg");
const client = new Client({
  user: process.env.DBUSER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DBPORT
});
client.connect();

console.log("DBUSER", process.env.DBUSER);

const listUsers = (req, res, next) => {
  console.log("users");
  try {
    const userQuery = "select * from public.users";
    client.query(userQuery).then(response => {
      console.log("query", userQuery);
      console.log("res", response.rows);

      const users = response.rows[0];
      res.send(users);
    });
  } catch (e) {
    console.log("ERROR", e);
    next(e);
  }
};

const addUser = (req, res, next) => {
  console.log("req.body", req.body);
  try {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const {firstName, lastName, email, password, city, zipCode, image} = req.body;
      client.query(
        `INSERT INTO public.users("firstName", "lastName", "email", "password", "city", "zipCode", "registrationDate", "image") 
      VALUES ('${firstName}', '${lastName}', '${email}', '${password}', '${city}', '${zipCode}', '${date}', '${image}' )`
      );
      console.log("New user seeded");
      console.log("request", req.body);

    const userQuery = "select * from public.users";
    client.query(userQuery).then(response => {
      const newUsers = response.rows;
      res.send(newUsers);
    });
  } catch (e) {
    console.log("ERROR", e);
    next(e);
  }
};

router.route("/").get(listUsers)
                 .post(addUser);

module.exports = router;
