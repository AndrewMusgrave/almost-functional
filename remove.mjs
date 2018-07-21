const remove = (...args) => {
	const array = args[0];
  const composedArray = [];
  const pull = {}
  
  for (let i = 1;i < args.length;i++){
  	pull[args[i]] = true
  }

  for (let i = 0;i<array.length;i++){
  	if(!pull[array[i]]) {
    	composedArray.push(array[i]);
    }
  }
  
  return composedArray;
}

export default remove;