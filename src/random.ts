/**
 * @name random
 * @param {min} number
 * @param {max} number
 * @returns number
 * @since 1.0.0
 * @section
 * @example
 */
const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export default random;
