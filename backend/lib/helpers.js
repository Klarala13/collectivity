/**
 * Check if an object or Array is empty
 * @param  {Object}  obj The object or array to check
 * @return {Boolean}     A boolean denoting wether the Object or array is empty
 */
exports.isEmpty = obj => Object.keys(obj).length === 0;

/**
 * Generates a filter function with the criteria upon which we want to filter
 * @param {Object} predicate The object of criteria to apply to the filter function
 * @return {Function} A function to apply on an array to filter
 */
exports.filterBy = predicate => {
  const keys = Object.keys(predicate);

  return object =>
    keys.every(key => {
      if (!object[key]) return false;

      const predicateValue = predicate[key].toString().toLowerCase();
      const objectValue = object[key].toString().toLowerCase();
      return predicateValue === objectValue;
    });
};
