import {PlainObject} from './types';

const fromPairs = (pairsArr: [[string, any]]) => {
  const obj: PlainObject = {};

  for (const pair of pairsArr) {
    obj[pair[0]] = pair[1];
  }

  return obj;
};

export default fromPairs;
