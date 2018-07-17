const deepFlatten = a => a.some(Array.isArray)
  ? deepFlatten([].concat(...a))
  : a;

export default deepFlatten;