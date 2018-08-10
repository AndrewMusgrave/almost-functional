import {PlainObject} from './types';

const merge = (...args: PlainObject[]) =>
  args.reduce((acc: PlainObject, obj: PlainObject) => ({...acc, ...obj}), {});

export default merge;
