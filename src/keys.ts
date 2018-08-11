import {PlainObject} from './types';
import isObject from './isObject';

/**
 * @name keys
 * @param {obj} Object
 * @returns Array
 * @since 1.0.0
 * @section
 * @example
 */
const keys = (obj: PlainObject) => {
  if (!isObject(obj) || Array.isArray(obj)) {
    return [];
  }

  return Object.keys(obj);
};

export default keys;
