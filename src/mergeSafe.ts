import isObject from './isObject';
import merge from './merge';

/**
 * @name mergeSafe
 * @description Merges the arguments provided, remove all none objects, null, and arrays.
 * @param {...args} Array
 * @returns Object
 * @since 1.0.0
 * @section
 * @example
 *  merge({a: 1, b: 2}, {c: 3, d: 4}, {e: 5, f: 6}, null, [])
 *  // => {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}
 */
const mergeSafe = (...args: any[]) => {
  const mergeArgs = args.filter((arr) => isObject(arr) && !Array.isArray(arr));
  return merge(...mergeArgs);
};

export default mergeSafe;
