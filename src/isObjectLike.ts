/**
 * @name isObjectLike
 * @param {val} any
 * @returns boolean
 * @since 1.0.0
 * @section
 * @example
 */
const isObjectLike = (val: any) => {
  return val !== null && typeof val === 'object';
};

export default isObjectLike;
