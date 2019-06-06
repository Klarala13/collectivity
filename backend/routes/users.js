const express = require("express");
const Jimp = require("jimp");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const upload = multer({ dest: "uploads/" });


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

const listUsers = (req, res, next) => {
  try {
    const userQuery = "select * from public.users";
    client.query(userQuery).then(response => {
      //console.log("query", userQuery);
      //console.log("res", response.rows);

      const users = response.rows;
      res.send(users);
    });
  } catch (e) {
    console.log("ERROR", e);
    next(e);
  }
};

const resizeImages = (req, res, next) => {
  console.log("TEST", req.file);
  const file = `${req.file.filename + "." + req.file.mimetype.split("/")[1]}`;
  //console.time("IMG");
  Jimp.read(`${process.env.IMAGE_UPLOAD_DIR}/${req.file.filename}`)
    .then(pic => {
      return pic
        .resize(256, 256) // resize
        .quality(60) // set JPEG quality
        .write(`${process.env.IMAGE_UPLOAD_DIR}/${file}`); // save
    })
    .then(() => {
      //  console.timeEnd("IMG");
      fs.unlinkSync(`${process.env.IMAGE_UPLOAD_DIR}/${req.file.filename}`);
      console.log("Resized and Stored image");

      req.filename = file;
      next();
    })
    .catch(err => {
      console.error(err);
    });
};
const responseObject = (status, message, data = {}) => {
  return { status, message, data };
};
const jwt = require("jsonwebtoken");
const app = require("../app");

const isAuthenticated = (req, res, next) => {
  const token = req.headers["authorization"];

  if (token) {
    try {
      const decoded = jwt.verify(token, "SUPERSECRET");

      req.decoded = decoded;
      //This actually makes this function to a middleware and forwards to the authenticated routes
      next();
    } catch (e) {
      return res.json({
        success: false,
        message: "Failed to authenticate token."
      });
    }
  } else {
    return res.status(403).send({
      success: false,
      message: "No token provided."
    });
  }
};

const getUser = (req, res, next) => {
  console.log("HELLO FROM getUser",req.decoded);
  try {
    const userQuery = `select * from public.users WHERE user_id='${
      req.decoded.user_id
    }'`;
    client.query(userQuery).then(response => {
      console.log("Here we go", response.rows);
      if (response.rows.length === 0) {
        res.send(responseObject(404, "User not found"));
      } else {
        const payload = response.rows[0];
        delete payload.password;

        res.send(
          responseObject(200, "Success", {user: payload})
        );
      }
    });
  } catch (e) {
    console.log("ERROR", e);
  }
};

const getFreebiesByUser = (req, res, next) => {
  console.log("getFreebiesByUser",req.decoded);
  try {
    const freebiesQuery = `select * from public.freebies WHERE user_id=${
      req.decoded.user_id
    }`;
    console.log(freebiesQuery);
    client.query(freebiesQuery).then(response => {
      console.log("Here we go", response.rows, req.decoded);
      if (response.rows.length === 0) {
        res.send(responseObject(404, "No freebies yet."));
      } else {
        res.send(
          responseObject(200, "Success", {freebies: response.rows})
        );
      }
    });
  } catch (e) {
    console.log("ERROR", e);
  }
};

const getSkillsByUser = (req, res, next) => {
  console.log("getSkillsByUser",req.decoded);
  try {
    const skillsQuery = `select * from public.skills WHERE user_id=${
      req.decoded.user_id
    }`;
    console.log(skillsQuery);
    client.query(skillsQuery).then(response => {
      console.log("Here we go", response.rows, req.decoded);
      if (response.rows.length === 0) {
        res.send(responseObject(404, "No skills yet."));
      } else {
        res.send(
          responseObject(200, "Success", {skills: response.rows})
        );
      }
    });
  } catch (e) {
    console.log("ERROR", e);
  }
};

const signIn = (req, res, next) => {
  try {
    const userQuery = `select * from public.users WHERE email='${
      req.body.email
    }'`;
    console.log("email", req.body.email)
    client.query(userQuery).then(response => {
      console.log(response.rows);
      if (response.rows.length === 0) {
        res.send(responseObject(404, "User not found"));
      } else if (response.rows[0].password !== req.body.password) {
        res.send(responseObject(401, "Wrong password"));
      } else {
        const payload = {
          email: response.rows[0].email,
          user_id: response.rows[0].user_id

        };
        const token = jwt.sign(payload, "SUPERSECRET", {
          expiresIn: 86400
        });
        res.send(
          responseObject(200, "Success", {
            token: token
          })
        );
      }
    });
  } catch (e) {
    console.log("ERROR", e);
  }
};

const addUser = (req, res, next) => {
  try {
    const userQuery = `select * from public.users WHERE email='${
      req.body.email
    }'`;
    client.query(userQuery).then(response => {
      const newUser = response.rows;
      if (newUser.length === 0) {
        console.log(req.body);
        const today = new Date();
        const date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        const {
          first_name,
          last_name,
          email,
          password,
          city,
          zip_code
        } = req.body;
        console.log(
          "XXXX",
          `INSERT INTO public.users("first_name", "last_name", "email", "password", "city", "zip_code", "registration_date", "image") 
        VALUES ('${first_name}', '${last_name}', '${email}', '${password}', '${city}', '${Number(
            zip_code
          )}', '${date}', '${req.filename}' )`
        );
        client
          .query(
            `INSERT INTO public.users("first_name", "last_name", "email", "password", "city", "zip_code", "registration_date", "image") 
        VALUES ('${first_name}', '${last_name}', '${email}', '${password}', '${city}', '${Number(
              zip_code
            )}', '${date}', '${req.filename}' )`
          )
          .then(res => {
            console.log("New user seeded");
          });
        //console.log("request", req.body);
      }
    });
  } catch (e) {
    console.log("could not create New User", e);
    next(e);
  }
};

router
  .route("/")
  .get(listUsers)
  .post(upload.single("image"), resizeImages, addUser);
router.route("/profile").get(isAuthenticated, getUser);
router.route("/own_freebies").get(isAuthenticated, getFreebiesByUser);
router.route("/own_skills").get(isAuthenticated, getSkillsByUser);
router.route("/signin").post(signIn);

module.exports = router;
