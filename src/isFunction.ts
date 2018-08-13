/**
 * @name isFunction
 * @description Checks if the value is a function
 * @param {val} any
 * @returns boolean
 * @since 1.0.0
 * @section
 * @example
 *  isFunction(() => {})
 *  // => true
 *  isFunction({})
 *  // => false
 */
const isFunction = (val: any) => {
  return typeof val === 'function';
};

export default isFunction;
