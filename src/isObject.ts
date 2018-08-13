import isFunction from './isFunction';

/**
 * @name isObject
 * @description Checks if the value is a object
 * @param {val} any
 * @returns boolean
 * @since 1.0.0
 * @section
 * @example
 *  isObject({})
 *  // => true
 *  isObject(null)
 *  // => false
 *  isObject(() => {})
 *  // => false
 */
const isObject = (val: any) => {
  return val !== null && !isFunction(val) && typeof val === 'object';
};

export default isObject;
