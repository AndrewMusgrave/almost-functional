import {compose} from '../../src';

describe('compose', () => {
  it('returns a function', () => {
    const composedFunction = compose(
      () => {},
      () => {},
    );
    expect(typeof composedFunction === 'function').toBe(true);
  });

  it('passes arguments through the composed functions', () => {
    const passedArg = compose(
      (n: number) => n + 1,
      (n: number) => n,
    )(5);
    expect(passedArg).toBe(6);
  });
});
