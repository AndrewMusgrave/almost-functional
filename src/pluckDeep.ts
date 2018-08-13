import isObject from './isObject';
import {PlainObject} from './types';

/**
 * @name pluckDeep
 * @description Recursively searches an object for a specified keys and returns it or null.
 * @param {obj} Object
 * @returns {any}
 * @since 1.0.0
 * @section
 * @example
 * const pluckObj = pluckDeep({a: {b: {c: 1, d: {e: 'found'}}}});
 *
 * pluckObj('f');
 * // => null
 * pluckObj('e');
 * // => 'found'
 */
const pluckDeep = (obj: PlainObject): any => {
  const keys = Object.keys(obj);
  return (key: string) => {
    for (let i = 0; i < keys.length; i++) {
      const currKey = keys[i];
      if (currKey === key) {
        return obj[key];
      }

      if (isObject(obj[currKey])) {
        const plucked = pluckDeep(obj[currKey])(key);
        if (plucked) {
          return plucked;
        }
      }
    }

    return null;
  };
};

export default pluckDeep;
