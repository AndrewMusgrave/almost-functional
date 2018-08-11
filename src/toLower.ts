/**
 * @name toLower
 * @param {text} String
 * @returns string
 * @since 1.0.0
 * @section
 * @example
 */
const toLower = (text: string) => {
  return text.replace(/[^a-zA-Z]/g, '').toLowerCase();
};

export default toLower;
