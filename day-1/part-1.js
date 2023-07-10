const fs = require("fs");

const toDirection = (instruction) => instruction === "(" ? 1 : -1;
const sum = (a, b) => a + b;

const finalFloor = (instructions) => {
  return instructions.reduce(sum, 0);
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
  const rawText = fs.readFileSync("./input.txt", "utf-8");
  const directions = rawText.trim().split("").map(toDirection);

  // PART-1
  console.log("Final floor:", finalFloor(directions));

  // PART-2
  console.log("Basement index:", instructionPositionForBasement(directions));
}

main();