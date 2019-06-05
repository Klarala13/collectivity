const { check } = require("express-validator/check");

exports.item_id = [
  check("id")
    .isMongoId()
    .withMessage("Invalid Item Id")
];

exports.newItem = [
  check("name")
    .isString()
    .withMessage("An item's name must be formatted as a string")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Item name is required"),
  check("header")
    .isString()
    .withMessage("An item header must be a string")
    .not()
    .withMessage("An item header must be provided")
    .isEmpty()
    .trim(),
  check("description")
    .isString()
    .withMessage("The description must be formatted as a string")
    .trim()
    .optional(),
  check("location")
    .isString()
    .trim()
    .not()
    .isEmpty()
    .withMessage("Please provide a location"),
  check("language")
    .isIn(LANGUAGES)
    .withMessage("Only allowed languages")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Language is required"),
  check("comment")
    .isString()
    .withMessage("We need your comment to be a string")
    .trim()
    .optional(),
  check("active")
    .isBoolean()
    .optional(),
  check("category")
    .isString()
    .withMessage("category must be formatted as a string")
    .trim()
    .optional(),
  check("tags")
    .isString()
    .trim()
    .not()
    .isEmpty()
    .withMessage("a tag must be provided for the Item")
    .isIn(TAGS)
    .withMessage("Please, provide a valid tag from the ones included"),
  check("img")
    .isString()
    .trim()
    .withMessage("Please provide image URL as string")
];
exports.editItem = [
check("name")
  .isString()
  .withMessage("An item's name must be formatted as a string")
  .trim()
  .not()
  .isEmpty()
  .withMessage("Item name is required"),
check("header")
  .isString()
  .withMessage("An item header must be a string")
  .not()
  .withMessage("An item header must be provided")
  .isEmpty()
  .trim(),
check("description")
  .isString()
  .withMessage("The description must be formatted as a string")
  .trim()
  .optional(),
check("location")
  .isString()
  .trim()
  .not()
  .isEmpty()
  .withMessage("Please provide a location"),
check("language")
  .isIn(LANGUAGES)
  .withMessage("Only allowed languages")
  .trim()
  .not()
  .isEmpty()
  .withMessage("Language is required"),
check("comment")
  .isString()
  .withMessage("We need your comment to be a string")
  .trim()
  .optional(),
check("active")
  .isBoolean()
  .optional(),
check("category")
  .isString()
  .withMessage("category must be formatted as a string")
  .trim()
  .optional(),
check("tags")
  .isString()
  .trim()
  .not()
  .isEmpty()
  .withMessage("a tag must be provided for the Item")
  .isIn(TAGS)
  .withMessage("Please, provide a valid tag from the ones included"),
check("img")
  .isString()
  .trim()
  .withMessage("Please provide image URL as string")
]