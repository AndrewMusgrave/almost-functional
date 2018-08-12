import {flattenDeep} from '../../src';

describe('flattenDeep', () => {
  it('flattens an array any levels deep', () => {
    const flatArr = flattenDeep([1, 2, [3, 4, 5], [6, [7, [8, []]]]]);
    expect(flatArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
