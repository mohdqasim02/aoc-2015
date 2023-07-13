const toNumber = (digits) => +digits;

const parseStartIndices = (startIndices) => {
  const [rowStart, colStart] = startIndices.split(",").map(toNumber);
  return { rowStart, colStart };
};

const parseEndIndices = (endIndices) => {
  const [rowEnd, colEnd] = endIndices.split(",").map(toNumber);
  return { rowEnd, colEnd };
};

const parseInstruction = (rawInstructions) => {
  return rawInstructions.trim().split("\n")
    .map(instruction => instruction.split(" ").slice(-4))
    .map(([command, start, _, end]) => {
      return [command, parseStartIndices(start), parseEndIndices(end)];
    });
};

exports.parseInstruction = parseInstruction;