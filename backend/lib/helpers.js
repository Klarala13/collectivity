const { cloneDeep } = require("lodash/lang");

exports.trimSchemaStrings = schema => {
  schema = cloneDeep(schema);

  for (let key in schema) {
    if (schema[key] === String || schema[key].type === String) {
      const stringOptions = { type: String, trim: true };
      schema[key] =
        typeof schema[key] === "object"
          ? Object.assign(stringOptions, schema[key])
          : stringOptions;
    }
  }

  return schema;
};