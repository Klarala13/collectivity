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
    const userQuery = `select * from public.users WHERE email='${
      req.decoded.email
    }'`;
    client.query(userQuery).then(response => {
      console.log("Here we go", response.rows);
      if (response.rows.length === 0) {
        res.send(responseObject(404, "User not found"));
      } else {
        res.send(
          responseObject(200, "Success", {user: response.rows[0]})
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
          userId: response.rows[0].userId

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
          firstName,
          lastName,
          email,
          password,
          city,
          zipCode
        } = req.body;
        console.log(
          "XXXX",
          `INSERT INTO public.users("firstName", "lastName", "email", "password", "city", "zipCode", "registrationDate", "image") 
        VALUES ('${firstName}', '${lastName}', '${email}', '${password}', '${city}', '${Number(
            zipCode
          )}', '${date}', '${req.filename}' )`
        );
        client
          .query(
            `INSERT INTO public.users("firstName", "lastName", "email", "password", "city", "zipCode", "registrationDate", "image") 
        VALUES ('${firstName}', '${lastName}', '${email}', '${password}', '${city}', '${Number(
              zipCode
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
router.route("/signin").post(signIn);

module.exports = router;
