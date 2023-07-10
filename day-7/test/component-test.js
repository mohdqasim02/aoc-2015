const assert = require("assert");
const { describe, it } = require("node:test");
const { Wire } = require("../src/wire");
const { parseInstructions } = require("../src/components");

describe("components", () => {
  describe("parseInstructions", () => {
    it("should create a list of components when given instructions", () => {
      const instructions = "123 -> x" + "\n"
        + "456 -> y" + "\n"
        + "x AND y -> d" + "\n"
        + "x OR y -> e" + "\n"
        + "NOT y -> i"
      const actualComponents = parseInstructions(instructions);
      const expectedComponents = [
        {
          operation: "ASSIGN",
          inputs: [123],
          output: new Wire("x"),
        },
        {
          operation: "ASSIGN",
          inputs: [456],
          output: new Wire("y"),
        },
        {
          operation: "AND",
          inputs: [new Wire("x"), new Wire("y")],
          output: new Wire("d"),
        },
        {
          operation: "OR",
          inputs: [new Wire("x"), new Wire("y")],
          output: new Wire("e"),
        },
        {
          operation: "NOT",
          inputs: [new Wire("y")],
          output: new Wire("i"),
        }
      ];

      assert.deepStrictEqual(actualComponents, expectedComponents);
    });
  });
});