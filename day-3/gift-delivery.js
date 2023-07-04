const fs = require("fs");

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
    if (index % 2 === 1) {
      visitedHouseCoordinates[Object.values(santaPosition)] = 1;
      move(santaPosition);
      return;
    }

    visitedHouseCoordinates[Object.values(roboSantaPosition)] = 1;
    move(roboSantaPosition);
  });

  return Object.keys(visitedHouseCoordinates).length;
}

const main = () => {
  const rawInstructions = fs.readFileSync("day-3/input.txt", "utf-8");
  const instructions = parseInstructions(rawInstructions);

  // PART-1
  console.log("Houses with atleast one gift: ", numOfVisitedHouses(instructions));

  // PART-2
  console.log("Houses with atleast one gift: ", numOfVisitedHousesIn2ndYear(instructions));
}

main();