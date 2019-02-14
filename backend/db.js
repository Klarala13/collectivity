const path = require("path");

const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync(
  path.join(__dirname, "data", "users.json")
);

const db = lowdb(adapter);
db.defaults({ students: [] }).write();

module.exports = db;
