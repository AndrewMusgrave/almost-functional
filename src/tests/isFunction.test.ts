import {isFunction} from '../../src';

describe('isFunction', () => {
  it('returns true when passed a function', () => {
    const realFunction = isFunction(isFunction);
    expect(realFunction).toBe(true);
  });

  it('returns false when passed a null', () => {
    const realFunction = isFunction(null);
    expect(realFunction).toBe(false);
  });

  it('returns false when passed a undefined', () => {
    const realFunction = isFunction(undefined);
    expect(realFunction).toBe(false);
  });

  it('returns false when passed an array', () => {
    const realFunction = isFunction([]);
    expect(realFunction).toBe(false);
  });

  it('returns false when passed a object', () => {
    const realFunction = isFunction({});
    expect(realFunction).toBe(false);
  });

  it('returns false when passed a string', () => {
    const realFunction = isFunction('almost-functional');
    expect(realFunction).toBe(false);
  });
});
