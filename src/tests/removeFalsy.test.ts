import {removeFalsy} from '../../src';

describe('removeFalsy', () => {
  it('returns a new array', () => {
    const falsyArr: never[] = [];
    const truthyArr = removeFalsy(falsyArr);
    expect(truthyArr).not.toBe(falsyArr);
  });

  it('returns an array without falsy values', () => {
    const truthyArr = removeFalsy([
      1,
      2,
      3,
      null,
      false,
      '',
      '',
      undefined,
      0,
      NaN,
    ]);
    expect(truthyArr).toEqual([1, 2, 3]);
  });
});
