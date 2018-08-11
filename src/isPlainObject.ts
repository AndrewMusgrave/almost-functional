/**
 * @name isPlainObject
 * @param {obj} Object
 * @returns boolean
 * @since 1.0.0
 * @section
 * @example
 */
const isPlainObject = (obj: {}) => {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
};

export default isPlainObject;
