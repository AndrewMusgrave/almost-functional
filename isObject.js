import isFunction from './isFunction';

const isObject = (obj) => {
    return obj !== null && !isFunction(obj) && typeof obj === 'object'
  }