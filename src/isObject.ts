import isFunction from './isFunction';

const isObject = (obj: any) => {
  return obj !== null && !isFunction(obj) && typeof obj === 'object';
};

export default isObject;
