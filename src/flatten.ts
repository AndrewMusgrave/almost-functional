/**
 * @name flatten
 * @description Flattens an array one level deep
 * @param {arr} Array
 * @returns Array
 * @since 1.0.0
 * @section
 * @example
 *  flatten([1, 2, 3, [4, 5, 6]])
 *  // => [1, 2, 3, 4, 5, 6]
 */
const flatten = (arr: any[]): any[] => [].concat(...arr);

export default flatten;
