const mongoose = require("mongoose");
const { Schema } = mongoose;

const { trimSchemaStrings } = require("../lib/helpers");

exports.NameSchema = new Schema(
  trimSchemaStrings({
    first_name: {
      type: String,
      required: true
    },
    last_name: String,
    required: true
  }),
  { _id: false }
);

// PersonSchema.virtual("fullName").get(function () {
//   return this.name.first + " " + this.name.last;
// });

// PersonSchema.virtual("fullName").
//   get(function() { return this.name.first + " " + this.name.last; }).
//   set(function(v) {
//     this.name.first = v.substr(0, v.indexOf(" " ));
//     this.name.last = v.substr(v.indexOf(" ") + 1);
//   });

// axl.fullName = "William Rose"; 