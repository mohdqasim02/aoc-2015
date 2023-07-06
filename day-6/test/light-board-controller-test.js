const assert = require("assert");
const { describe, it } = require("node:test");
const { LightBoard } = require("../src/light-board");
const { LightBoardController } = require("../src/light-board-controller");

describe("LightBoardController", () => {
  describe("isBoardAreaLit", () => {
    it("should give true if all the lights are lit inside the area", () => {
      const lightBoard = new LightBoard();
      const lbc = new LightBoardController(lightBoard);
      const start = { rowStart: 0, colStart: 0 };
      const end = { rowEnd: 1, colEnd: 1 };

      lightBoard.turnOn({ x: 0, y: 0 });
      lightBoard.turnOn({ x: 0, y: 1 });
      lightBoard.turnOn({ x: 1, y: 0 });
      lightBoard.turnOn({ x: 1, y: 1 });

      const actual = lbc.isBoardAreaLit(start, end);
      const expected = true;

      assert.strictEqual(actual, expected);
    });

    it("should give false if any light is unlit inside the area", () => {
      const lightBoard = new LightBoard();
      const lbc = new LightBoardController(lightBoard);
      const start = { rowStart: 0, colStart: 0 };
      const end = { rowEnd: 1, colEnd: 1 };

      lightBoard.turnOn({ x: 0, y: 0 });
      lightBoard.turnOn({ x: 0, y: 1 });
      lightBoard.turnOn({ x: 1, y: 0 });

      const actual = lbc.isBoardAreaLit(start, end);
      const expected = false;

      assert.strictEqual(actual, expected);
    });
  });

  describe.skip("fudge", () => {
    it("should execute the given command from starting to ending position", () => {
      const lbc = new LightBoardController(new LightBoard());
      const start = { rowStart: 0, colStart: 0 };
      const end = { rowEnd: 1, colEnd: 1 };

      lbc.fudge(["on", start, end]);

      const actual = lbc.isBoardLitAt(start, end);
      const expected = true;

      assert.deepStrictEqual(actual, expected);
    });
  });
});