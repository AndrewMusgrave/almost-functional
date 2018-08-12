import {isPlainObject} from '../../src';

describe('isPlainObject', () => {
  it('returns true for objects created b the object constructor', () => {
    const isObjectPlain = isPlainObject({});
    expect(isObjectPlain).toBe(true);
  });

  it('returns false for objects not created with the object constructor', () => {
    class A {}
    const isObjectPlain = isPlainObject(new A());
    expect(isObjectPlain).toBe(false);
  });

  it('returns false for arrays', () => {
    const isObjectPlain = isPlainObject([]);
    expect(isObjectPlain).toBe(false);
  });

  it('returns false for null', () => {
    const isObjectPlain = isPlainObject(null);
    expect(isObjectPlain).toBe(false);
  });
});
