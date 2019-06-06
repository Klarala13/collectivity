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

const listFreebies = (req, res, next) => {
  console.log("freebies");
  try {
    const freebieQuery = "select * from public.freebies";
    client.query(freebieQuery).then(response => {
      console.log("query", freebieQuery);
      console.log("res", response.rows);

      const freebies = response.rows;
      res.send(freebies);
    });
  } catch (e) {
    console.log("ERROR", e);
    next(e);
  }
};

// const addFreebie = (req, res, next) => {
//   console.log("req.body", req.body);
//   try {
//     const today = new Date();
//     const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//     const {first_name, last_name, email, password, city, zip_code, image} = req.body;
//       client.query(
//       `INSERT INTO public.freebies("first_name", "last_name", "email", "password", "city", "zip_code", "registration_date", "image") 
//       VALUES ('${first_name}', '${last_name}', '${email}', '${password}', '${city}', '${Number(zip_code)}', '${date}', '${image}' )`
//       );
//       console.log("New freebie added");
//       console.log("request", req.body);

//     const freebieQuery = "select * from public.freebies";
//     client.query(freebieQuery).then(response => {
//       const newFreebie = response.rows;
//       res.send(newFreebie);
//     });
//   } catch (e) {
//     console.log("ERROR", e);
//     next(e);
//   }
// };

router.route("/").get(listFreebies)
                //  .post(addFreebie);

module.exports = router;
