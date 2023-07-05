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

const PairAppearingTwice = new RegExp(/(..)(.*)(\1)/g);
const SandwichLetters = new RegExp(/(.).\1/g);

const isNicerString = (text) => {
  const nicerStringParts = {
    sandwich: extractPattern(text, SandwichLetters).length >= 1,
    pair: extractPattern(text, PairAppearingTwice).length >= 1,
  }

  return Object.values(nicerStringParts).every(identity);
}

const numOfNiceStrings = (strings, isNice) => {
  return strings.trim().split("\n")
    .map(isNice).filter(identity).length;
}

const main = () => {
  const rawText = fs.readFileSync("day-5/input.txt", "utf-8");
  // PART-1
  console.log("Num of nice strings: ", numOfNiceStrings(rawText, isNiceString));

  // PART-2
  console.log("Num of nicer strings: ", numOfNiceStrings(rawText, isNicerString));
}

main();

exports.isNiceString = isNiceString;
exports.isNicerString = isNicerString;
exports.numOfNiceStrings = numOfNiceStrings;