const shortid = require("shortid");
const db = require("../db");

exports.users = (req, res) => {
  /**
   * ROOM FOR IMPROVEMENT
   * TODO:
   * - Extend this controller so that we can sort by any property (not just the default last_name) by passing it to the request as a query param `sort_by`.
   * - Enable sorting in a descending order by passing in the query param `sort_order=DESC`
   */
  const users = db.get("users").sortBy("username");

  if (isEmpty(req.query)) {
    res.json(users.value());
  } else {
    /**
     * ROOM FOR IMPROVEMENT
     * TODO:
     * - Modify this so the filter can also return results for part of the string. For example, if I send a request to GET /students/?favourite_animal=ca we will get a response with all the students that have Cat as their favourite animal
     */
    res.json(users.filter(filterBy(req.query)).value());
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
