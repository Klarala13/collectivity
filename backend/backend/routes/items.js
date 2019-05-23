const express = require("express");
const router = express.Router();

const {
  listItems,
  addItem,
  getItem,
  updateItem,
  deleteItem
} = require("../lib/controllers/itemController");

router
  .route("/")
  .get(listItems)
  .post(addItem);

router
  .route("/:id")
  .get(getItem)
  .put(updateItem)
  .delete(deleteItem);

module.exports = router;
