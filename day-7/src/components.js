const { Wire } = require("./wire");

const createComponent = (instruction) => {
  const OPERATORS = ["AND", "OR", "NOT", "LSHIFT", "RSHIFT"];
  const [source, destination] = instruction.trim().split(" -> ");
  const tokens = source.trim().split(" ");

  const component = {
    operation: "ASSIGN",
    inputs: [],
    output: new Wire(destination),
  };

  tokens.forEach(token => {
    if (OPERATORS.includes(token))
      component.operation = token;
    else if (isNaN(+token))
      component.inputs.push(new Wire(token));
    else
      component.inputs.push(+token);
  });

  return component;
};

const updateComponent = (components, wireName, signal) => {
  const component = components.find(({ output }) => output.name === wireName);
  component.inputs = [signal];
};

const parseInstructions = (instructions) => {
  return instructions.trim().split("\n")
    .map(createComponent);
};

module.exports = { parseInstructions, updateComponent };