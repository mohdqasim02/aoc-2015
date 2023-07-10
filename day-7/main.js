const fs = require("fs");
const { parseInstructions } = require("./src/components");
const { Circuit, createCircuit } = require("./src/circuit");
const { Gates } = require("./src/gates");

const readFile = () => {
  return fs.readFileSync("./resources/instructions.txt", "utf-8");
}

const main = () => {
  const instructions = readFile();
  const components = parseInstructions(instructions);
  const circuit = new Circuit(new Gates());

  createCircuit(components, circuit);
  const wires = circuit.getWires();
  console.log("Signal of wire a:", wires.a);
}

main();