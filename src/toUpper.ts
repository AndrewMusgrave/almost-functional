/**
 * @name toUpper
 * @description Converts a string to upper case and removes all non-alpha characters
 * @param {text} String
 * @returns string
 * @since 1.0.0
 * @section
 * @example
 * toUpper('--foo-bar');
 * // => FOOBAR
 */
const toUpper = (text: string) => {
  return text.replace(/[^a-zA-Z]/g, '').toUpperCase();
};

export default toUpper;
