/**
 * @name flattenDeep
 * @param {arr} Array
 * @returns Array
 * @since 1.0.0
 * @section
 * @example
 */
const flattenDeep = (arr: any[]): any[] =>
  arr.some(Array.isArray) ? flattenDeep([].concat(...arr)) : arr;

export default flattenDeep;
