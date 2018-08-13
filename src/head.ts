/**
 * @name head
 * @description Returns the first element in an array or undefined
 * @param {arr} Array
 * @returns any
 * @since 1.0.0
 * @section
 * @example
 *  head([1, 2, 3])
 *  // => 1
 *  head([])
 *  // => undefined
 */
const head = (arr: any[]) => {
  return arr != null && arr.length ? arr[0] : undefined;
};

export default head;
