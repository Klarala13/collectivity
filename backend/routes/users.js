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

      const user = response.rows[0];
      res.send(user);
    });
  } catch (e) {
    console.log("ERROR", e);
    next(e);
  }
};

router.route("/").get(listUsers);

module.exports = router;
