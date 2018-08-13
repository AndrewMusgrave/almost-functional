import {PlainObject} from './types';

/**
 * @name fromPairs
 * @description Returns an object created from the key:value pairs provided.
 * @param {pairsArr} Array
 * @returns Object
 * @since 1.0.0
 * @section
 * @example
 *  fromPairs(['a', 1], ['b', 2])
 *  // => {a: 1, b: 2}
 */
const fromPairs = (pairsArr: [string, any][]) => {
  const obj: PlainObject = {};

  for (const pair of pairsArr) {
    obj[pair[0]] = pair[1];
  }

  return obj;
};

export default fromPairs;
