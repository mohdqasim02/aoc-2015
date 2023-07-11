const fs = require("fs");
const { countLiteralCharacters, countInMemoryCharacters } = require("./src/matchsticks");

const readFile = (filePath) => fs.readFileSync(filePath, "utf-8");

const main = () => {
  const strings = readFile("./resources/input.txt").split("\n");
  const literalLength = countLiteralCharacters(strings);
  const inMemoryLength = countInMemoryCharacters(strings);

  console.log("Difference between literal length and in-memory length is:", literalLength - inMemoryLength);
}

main();