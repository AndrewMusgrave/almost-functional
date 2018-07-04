const forEach = (arr, iteratee) => {
	for (let i = 0; i < arr.length; i++) {
  	iteratee(arr[i]);
  }
}

export default forEach;