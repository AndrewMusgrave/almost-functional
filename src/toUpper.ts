/**
 * @name toUpper
 * @param {text} String
 * @returns string
 * @since 1.0.0
 * @section
 * @example
 */
const toUpper = (text: string) => {
  return text.replace(/[^a-zA-Z]/g, '').toUpperCase();
};

export default toUpper;
