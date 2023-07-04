const fs = require("fs");

const parse = (rawText) => {
  return rawText.trim().split("").map(instruction => {
    if (instruction === '(') return 1;
    return -1;
  });
}

const finalFloor = (instructions) => {
  return instructions.reduce((finalPosition, currentPosition) => {
    return finalPosition + currentPosition;
  }, 0);
}

const main = () => {
  const rawText = fs.readFileSync("day-1/input.txt", "utf-8");
  const instructions = parse(rawText);
  console.log(finalFloor(instructions));
}

main();