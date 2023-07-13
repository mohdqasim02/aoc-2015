const fs = require("fs");
const { countLiteralCharacters, countInMemoryCharacters, countEncodedCharacters } = require("./src/matchsticks");

const readFile = (filePath) => fs.readFileSync(filePath, "utf-8");

const main = () => {
  const strings = readFile("./resources/input.txt").split("\n");
  const literalLength = countLiteralCharacters(strings);
  const inMemoryLength = countInMemoryCharacters(strings);
  const encodedLength = countEncodedCharacters(strings);

  // PART-1
  console.log("Difference between literal length and in-memory length is:", literalLength - inMemoryLength);

  // PART-2
  console.log("Difference between literal length and encoded length is:", encodedLength - literalLength);
};

main();