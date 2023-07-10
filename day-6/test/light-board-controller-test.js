const assert = require("assert");
const { describe, it } = require("node:test");
const { LightBoard, createGridOfLights } = require("../src/light-board");
const { LightBoardController } = require("../src/light-board-controller");

describe("LightBoardController", () => {
  describe("setUpLights", () => {
    const gridOfLights = createGridOfLights(5, 5);
    const lightBoard = new LightBoard(gridOfLights);
    const lbc = new LightBoardController(lightBoard);

    it("should turn on the lights inside an area marked by coordinates", () => {
      const start = { rowStart: 0, colStart: 0 };
      const end = { rowEnd: 1, colEnd: 1 };

      lbc.setUpLights(["on", start, end]);

      assert.strictEqual(lightBoard.board[0][0].isLit, true);
      assert.strictEqual(lightBoard.board[0][1].isLit, true);
      assert.strictEqual(lightBoard.board[1][0].isLit, true);
      assert.strictEqual(lightBoard.board[1][1].isLit, true);
    });

    it("should turn off the lights inside an area marked by coordinates", () => {
      const start = { rowStart: 0, colStart: 0 };
      const end = { rowEnd: 1, colEnd: 0 };

      lbc.setUpLights(["off", start, end]);

      assert.strictEqual(lightBoard.board[0][0].isLit, false);
      assert.strictEqual(lightBoard.board[0][1].isLit, true);
      assert.strictEqual(lightBoard.board[1][0].isLit, false);
      assert.strictEqual(lightBoard.board[1][1].isLit, true);
    });

    it("should toggle the lights inside an area marked by coordinates", () => {
      const start = { rowStart: 0, colStart: 0 };
      const end = { rowEnd: 1, colEnd: 1 };

      lbc.setUpLights(["toggle", start, end]);

      assert.strictEqual(lightBoard.board[0][0].isLit, true);
      assert.strictEqual(lightBoard.board[0][1].isLit, false);
      assert.strictEqual(lightBoard.board[1][0].isLit, true);
      assert.strictEqual(lightBoard.board[1][1].isLit, false);
    });
  });

  describe("adjustLights", () => {
    it("should increase the total brightness by one", () => {
      const gridOfLights = createGridOfLights(5, 5);
      const lightBoard = new LightBoard(gridOfLights);
      const lbc = new LightBoardController(lightBoard);
      const start = { rowStart: 0, colStart: 0 };
      const end = { rowEnd: 0, colEnd: 0 };

      lbc.adjustLights(["on", start, end]);
      assert.strictEqual(lbc.getTotalBrightness(), 1);
    });

    it("should increase the total brightness by 2000000", () => {
      const gridOfLights = createGridOfLights(5, 5);
      const lightBoard = new LightBoard(gridOfLights);
      const lbc = new LightBoardController(lightBoard);
      const start = { rowStart: 0, colStart: 0 };
      const end = { rowEnd: 4, colEnd: 4 };

      lbc.adjustLights(["toggle", start, end]);
      assert.strictEqual(lbc.getTotalBrightness(), 50);
    });

    it("should decrease the total brightness by 0", () => {
      const gridOfLights = createGridOfLights(10, 10);
      const lightBoard = new LightBoard(gridOfLights);
      const lbc = new LightBoardController(lightBoard);
      const start = { rowStart: 0, colStart: 0 };
      const end = { rowEnd: 9, colEnd: 9 };

      lbc.adjustLights(["on", start, end]);
      assert.strictEqual(lbc.getTotalBrightness(), 100);

      lbc.adjustLights(["off", start, end]);
      assert.strictEqual(lbc.getTotalBrightness(), 0);
    });
  });

  describe("execute", () => {
    const gridOfLights = createGridOfLights(11, 11);
    const lbc = new LightBoardController(new LightBoard(gridOfLights));
    it("should setup all the lights mentioned in the instruction", () => {
      const instructions = [
        ["on", { rowStart: 0, colStart: 0 }, { rowEnd: 1, colEnd: 1 }],
        ["toggle", { rowStart: 7, colStart: 7 }, { rowEnd: 10, colEnd: 10 }]
      ];

      lbc.execute(instructions, 'setup');
      assert.strictEqual(lbc.countLitLights(instructions), 20);
      assert.strictEqual(lbc.getTotalBrightness(instructions), 0);
    });

    it("should adjust brightness of lights according to the instructions", () => {
      const instructions = [
        ["on", { rowStart: 0, colStart: 0 }, { rowEnd: 1, colEnd: 1 }],
        ["toggle", { rowStart: 7, colStart: 7 }, { rowEnd: 10, colEnd: 10 }]
      ];

      lbc.execute(instructions, 'adjust');
      assert.strictEqual(lbc.countLitLights(instructions), 20);
      assert.strictEqual(lbc.getTotalBrightness(instructions), 36);
    });
  });
});