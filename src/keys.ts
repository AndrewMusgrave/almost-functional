import {PlainObject} from './types';
import isObject from './isObject';

const keys = (obj: PlainObject) => {
  if (!isObject(obj) || Array.isArray(obj)) {
    return [];
  }

  return Object.keys(obj);
};

export default keys;
