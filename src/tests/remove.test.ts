import {remove} from '../../src';

describe('remove', () => {
  it('removes all arguments provided after array', () => {
    const cleanArr = remove([1, 2, 3, 4, 5, 6, 'a', 'b', 'c'], 4, 5, 6, 'c');
    expect(cleanArr).toEqual([1, 2, 3, 'a', 'b']);
  });

  it('returns a new array', () => {
    const dirtyArr = [1, 2, 3, 4, 5, 6];
    const cleanArr = remove(dirtyArr, 4, 5, 6);
    expect(cleanArr).not.toBe(dirtyArr);
  });
});
