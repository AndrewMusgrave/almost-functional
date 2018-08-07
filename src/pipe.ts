const pipe = (...fns: Function[]) => {
  return fns.reduceRight((f, g) => (...args: any[]) => f(g(...args)));
};

export default pipe;
