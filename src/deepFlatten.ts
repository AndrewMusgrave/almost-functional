/**
 * @name deepFlatten
 * @param {arr} Array
 * @returns Array
 * @since 1.0.0
 * @section
 * @example
 */
const deepFlatten = (arr: any[]): any[] =>
  arr.some(Array.isArray) ? deepFlatten([].concat(...arr)) : arr;

export default deepFlatten;
