const shortid = require("shortid");
const db = require("../db");

exports.skills = (req, res) => {
  const skills = db.get("skills").sortBy("category");
  //dont know if we should sort them by cat or by name
  if (isEmpty(req.query)) {
    res.json(skills.value());
  } else {
    res.json(skills.filter(filterBy(req.query)).value());
  }
};

exports.addSkill = (req, res) => {
  const skills = db
    .get("skills")
    .push({
      ...req.body,
      id: shortid.generate()
    })
    .write();
  res.json(skills);
};

exports.getSkill = (req, res) => {
  const { id } = req.params;
  const skill = db
    .get("skills")
    .find({ id })
    .value();
  res.json(skill);
};

exports.updateSkill = (req, res) => {
  const { id } = req.params;
  const skill = db
    .get("skills")
    .find({ id })
    .assign(req.body)
    .write();
  res.json(skill);
};

exports.deleteSkill = (req, res) => {
  const { id } = req.params;
  const skill = db
    .get("skills")
    .remove({ id })
    .write();
  res.json(skill);
};