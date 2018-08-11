/**
 * @name curry
 * @param {fn} Function
 * @returns any
 * @since 1.0.0
 * @section
 * @example
 */
const curry = (fn: Function) => (...args: any[]) =>
  args.length >= fn.length ? fn(...args) : curry(fn.bind(this, ...args));

export default curry;
