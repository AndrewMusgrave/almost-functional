/**
 * @name pipe
 * @param {...fns} Array
 * @returns Function
 * @since 1.0.0
 * @section
 * @example
 */
const pipe = (...fns: Function[]) => {
  return fns.reduceRight((f, g) => (...args: any[]) => f(g(...args)));
};

export default pipe;
