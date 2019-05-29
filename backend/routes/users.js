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

      const users = response.rows[0];
      res.send(users);
    });
  } catch (e) {
    console.log("ERROR", e);
    next(e);
  }
};

const resizeImages = (req, res, next) => {
  console.log("TEST", req.file);
  const file = `${req.file.filename +
    "." +
    req.file.mimetype.split("/")[1]}`;
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

const signIn = (req, res, next) => {
  console.log(req.body);
  res.json("Worked");
};

const addUser = (req, res, next) => {
  try {
    const userQuery = `select * from public.users WHERE email='${
      req.body.email
    }'`;
    client.query(userQuery).then(response => {
      const newUser = response.rows;
      if (newUser.length === 0) {
        console.log(req.body)
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
        console.log("XXXX", `INSERT INTO public.users("firstName", "lastName", "email", "password", "city", "zipCode", "registrationDate", "image") 
        VALUES ('${firstName}', '${lastName}', '${email}', '${password}', '${city}', '${Number(
              zipCode
            )}', '${date}', '${req.filename}' )`)
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

router.route("/signin").post(signIn);
router
  .route("/")
  .get(listUsers)
  .post(upload.single("image"), resizeImages, addUser);

module.exports = router;
