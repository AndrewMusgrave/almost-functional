/**
 * @name shuffle
 * @description Returns a new array, shuffled.
 * @param {list} Array
 * @returns Array
 * @since 1.0.0
 * @section
 * @example
 *  shuffle([1,2,3,4,5])
 *  // => [2,1,5,3,4]
 *  shuffle([1,2,3,4,5])
 *  // => [4,5,1,2,3]
 */
const shuffle = (list: any[]) => {
  const array = list.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

export default shuffle;
