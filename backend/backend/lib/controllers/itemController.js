const shortid = require("shortid");
const db = require("../../middleware/db");
const item = require("../../model/Item");

exports.listItems = (req, res) => {
  const items = db.get("items").sortBy("itemName");
  if (isEmpty(req.query)) {
    res.json(items.value());
  } else {
    res.json(items.filter(filterBy(req.query)).value());
  }
  console.log(item);
};

exports.addItem = (req, res) => {
  const items = db
    .get("items")
    .push({
      ...req.body,
      id: shortid.generate()
    })
    .write();
  res.json(items);
};

exports.getItem = (req, res) => {
  const { id } = req.params;
  const item = db
    .get("items")
    .find({ id })
    .value();
  res.json(item);
};

exports.updateItem = (req, res) => {
  const { id } = req.params;
  const item = db
    .get("items")
    .find({ id })
    .assign(req.body)
    .write();
  res.json(item);
};

exports.deleteItem = (req, res) => {
  const { id } = req.params;
  const item = db
    .get("items")
    .remove({ id })
    .write();
  res.json(item);
};
