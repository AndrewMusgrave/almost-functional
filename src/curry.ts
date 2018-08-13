/**
 * @name curry
 * @description Returns a curried function that is equal to the provided function. Arguments of the curried function do not need to be provided at the same time.
 * @param {fn} Function
 * @returns any
 * @since 1.0.0
 * @section
 * @example
 *  const sumFive = curry(
 *   (a: number, b: number, c: number, d: number, e: number) => a + b + c + d + e,
 *  )
 *
 * sumFive(1)(1)(1)(1)(1)
 * // => 5
 * sumFive(1, 1, 1, 1, 1)
 * // => 5
 * sumFive(1, 1)(1, 1, 1, 1)
 * // => 5
 */
const curry = (fn: Function) => (...args: any[]) =>
  args.length >= fn.length ? fn(...args) : curry(fn.bind(this, ...args));

export default curry;
