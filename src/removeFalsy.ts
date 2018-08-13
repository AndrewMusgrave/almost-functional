/**
 * @name removeFalsy
 * @description Returns a new array with all falsy (false, 0, '', "", null, undefined, or NaN) values removed.
 * @param {arr} Array
 * @returns Array
 * @since 1.0.0
 * @section
 * @example
 *  removeFalsy([1, 2, 3, false, 0, '', '', null, undefined, NaN, 'hello'])
 *  // =>  [1 , 2, 3, 'hello']
 */
const removeFalsy = (arr: any[]) => {
  const final: any[] = [];

  if (arr == null) {
    return final;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      final.push(arr[i]);
    }
  }

  return final;
};

export default removeFalsy;
