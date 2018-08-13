/**
 * @name tail
 * @description Returns all elements of the array expect for the head
 * @param {arr} Array
 * @returns Array
 * @since 1.0.0
 * @section
 * @example
 * tail([1, 2, 3]);
 * // => [2, 3]
 */
const tail = (arr: any[]) => {
  const length = arr == null ? 0 : arr.length;

  if (!length) {
    return [];
  }

  return arr.slice(1);
};

export default tail;
