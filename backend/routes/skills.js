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

const listSkills = (req, res, next) => {
  console.log("skills");
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

const addSkills = (req, res, next) => {
  console.log("req.body", req.body);
  try {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const { skill, description, location, timeSpan, category } = req.body;
    console.log("request", req.body);
    console.log(`INSERT INTO public.skills("skill", "description", "location", "timeSpan", "category") 
    VALUES ('${skill}', '${description}', '${Number(
      location
    )}', '${timeSpan}', '${category}')`);
    client.query(
      `INSERT INTO public.skills("skill", "description", "location", "timeSpan", "category") 
      VALUES ('${skill}', '${description}', '${Number(
        location
      )}', '${timeSpan}', '${category}')`
    );
    console.log("New skill seeded");
    console.log("request", req.body);

    const skillsQuery = "select * from public.skills";
    client.query(skillsQuery).then(response => {
      const newSkills = response.rows;
      res.send(newSkills);
    });
  } catch (e) {
    console.log("ERROR", e);
    next(e);
  }
};

router
  .route("/")
  .get(listSkills)
  .post(addSkills);

module.exports = router;
