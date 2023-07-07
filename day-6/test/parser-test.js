const assert = require("assert");
const { describe, it } = require("node:test");
const { parseInstruction } = require("../src/parser");

describe("Parser", () => {
  describe("parseInstruction", () => {
    it("should give toggle, start and end when a raw instruction is given", () => {
      const rawInstruction = "toggle 461,550 through 564,900";
      const start = { rowStart: 461, colStart: 550 };
      const end = { rowEnd: 564, colEnd: 900 };
      const actual = parseInstruction(rawInstruction);
      const expected = [["toggle", start, end]];

      assert.deepStrictEqual(actual, expected);
    });

    it("should give on, start and end when a raw instruction is given", () => {
      const rawInstruction = "turn on 461,550 through 564,900";
      const start = { rowStart: 461, colStart: 550 };
      const end = { rowEnd: 564, colEnd: 900 };
      const actual = parseInstruction(rawInstruction);
      const expected = [["on", start, end]];

      assert.deepStrictEqual(actual, expected);
    });

    it("should give off, start and end when a raw instruction is given", () => {
      const rawInstruction = "turn off 461,550 through 564,900";
      const start = { rowStart: 461, colStart: 550 };
      const end = { rowEnd: 564, colEnd: 900 };
      const actual = parseInstruction(rawInstruction);
      const expected = [["off", start, end]];

      assert.deepStrictEqual(actual, expected);
    });

    it("should give command, start and end when a raw instruction is given", () => {
      const rawInstructions = "turn on 461,550 through 564,900\nturn off 461,550 through 564,900\ntoggle 461,550 through 564,900";
      const start = { rowStart: 461, colStart: 550 };
      const end = { rowEnd: 564, colEnd: 900 };
      const actual = parseInstruction(rawInstructions);
      const expected = [
        ["on", start, end],
        ["off", start, end],
        ["toggle", start, end],
      ];

      assert.deepStrictEqual(actual, expected);
    });
  });
});