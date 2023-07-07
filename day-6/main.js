const fs = require("fs");
const { LightBoard } = require("./src/light-board");
const { parseInstruction } = require("./src/parser");
const { LightBoardController } = require("./src/light-board-controller");

const main = () => {
  const rawInstructions = fs.readFileSync("resources/instructions.txt", "utf-8");
  const instructions = parseInstruction(rawInstructions);
  const lbc = new LightBoardController(new LightBoard());

  lbc.execute(instructions, "setup");
  lbc.execute(instructions, "adjust");

  console.log("Number of lit lights:", lbc.countLitLights());
  console.log("Total Brightness of lights:", lbc.getTotalBrightness());
};

main();