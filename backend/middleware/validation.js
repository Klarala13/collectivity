// const createError = require("http-errors");
// const { validationResult } = require("express-validator/check");

// exports.validateInputs = rules => {
//   return [
//     ...rules,
//     (req, res, next) => {
//       const errors = validationResult(req);

//       if (!errors.isEmpty()) {
//         const error = new createError.UnprocessableEntity(
//           "Invalid Request Format"
//         );
//         // Map messages from each field into a flat array of message strings
//         error.validationErrors = errors.array().map(error => error.msg);

//         // Generate an explanatory error message by joining the array
//         return next(error);
//       } else {
//         next();
//       }
//     }
//   ];
// };