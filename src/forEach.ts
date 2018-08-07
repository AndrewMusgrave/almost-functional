const forEach = (arr: any[], iteratee: Function) => {
  for (let i = 0; i < arr.length; i++) {
    iteratee(arr[i]);
  }
};

export default forEach;
