/**
 * @name toLower
 * @description Converts a string to lower case and removes all non-alpha characters
 * @param {text} String
 * @returns string
 * @since 1.0.0
 * @section
 * @example
 * toLower('123ABc!_*&&34:"{}');
 * // => 'abc'
 */
const toLower = (text: string) => {
  return text.replace(/[^a-zA-Z]/g, '').toLowerCase();
};

export default toLower;
