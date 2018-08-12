import {flatten} from '../../src';

describe('flatten', () => {
  it('flattens an array one level deep', () => {
    const flatArr = flatten([1, 2, [3, 4, 5], [6, [7, [8, []]]]]);
    expect(flatArr).toEqual([1, 2, 3, 4, 5, 6, [7, [8, []]]]);
  });
});
