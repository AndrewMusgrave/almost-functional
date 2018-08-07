const compose = (...fns: Function[]) => {
  return fns.reduce((f, g) => (...args: any[]) => f(g(...args)));
};

export default compose;
