const sum = (a, b) => a + b;

const countLiteralCharacters = (strings) => {
  return strings.map(str => str.length).reduce(sum, 0);
}

const countInMemoryCharacters = (strings) => {
  return strings.map(str => eval(str).length).reduce(sum, 0);
}

const countEncodedCharacters = (strings) => {
  return strings.map(str => {
    const encodedString = str.replace(/(\\)/g, '\\$1').replace(/"/g, '\\"');
    return encodedString.length + 2;
  }).reduce(sum, 0);
}
module.exports = {
  countLiteralCharacters,
  countInMemoryCharacters,
  countEncodedCharacters
}