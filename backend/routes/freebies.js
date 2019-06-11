const express = require("express");
const router = express.Router();
const app = require("../app");

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

const getFreebieById = (req, res, next) => {
  console.log("freebies");
  console.log("req.body: ", req.body)
  try {
    const freebieQuery = `select * from public.freebies where item_id=${req.body.item_id}`;
    client.query(freebieQuery).then(response => {
      console.log(response.rows)
      const singleItem = response.rows;
      res.send(singleItem);
    });
  } catch (e) {
    console.log("ERROR", e);
    next(e);
  }
};

const getFreebieUser = (req, res, next) => {

  console.log("req.body", req.body);
  try {
    const userQuery = `select * from public.users WHERE user_id='${
      req.body.user_id
    }'`;
    client.query(userQuery).then(response => {
      console.log("User: ", response.rows);
        const user = response.rows[0];
        delete user.password;
        res.send(user)
    });
  } catch (e) {
    console.log("ERROR", e);
  }
};

// const addFreebie = (req, res, next) => {
//   console.log("req.body", req.body);
//   try {
//     const today = new Date();
//     const date =
//       today.getFullYear() +
//       "-" +
//       (today.getMonth() + 1) +
//       "-" +
//       today.getDate();
//     const {
//       item,
//       description,
//       location,
//       zip_code,
//       category,
//       user_id
//     } = req.body;
//     // TODO connect with user_id
//     client.query(
//       `INSERT INTO public.freebies("item", "description", "image", "zip_code", "location", "category", "user_id") 
//       VALUES ('${item}', '${description}', '${image}', '${Number(zip_code)}', '${location}', '${category}', '${Number(user_id)}')`
//     );
//     console.log("New skill seeded");
//     console.log("request", req.body);

//     const freebieQuery = "select * from public.freebies";
//     client.query(freebieQuery).then(response => {
//       const newSkill = response.rows;
//       res.send(newSkill);
//     });
//   } catch (e) {
//     console.log("ERROR", e);
//     next(e);
//   }
// };

router
  .route("/")
  .get(listFreebies)
  // .post(addFreebie);
router.route("/one").post(getFreebieById)
router.route("/user").post(getFreebieUser)

module.exports = router;
