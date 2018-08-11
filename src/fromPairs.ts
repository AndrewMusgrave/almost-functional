import {PlainObject} from './types';

/**
 * @name fromPairs
 * @param {pairsArr} Array
 * @returns Object
 * @since 1.0.0
 * @section
 * @example
 */
const fromPairs = (pairsArr: [[string, any]]) => {
  const obj: PlainObject = {};

  for (const pair of pairsArr) {
    obj[pair[0]] = pair[1];
  }

  return obj;
};

export default fromPairs;
