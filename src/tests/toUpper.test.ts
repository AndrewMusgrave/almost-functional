import {toUpper} from '../../src';

describe('toUpper', () => {
  it('returns the string in upper case', () => {
    const lowerCase = toUpper('abc');
    expect(lowerCase).toBe('ABC');
  });

  it('removes all non-alpha characters', () => {
    const lowerCase = toUpper('123abC!_*&&34:"{}');
    expect(lowerCase).toBe('ABC');
  });
});
