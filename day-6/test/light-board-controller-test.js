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

  describe("isBoardAreaUnlit", () => {
    it("should give true if all the lights are unlit inside the area", () => {
      const lightBoard = new LightBoard();
      const lbc = new LightBoardController(lightBoard);
      const start = { rowStart: 0, colStart: 0 };
      const end = { rowEnd: 1, colEnd: 1 };

      const actual = lbc.isBoardAreaUnlit(start, end);
      const expected = true;

      assert.strictEqual(actual, expected);
    });

    it("should give false if any light is lit inside the area", () => {
      const lightBoard = new LightBoard();
      const lbc = new LightBoardController(lightBoard);
      const start = { rowStart: 0, colStart: 0 };
      const end = { rowEnd: 1, colEnd: 1 };

      lightBoard.turnOn({ x: 0, y: 0 });

      const actual = lbc.isBoardAreaUnlit(start, end);
      const expected = false;

      assert.strictEqual(actual, expected);
    });
  });

  describe("fudge", () => {
    it("should turn on the lights inside an area marked by coordinates", () => {
      const lbc = new LightBoardController(new LightBoard());
      const start = { rowStart: 0, colStart: 0 };
      const end = { rowEnd: 1, colEnd: 1 };

      lbc.fudge(["on", start, end]);

      const actual = lbc.isBoardAreaLit(start, end);
      const expected = true;

      assert.deepStrictEqual(actual, expected);
    });

    it("should turn off the lights inside an area marked by coordinates", () => {
      const lbc = new LightBoardController(new LightBoard());
      const start = { rowStart: 0, colStart: 0 };
      const end = { rowEnd: 1, colEnd: 1 };

      lbc.fudge(["off", start, end]);

      const actual = lbc.isBoardAreaUnlit(start, end);
      const expected = true;

      assert.deepStrictEqual(actual, expected);
    });

    it("should toggle the lights inside an area marked by coordinates", () => {
      const lbc = new LightBoardController(new LightBoard());
      const start = { rowStart: 0, colStart: 0 };
      const end = { rowEnd: 1, colEnd: 1 };

      lbc.fudge(["on", start, end]);
      lbc.fudge(["toggle", start, end]);

      const actual = lbc.isBoardAreaUnlit(start, end);
      const expected = true;

      assert.deepStrictEqual(actual, expected);
    });
  });
});