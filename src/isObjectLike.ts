const isObjectLike = (val: any) => {
  return val !== null && typeof val === 'object';
};

export default isObjectLike;
