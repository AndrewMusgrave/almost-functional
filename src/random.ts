/**
 * @name random
 * @description Returns a random number between min and max.
 * @param {min} number
 * @param {max} number
 * @returns number
 * @since 1.0.0
 * @section
 * @example
 * random(0, 100);
 * // => 44
 */
const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export default random;
