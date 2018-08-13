import {PlainObject} from './types';

/**
 * @name remove
 * @description Removes all provided elements from the array.
 * @param {...args} Array
 * @returns Array
 * @since 1.0.0
 * @section
 * @example
 * remove([1, 2, 3, 4], 1, 2, 3);
 * // => [4]
 * remove(['a', 2, 'b', 4], 1, 2, 'b');
 * // => ['a', 4]
 */
const remove = (...args: any[]) => {
  const array = args[0];
  const composedArray: any[] = [];
  const pull: PlainObject = {};

  for (let i = 1; i < args.length; i++) {
    pull[args[i]] = true;
  }

  for (let i = 0; i < array.length; i++) {
    if (!pull[array[i]]) {
      composedArray.push(array[i]);
    }
  }

  return composedArray;
};

export default remove;
