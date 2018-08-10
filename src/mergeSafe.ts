import isObject from './isObject';
import merge from './merge';

const mergeSafe = (...args: any[]) => {
  const mergeArgs = args.filter((a) => isObject(a) && !Array.isArray(a));
  return merge(...mergeArgs);
};

export default mergeSafe;
