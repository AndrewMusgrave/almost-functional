/**
 * @name isObjectLike
 * @description Checks if the value is object like, which is not null and an object.
 * @param {val} any
 * @returns boolean
 * @since 1.0.0
 * @section
 * @example
 * isObjectLike(null);
 * // => false
 * isObjectLike([]);
 * // => true
 * isObjectLike({});
 * // => true
 */
const isObjectLike = (val: any) => {
  return val !== null && typeof val === 'object';
};

export default isObjectLike;
