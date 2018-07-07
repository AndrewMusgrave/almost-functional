const deepFlatten = a => a.some(Array.isArray)
  ? flatten([].concat(...a))
  : a;

export default deepFlatten;