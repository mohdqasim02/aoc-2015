const fs = require("fs");

const toDirection = (instruction) => instruction === "(" ? 1 : -1;
const sum = (a, b) => a + b;

// const parseInstructions = (rawText) => {
//   return rawText.trim().split("").map(instruction => {
//     if (instruction === '(') return 1;
//     return -1;
//   });
// }

// const finalFloor = (instructions) => {
//   return instructions.reduce((finalPosition, currentPosition) => {
//     return finalPosition + currentPosition;
//   }, 0);
// }

const finalFloor = (instructions) => {
  return instructions.split("").map(toDirection).reduce(sum, 0);
}

const main = () => {
  const rawText = fs.readFileSync("day-1/input.txt", "utf-8");
  console.log(finalFloor(rawText));
}

main();