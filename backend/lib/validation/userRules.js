const { check } = require("express-validator/check");

exports.user_id = [
  check("id")
    .isMongoId()
    .withMessage("Invalid User Id")
];
// city, zip, registration Date, rating
exports.newUser= [
  check("first_name")
    .isString()
    .withMessage("A User's first name must be formatted as a string")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Item name is required"),
  check("last_name")
   .isString()
    .withMessage("A User's last name must be formatted as a string")
    .trim()
    .not()
    .isEmpty()
    .withMessage("User's last name is required for security reasons"),
  check("email")
    .isString()
    .withMessage("An email must be provided in the form of a string")
    .trim()
    .not()
    .isEmpty(),
  check("password")
    .isString()
    .withMessage("The password must formatted as a string")
    .trim()
    .not()
    .isEmpty()
    .withMessage("We need you to provide a password"),
  check("city")
    .isString()
    .trim()
    .not()
    .isEmpty()
    .withMessage("Please provide a valid city"),
  check("zip")
    .isNumber()
    .trim()
    .withMessage("Please provide a 5 digit Zip Code"),
  check("date")
    .isDate()
    .not()
    .isEmpty(),
  check("rating")
    .isNumber()
    .not()
    .isEmpty()
    .withMessage("please provide a rating in number from 1-5")
];
