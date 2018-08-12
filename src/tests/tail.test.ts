import {tail} from '../../src';

describe('tail', () => {
  it('returns an empty array when provided an empty array', () => {
    const end = tail([]);
    expect(end).toEqual([]);
  });

  it('returns a new array', () => {
    const arr = [1, 2, 3];
    const end = tail(arr);
    expect(arr).not.toBe(end);
  });

  it('returns all elements in an array expect the first', () => {
    const end = tail([1, 2, 3]);
    expect(end).toEqual([2, 3]);
  });
});
