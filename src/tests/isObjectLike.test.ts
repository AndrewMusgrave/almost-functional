import {isObjectLike} from '../../src';

describe('isObjectLike', () => {
  it('returns false if passed null', () => {
    const objectLike = isObjectLike(null);
    expect(objectLike).toBe(false);
  });

  it('returns true if passed an array', () => {
    const objectLike = isObjectLike([]);
    expect(objectLike).toBe(true);
  });

  it('returns true if passed an object', () => {
    const objectLike = isObjectLike({});
    expect(objectLike).toBe(true);
  });
});
