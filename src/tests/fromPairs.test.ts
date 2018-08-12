import {fromPairs} from '../../src';

describe('fromPairs', () => {
  it('returns an object from key : value arrays', () => {
    const obj = fromPairs([['a', 1], ['b', 2], ['c', 3]]);
    expect(obj).toEqual({a: 1, b: 2, c: 3});
  });
});
