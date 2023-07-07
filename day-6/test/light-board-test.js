const assert = require("assert");
const { describe, it } = require("node:test");
const { LightBoard } = require("../src/light-board");

describe("LightBoard", () => {
  describe("setLightsOn", () => {
    it("should turn On the lights only inside the given coordinates", () => {
      const lightBoard = new LightBoard();
      const end = { rowEnd: 1, colEnd: 1 };
      const start = { rowStart: 0, colStart: 0 };

      lightBoard.setLightsOn(start, end);

      assert.strictEqual(lightBoard.board[0][0].isLit, true);
      assert.strictEqual(lightBoard.board[0][1].isLit, true);
      assert.strictEqual(lightBoard.board[1][0].isLit, true);
      assert.strictEqual(lightBoard.board[1][0].isLit, true);
      assert.strictEqual(lightBoard.board[0][2].isLit, false);
      assert.strictEqual(lightBoard.board[1][2].isLit, false);
    });
  });

  describe("setLightsOff", () => {
    it("should turn Off the lights only inside the given coordinates", () => {
      const lightBoard = new LightBoard();
      const end = { rowEnd: 0, colEnd: 1 };
      const start = { rowStart: 0, colStart: 0 };

      lightBoard.setLightsOn(start, end);
      assert.strictEqual(lightBoard.board[0][0].isLit, true);
      assert.strictEqual(lightBoard.board[0][1].isLit, true);

      lightBoard.setLightsOff(start, end);
      assert.strictEqual(lightBoard.board[0][0].isLit, false);
      assert.strictEqual(lightBoard.board[0][1].isLit, false);
    });
  });

  describe("toggleLights", () => {
    it("should toggle the lights only inside the given coordinates", () => {
      const lightBoard = new LightBoard();
      const end = { rowEnd: 0, colEnd: 1 };
      const start = { rowStart: 0, colStart: 0 };

      lightBoard.toggleLights(start, end);
      assert.strictEqual(lightBoard.board[0][0].isLit, true);
      assert.strictEqual(lightBoard.board[0][1].isLit, true);

      lightBoard.toggleLights(start, end);
      assert.strictEqual(lightBoard.board[0][0].isLit, false);
      assert.strictEqual(lightBoard.board[0][1].isLit, false);
    });
  });
});