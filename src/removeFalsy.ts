/**
 * @name removeFalsy
 * @param {arr} Array
 * @returns Array
 * @since 1.0.0
 * @section
 * @example
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
