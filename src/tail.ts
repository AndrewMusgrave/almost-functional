/**
 * @name tail
 * @param {arr} Array
 * @returns Array
 * @since 1.0.0
 * @section
 * @example
 */
const tail = (arr: any[]) => {
  const length = arr == null ? 0 : arr.length;

  if (!length) {
    return [];
  }

  return arr.slice(1);
};

export default tail;
