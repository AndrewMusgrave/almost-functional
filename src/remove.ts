import {PlainObject} from './types';

const remove = (...args: any[]) => {
  const array = args[0];
  const composedArray: any[] = [];
  const pull: PlainObject = {};

  for (let i = 1; i < args.length; i++) {
    pull[args[i]] = true;
  }

  for (let i = 0; i < array.length; i++) {
    if (!pull[array[i]]) {
      composedArray.push(array[i]);
    }
  }

  return composedArray;
};

export default remove;
