const sum = (a, b) => a + b;

const countLiteralCharacters = (strings) => {
  return strings.map(str => str.length).reduce(sum, 0);
}

module.exports = {
  countLiteralCharacters
}