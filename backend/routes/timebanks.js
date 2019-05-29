const express = require("express");
const router = express.Router();

// Connection to postgreSQL

const { Client } = require("pg");
const client = new Client({
  user: process.env.DBUSER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DBPORT
});
client.connect();

const listTimebanks = (req, res, next) => {
  console.log("timebanks");
  try {
    const timebankQuery = "select * from public.skills";
    client.query(timebankQuery).then(response => {
      console.log("query", timebankQuery);
      console.log("res", response.rows);

      const timebanks = response.rows;
      res.send(timebanks);
    });
  } catch (e) {
    console.log("ERROR", e);
    next(e);
  }
};

const addTimebank = (req, res, next) => {
  console.log("req.body", req.body);
  try {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const {firstName, lastName, email, password, city, zipCode, image} = req.body;
      client.query(
      `INSERT INTO public.timebanks("firstName", "lastName", "email", "password", "city", "zipCode", "registrationDate", "image") 
      VALUES ('${firstName}', '${lastName}', '${email}', '${password}', '${city}', '${Number(zipCode)}', '${date}', '${image}' )`
      );
      console.log("New timebank seeded");
      console.log("request", req.body);

    const timebankQuery = "select * from public.timebanks";
    client.query(timebankQuery).then(response => {
      const newTimebank = response.rows;
      res.send(newTimebank);
    });
  } catch (e) {
    console.log("ERROR", e);
    next(e);
  }
};

router.route("/").get(listTimebanks)
                 .post(addTimebank);

module.exports = router;
