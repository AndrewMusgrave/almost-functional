import {PlainObject} from './types';

/**
 * @name merge
 * @param {...args} Array
 * @returns Object
 * @since 1.0.0
 * @section
 * @example
 */
const merge = (...args: PlainObject[]) =>
  args.reduce((acc: PlainObject, obj: PlainObject) => ({...acc, ...obj}), {});

export default merge;
