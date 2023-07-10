const fs = require("fs");

const isEven = (number) => number % 2 === 0;
const toMove = (instruction) => {
  const moves = {
    '^': (position) => position.y += 1,
    'v': (position) => position.y -= 1,
    '>': (position) => position.x += 1,
    '<': (position) => position.x -= 1,
  }

  return moves[instruction];
};

const parseInstructions = (rawInstructions) => {
  return Array.from(rawInstructions).map(toMove);
};

const numOfVisitedHouses = (instructions) => {
  const visitedHouseCoordinates = {};
  const santaPosition = { x: 0, y: 0 };

  instructions.forEach(move => {
    visitedHouseCoordinates[Object.values(santaPosition)] = 1;
    move(santaPosition);
  });

  return Object.keys(visitedHouseCoordinates).length;
}

const numOfVisitedHousesIn2ndYear = (instructions) => {
  const visitedHouseCoordinates = {};
  const santaPosition = { x: 0, y: 0 };
  const roboSantaPosition = { x: 0, y: 0 };

  instructions.forEach((move, index) => {
    const position = isEven(index) ? roboSantaPosition : santaPosition;

    visitedHouseCoordinates[Object.values(position)] = 1;
    move(position);
  });

  return Object.keys(visitedHouseCoordinates).length;
}

const main = () => {
  const rawInstructions = fs.readFileSync("./input.txt", "utf-8");
  const instructions = parseInstructions(rawInstructions);

  // PART-1
  console.log("Houses with atleast one gift in 1st year: ", numOfVisitedHouses(instructions));

  // PART-2
  console.log("Houses with atleast one gift in 2nd year: ", numOfVisitedHousesIn2ndYear(instructions));
}

main();