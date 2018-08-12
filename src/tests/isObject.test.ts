import {isObject} from '../../src';

describe('isObject', () => {
  it('returns false when passed a function', () => {
    const realFunction = isObject(isObject);
    expect(realFunction).toBe(false);
  });

  it('returns false when passed a null', () => {
    const realFunction = isObject(null);
    expect(realFunction).toBe(false);
  });

  it('returns false when passed a undefined', () => {
    const realFunction = isObject(undefined);
    expect(realFunction).toBe(false);
  });

  it('returns true when passed an array', () => {
    const realFunction = isObject([]);
    expect(realFunction).toBe(true);
  });

  it('returns true when passed a object', () => {
    const realFunction = isObject({});
    expect(realFunction).toBe(true);
  });

  it('returns false when passed a string', () => {
    const realFunction = isObject('almost-functional');
    expect(realFunction).toBe(false);
  });
});
