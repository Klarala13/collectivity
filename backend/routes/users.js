const express = require("express");
const router = express.Router();

const {
  listUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser
} = require("../controllers/usersController");

router.route("/")
  .get(listUsers)
  .post(addUser);

router.route("/:id")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
