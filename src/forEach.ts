/**
 * @name forEach
 * @param {arr} Array
 * @param {iteratee} Function
 * @returns Function
 * @since 1.0.0
 * @section
 * @example
 */
const forEach = (
  arr: any[],
  iteratee: (val: any, idx: number, arr: any[]) => void,
) => {
  for (let i = 0; i < arr.length; i++) {
    iteratee(arr[i], i, arr);
  }
};

export default forEach;
