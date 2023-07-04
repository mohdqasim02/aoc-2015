const fs = require("fs");

const parseInstructions = (rawText) => {
  return rawText.trim().split("").map(instruction => {
    if (instruction === '(') return 1;
    return -1;
  });
}

const instructionPositionForBasement = (instructions) => {
  let floor = 0;
  for (const position in instructions) {
    floor += instructions[position];
    if (floor === -1)
      return +position + 1;
  }
}

const main = () => {
  const rawText = fs.readFileSync("day-1/input.txt", "utf-8");
  const instructions = parseInstructions(rawText);
  console.log(instructionPositionForBasement(instructions));
}

main();