/**
 * @name flattenDeep
 * @description Recursively flattens an array
 * @param {arr} Array
 * @returns Array
 * @since 1.0.0
 * @section
 * @example
 *  flattenDeep([1, 2, 3, [4, 5, [6, 7, [8, 9]]]])
 *  // => [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
const flattenDeep = (arr: any[]): any[] =>
  arr.some(Array.isArray) ? flattenDeep([].concat(...arr)) : arr;

export default flattenDeep;
