/**
 * @name flatten
 * @param {arr} Array
 * @returns Array
 * @since 1.0.0
 * @section
 * @example
 */
const flatten = (arr: any[]): any[] => [].concat(...arr);

export default flatten;
