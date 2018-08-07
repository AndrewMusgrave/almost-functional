const toUpper = (text: string) => {
  return text.replace(/[^a-zA-Z]/g, '').toUpperCase();
};

export default toUpper;
