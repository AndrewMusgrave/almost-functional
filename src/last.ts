/**
 * @name last
 * @description Returns the last element of an array or undefined
 * @param {...args} Array
 * @returns any
 * @since 1.0.0
 * @section
 * @example
 * last([]);
 * // => undefined
 * last([1, 2, 3]);
 * // => 3
 */
const last = (arr: any[]) => {
  return arr != null && arr.length ? arr[arr.length - 1] : undefined;
};

export default last;
