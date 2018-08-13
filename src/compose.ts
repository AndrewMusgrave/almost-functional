/**
 * @name compose
 * @description Composes a function that will return the result of invoking the functions in succession where the return value of the previous function is supplied to the next
 * @param {...fns} Array
 * @returns Function
 * @since 1.0.0
 * @section
 * @example
 *  const square = n => n * n
 *  const mult = (a, b) => a * b
 *
 *  const multSquare = compose(square, mult)
 *  multSquare(10, 10)
 *  // => 10000
 */
const compose = (...fns: Function[]) => {
  return fns.reduce((f, g) => (...args: any[]) => f(g(...args)));
};

export default compose;
