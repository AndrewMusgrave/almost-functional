/**
 * @name pipe
 * @description Composes a function that will pipe the result of the invoking function to the next function.
 * @param {...fns} Array
 * @returns Function
 * @since 1.0.0
 * @section
 * @example
 *  const square = n => n * n
 *  const mult = (a, b) => a * b
 *
 *  const multSquare = pipe(mult, square)
 *  multSquare(10, 10)
 *  // => 10000
 */
const pipe = (...fns: Function[]) => {
  return fns.reduceRight((f, g) => (...args: any[]) => f(g(...args)));
};

export default pipe;
