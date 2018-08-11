import isObject from './isObject';
import merge from './merge';

/**
 * @name mergeSafe
 * @param {...args} Array
 * @returns Object
 * @since 1.0.0
 * @section
 * @example
 */
const mergeSafe = (...args: any[]) => {
  const mergeArgs = args.filter((arr) => isObject(arr) && !Array.isArray(arr));
  return merge(...mergeArgs);
};

export default mergeSafe;
