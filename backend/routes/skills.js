const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
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

const listSkills = (req, res, next) => {
  console.log("Skills");
  try {
    const skillsQuery = "select * from public.skills";
    client.query(skillsQuery).then(response => {
      console.log("query", skillsQuery);
      console.log("res", response.rows);

      const skills = response.rows;
      res.send(skills);
    });
  } catch (e) {
    console.log("ERROR", e);
    next(e);
  }
};

const addSkill = (req, res, next) => {
  console.log("req.body", req.body);
    const {
      skill,
      description,
      location,
      time_span,
      category
    } = req.body;

  const token = req.headers["authorization"];

  console.log("Token", token);

     if (token) {
    try {
      const decoded = jwt.verify(token, "SUPERSECRET");

      req.decoded = decoded;

      const user_id = req.decoded.user_id;

      console.log(user_id);
    
      client.query(
        `INSERT INTO public.skills("skill", "description", "location", "time_span", "category", "user_id") 
        VALUES ('${skill}', '${description}', '${location}', '${Number(
          time_span
        )}', '${category}', '${user_id}')`
      );
      console.log("New skill added");
  
      const skillsQuery = "select * from public.skills";
      client.query(skillsQuery).then(response => {
        const PlusNewSkill = response.rows;
        res.send(PlusNewSkill);
      });
    } catch (e) {
      console.log("ERROR", e);
      next(e);
    }
  } else {
    return res.status(403).send({
      success: false,
      message: "No token provided."
    });
  }
};

router
  .route("/")
  .get(listSkills)
  .post(addSkill);

module.exports = router;
