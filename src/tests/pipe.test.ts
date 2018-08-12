import {pipe} from '../../src';

describe('pipe', () => {
  it('returns a function', () => {
    const composedFunction = pipe(
      () => {},
      () => {},
    );
    expect(typeof composedFunction === 'function').toBe(true);
  });

  it('passes arguments through the composed functions', () => {
    const passedArg = pipe(
      (n: number) => n,
      (n: number) => n + 1,
    )(5);
    expect(passedArg).toBe(6);
  });
});
