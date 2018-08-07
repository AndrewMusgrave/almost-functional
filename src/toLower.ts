const toLower = (text: string) => {
  return text.replace(/[^a-zA-Z]/g, '').toLowerCase();
};

export default toLower;
