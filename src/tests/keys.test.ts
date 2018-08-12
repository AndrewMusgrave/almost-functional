import {keys} from '../../src';

describe('keys', () => {
  it('returns an empty array if an array was passed as an argument', () => {
    const objKeys = keys([]);
    expect(objKeys).toEqual([]);
  });

  it('returns the object keys', () => {
    const objKeys = keys({a: 1, b: 2, c: 3});
    expect(objKeys).toEqual(['a', 'b', 'c']);
  });
});
