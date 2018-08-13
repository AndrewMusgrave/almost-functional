/**
 * @name isPlainObject
 * @description Checks if the value has been created by the Object constructor.
 * @param {val} any
 * @returns boolean
 * @since 1.0.0
 * @section
 * @example
 * class A {}
 * isPlainObject(new A());
 * // => false
 * isPlainObject({});
 * // => true
 */
const isPlainObject = (val: any) => {
  if (typeof val !== 'object' || val === null) {
    return false;
  }

  let proto = val;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(val) === proto;
};

export default isPlainObject;
