const assert = require("assert");
const { describe, it } = require("node:test");
const { LightBoard } = require("../src/light-board");
const { LightBoardController } = require("../src/light-board-controller");

describe("LightBoardController", () => {
  describe("fudge", () => {
    const lightBoard = new LightBoard();
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

  describe("execute", () => {
    const lbc = new LightBoardController(new LightBoard());
    it("should give zero when all lights are unlit", () => {
      const instructions = [
        ["off", { rowStart: 0, colStart: 0 }, { rowEnd: 1, colEnd: 1 }]
      ];

      lbc.execute(instructions, 'setup');
      assert.deepStrictEqual(lbc.countLitLights(instructions), 0);
    });

    it("should fudge instruction one by one and give count of lit lights", () => {
      const instructions = [
        ["on", { rowStart: 0, colStart: 0 }, { rowEnd: 1, colEnd: 1 }],
        ["toggle", { rowStart: 7, colStart: 7 }, { rowEnd: 10, colEnd: 10 }]
      ];

      lbc.execute(instructions, 'setup');
      assert.deepStrictEqual(lbc.countLitLights(instructions), 20);
    });
  });
});