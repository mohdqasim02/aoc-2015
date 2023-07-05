const fs = require("fs");

const identity = (a) => a;
const extractPattern = (text, pattern) => {
  return text.match(pattern) || [];
}

const TwinCharacter = new RegExp(/(.)\1/);
const VowelPattern = new RegExp(/[aeiou]/g);
const BadCouples = new RegExp(/ab|cd|pq|xy/g);

const isNiceString = (text) => {
  const niceStringParts = {
    vowels: extractPattern(text, VowelPattern).length >= 3,
    zeroBadCouples: extractPattern(text, BadCouples).length === 0,
    sameAdjacentLetter: extractPattern(text, TwinCharacter).length >= 1,
  }

  return Object.values(niceStringParts).every(identity);
}

const numOfNiceStrings = (strings) => {
  return strings.trim().split("\n")
    .map(isNiceString).filter(identity).length;
}

const main = () => {
  const rawText = fs.readFileSync("day-5/input.txt", "utf-8");
  // PART-1
  console.log("Num of nice strings: ", numOfNiceStrings(rawText));
}

main();

exports.isNiceString = isNiceString;
exports.numOfNiceStrings = numOfNiceStrings;