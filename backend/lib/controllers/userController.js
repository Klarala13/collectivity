const shortid = require("shortid");
const db = require("../../middleware/db");

console.log("DBUSER", process.env.DBUSER);

const { Client } = require("pg");
const client = new Client({
  user: process.env.DBUSER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DBPORT
});
client.connect();

exports.listUsers = (req, res, next) => {
  console.log(res);
  try {
    const userQuery = "select * from public.users";
    client.query(userQuery).then(res => {
      console.log("query", userQuery);
      console.log("res", res.rows);

      const user = res.rows[0];
      res.send(user);
    });
  } catch (e) {
    next(e);
  }
};

exports.addUser = (req, res) => {
  const users = db
    .get("users")
    .push({
      ...req.body,
      id: shortid.generate()
    })
    .write();

  res.json(users);
};

exports.getUser = (req, res) => {
  const { id } = req.params;
  const user = db
    .get("users")
    .find({ id })
    .value();

  res.json(user);
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const user = db
    .get("users")
    .find({ id })
    .assign(req.body)
    .write();

  res.json(user);
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const user = db
    .get("users")
    .remove({ id })
    .write();

  res.json(user);
};
