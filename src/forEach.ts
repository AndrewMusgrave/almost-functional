/**
 * @name forEach
 * @description Iterates over the provided array and invokes the iteratee on each element. The iteratee is provided the value, index and array.
 * @param {arr} Array
 * @param {iteratee} Function
 * @returns void
 * @since 1.0.0
 * @section
 * @example
 *  forEach([1, 2, 3], (val) => {
 *    console.log(val);
 *  });
 *  // => 1
 *  // => 2
 *  // => 3
 *
 *  forEach([1], (val, idx, arr) => {
 *    console.log(`val: ${val} - idx: ${idx} - arr: ${arr}`);
 *  });
 *  // => val: 1 - idx: 0 - arr: 1
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
