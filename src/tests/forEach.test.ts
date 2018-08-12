import {forEach} from '../../src';

describe('forEach', () => {
  it('calls the iteratee on every item in the array', () => {
    const arr = [1, 2, 3];
    const inc = (n: any, i: number, a: any[]) => (a[i] = n + 1);
    forEach(arr, inc);
    expect(arr).toEqual([2, 3, 4]);
  });

  it('is passed the value', () => {
    const arr = [1];
    let value;
    const getValue = (e: any) => {
      value = e;
    };
    forEach(arr, getValue);
    expect(value).toBe(1);
  });

  it('is passed the index', () => {
    const arr = [1];
    let index;
    const getIndex = (e: any, i: number) => {
      index = i;
      return e;
    };
    forEach(arr, getIndex);
    expect(index).toBe(0);
  });

  it('is passed the array', () => {
    const arr = [1];
    let passedArr;
    const getArray = (e: any, i: number, a: any[]) => {
      passedArr = a;
      return e === i;
    };
    forEach(arr, getArray);
    expect(passedArr).toEqual(arr);
  });
});
