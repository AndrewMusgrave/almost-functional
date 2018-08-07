const deepFlatten = (a: any[]): any[] =>
  a.some(Array.isArray) ? deepFlatten([].concat(...a)) : a;

export default deepFlatten;
