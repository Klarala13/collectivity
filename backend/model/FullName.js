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