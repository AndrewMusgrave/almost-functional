const curry = (fn: Function) => (...args: any[]) =>
  args.length >= fn.length ? fn(...args) : curry(fn.bind(this, ...args));

export default curry;
