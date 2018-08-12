import {head} from '../../src';

describe('head', () => {
  it('returns will return undefined if passed an empty array', () => {
    const first = head([]);
    expect(first).toBeUndefined();
  });

  it('returns will return the first element in an array', () => {
    const first = head([1, 2, 3]);
    expect(first).toBe(1);
  });
});
