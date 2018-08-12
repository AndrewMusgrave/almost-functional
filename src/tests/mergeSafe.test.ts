import {mergeSafe} from '../../src';

const a = 1;
const b = 2;
const c = 3;
const d = 4;
const e = 5;
const f = 6;

describe('mergeSafe', () => {
  it('removes all non objects, arrays and null', () => {
    const merged = mergeSafe(
      {a, b},
      null,
      {c, d},
      undefined,
      4,
      'hi',
      [1, 2, 3, 4],
      {e, f},
      mergeSafe,
    );
    expect(merged).toEqual({a, b, c, d, e, f});
  });
});
