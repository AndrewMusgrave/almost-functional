const tail = (arr: any[]) => {
  const length = arr == null ? 0 : arr.length;

  if (!length) {
    return [];
  }

  return arr.slice(1);
};

export default tail;
