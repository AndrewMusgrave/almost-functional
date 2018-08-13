import {PlainObject} from './types';
import isObject from './isObject';

/**
 * @name keys
 * @description Returns an array from the key values from the provided object.
 * @param {obj} Object
 * @returns Array
 * @since 1.0.0
 * @section
 * @example
 *  keys('almost-functional');
 *  // => []
 *  keys({a: 1, b: 2});
 *  // ['a', 'b']
 */
const keys = (obj: PlainObject) => {
  if (!isObject(obj) || Array.isArray(obj)) {
    return [];
  }

  return Object.keys(obj);
};

export default keys;
