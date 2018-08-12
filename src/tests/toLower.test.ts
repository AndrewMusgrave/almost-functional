import {toLower} from '../../src';

describe('toLower', () => {
  it('returns the string in lower case', () => {
    const lowerCase = toLower('ABC');
    expect(lowerCase).toBe('abc');
  });

  it('removes all non-alpha characters', () => {
    const lowerCase = toLower('123ABc!_*&&34:"{}');
    expect(lowerCase).toBe('abc');
  });
});
