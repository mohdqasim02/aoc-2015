const fs = require("fs");
const { Gates } = require("./src/gates");
const { Circuit, createCircuit } = require("./src/circuit");
const { parseInstructions, updateComponent } = require("./src/components");

const readFile = () => {
  return fs.readFileSync("./resources/instructions.txt", "utf-8");
}

const main = () => {
  const instructions = readFile();
  const components = parseInstructions(instructions);
  const circuit = new Circuit(new Gates());
  const circuit2 = new Circuit(new Gates());

  createCircuit(components, circuit);

  const wireA = circuit.getWires().a;

  updateComponent(components, 'b', wireA);
  createCircuit(components, circuit2);

  console.log("Signal of wire a in part-1:", wireA);
  console.log("Signal of wire a in part-2:", circuit.getWires().a);
}

main();