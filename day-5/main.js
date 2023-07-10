const fs = require("fs");
const {
  numOfNiceStrings,
  isNicerString,
  isNiceString
} = require("./src/nice-strings");


const main = () => {
  const rawText = fs.readFileSync("resources/input.txt", "utf-8");
  // PART-1
  console.log("Num of nice strings: ", numOfNiceStrings(rawText, isNiceString));

  // PART-2
  console.log("Num of nicer strings: ", numOfNiceStrings(rawText, isNicerString));
}

main();