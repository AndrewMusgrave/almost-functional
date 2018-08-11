import isFunction from './isFunction';

/**
 * @name isObject
 * @param {val} any
 * @returns boolean
 * @since 1.0.0
 * @section
 * @example
 */
const isObject = (val: any) => {
  return val !== null && !isFunction(val) && typeof val === 'object';
};

export default isObject;
