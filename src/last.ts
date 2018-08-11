/**
 * @name last
 * @param {...args} Array
 * @returns any
 * @since 1.0.0
 * @section
 * @example
 */
const last = (arr: any[]) => {
  return arr != null && arr.length ? arr[arr.length - 1] : undefined;
};

export default last;
