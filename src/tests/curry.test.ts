import {curry} from '../../src';

const sumFive = curry(
  (a: number, b: number, c: number, d: number, e: number) => a + b + c + d + e,
);

describe('curry', () => {
  it('returns a function if all the arguments are not supplied', () => {
    const sum = sumFive(1);
    expect(typeof sum === 'function').toBe(true);
  });

  it('returns the result if more arguments are supplied', () => {
    const sum = sumFive(1)(1)(1)(1)(1);
    expect(sum).toBe(5);
  });

  it('supplies all the arguments to the function', () => {
    const sum = sumFive(1, 1, 1, 1, 1);
    expect(sum).toBe(5);
  });
});
