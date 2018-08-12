import {pluckDeep} from '../../src';

describe('pluckDeep', () => {
  it('returns a plucked value from one level deep', () => {
    const pluck = pluckDeep({a: 1, b: 2});
    const val = pluck('a');
    expect(val).toBe(1);
  });

  it('returns a plucked value from any level deep', () => {
    const pluck = pluckDeep({a: 1, b: 2, c: {d: {e: {}, f: {g: 3}}}});
    const val = pluck('g');
    expect(val).toBe(3);
  });

  it('returns null if no match is found', () => {
    const pluck = pluckDeep({});
    const val = pluck('a');
    expect(val).toBe(null);
  });
});
