/**
 * @name forEach
 * @param {arr} Array
 * @param {iteratee} Function
 * @returns Function
 * @since 1.0.0
 * @section
 * @example
 */
const forEach = (arr: any[], iteratee: Function) => {
  for (let i = 0; i < arr.length; i++) {
    iteratee(arr[i]);
  }
};

export default forEach;
