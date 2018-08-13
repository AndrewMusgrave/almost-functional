import {PlainObject} from './types';

/**
 * @name merge
 * @description Merges the arguments provided.
 * @param {...args} Array
 * @returns Object
 * @since 1.0.0
 * @section
 * @example
 *  merge({a: 1, b: 2}, {c: 3, d: 4}, {e: 5, f: 6})
 *  // => {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}
 */
const merge = (...args: PlainObject[]) =>
  args.reduce((acc: PlainObject, obj: PlainObject) => ({...acc, ...obj}), {});

export default merge;
