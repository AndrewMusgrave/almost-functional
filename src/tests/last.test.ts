import {last} from '../../src';

describe('last', () => {
  it('returns a undefined when provided an empty array', () => {
    const end = last([]);
    expect(end).toBeUndefined();
  });

  it('returns the the last element in an array', () => {
    const end = last([1, 2, 3]);
    expect(end).toEqual(3);
  });
});
