const identity = (a) => a;
const extractPattern = (text, pattern) => {
  return text.match(pattern) || [];
};

const isNiceString = (text) => {
  const TwinCharacter = new RegExp(/(.)\1/);
  const VowelPattern = new RegExp(/[aeiou]/g);
  const BadCouples = new RegExp(/ab|cd|pq|xy/g);
  const vowels = extractPattern(text, VowelPattern).length >= 3;
  const zeroBadCouples = extractPattern(text, BadCouples).length === 0;
  const sameAdjacentLetter = extractPattern(text, TwinCharacter).length >= 1;

  return vowels && zeroBadCouples && sameAdjacentLetter;
};

const isNicerString = (text) => {
  const SandwichLetters = new RegExp(/(.).\1/g);
  const PairAppearingTwice = new RegExp(/(..)(.*)(\1)/g);
  const sandwich = extractPattern(text, SandwichLetters).length >= 1;
  const pair = extractPattern(text, PairAppearingTwice).length >= 1;

  return sandwich && pair;
};

const numOfNiceStrings = (strings, isNice) => {
  return strings.trim().split("\n")
    .map(isNice).filter(identity).length;
};

exports.isNiceString = isNiceString;
exports.isNicerString = isNicerString;
exports.numOfNiceStrings = numOfNiceStrings;