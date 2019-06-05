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

const listMessages = (req, res, next) => {
  console.log("messages");
  try {
    const messageQuery = "select * from public.messages";
    client.query(messageQuery).then(response => {
      console.log("query", messageQuery);
      console.log("res", response.rows);

      const message = response.rows;
      res.send(message);
    });
  } catch (e) {
    console.log("ERROR", e);
    next(e);
  }
};

router.route("/").get(listMessages);

module.exports = router;
