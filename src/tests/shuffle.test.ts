import {shuffle} from '../../src';

describe('shuffle', () => {
  it('shuffles the array', () => {
    /**
     * #prayerhands
     * Don't be flakey
     */
    const arr = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
    ];
    const shuffled = shuffle(arr);
    expect(arr).not.toEqual(shuffled);
  });

  it('returns a new array', () => {
    const arr = [1, 2, 3];
    const shuffled = shuffle(arr);
    expect(arr).not.toBe(shuffled);
  });
});
