const fs = require("fs");
const { LightBoard } = require("./src/light-board");
const { parseInstruction } = require("./src/parser");
const { LightBoardController } = require("./src/light-board-controller");

const main = () => {
  const rawInstructions = fs.readFileSync("resources/instructions.txt", "utf-8");
  const instructions = parseInstruction(rawInstructions);
  const lbc = new LightBoardController(new LightBoard());

  lbc.execute(instructions, "setup");
  console.log("Number of lit lights:", lbc.countLitLights());
};

main();