const shortid = require("shortid");
const db = require("../../middleware/db");
const user = require("../../model/User");

exports.listUsers = (req, res) => {
  const users = db.get("users").sortBy("username");
  if (isEmpty(req.query)) {
    res.json(users.value());
  } else {
    res.json(users.filter(filterBy(req.query)).value());
  }
  console.log(user);
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
