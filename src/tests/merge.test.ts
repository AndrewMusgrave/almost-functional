import {merge} from '../../src';

const a = 1;
const b = 2;
const c = 3;
const d = 4;
const e = 5;
const f = 6;

describe('merge', () => {
  it('merges any number of objects into a single object', () => {
    const merged = merge({a, b}, {c, d}, {e, f});
    expect(merged).toEqual({a, b, c, d, e, f});
  });

  it('returns a new object', () => {
    const obj = {a, b};
    const merged = merge(obj);
    expect(merged).not.toBe(obj);
  });
});
