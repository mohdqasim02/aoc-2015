const assert = require("assert");
const { describe, it } = require("node:test");
const { LightBoard, createGridOfLights } = require("../src/light-board");

describe("LightBoard", () => {
  describe("setLightsOn", () => {
    it("should turn On the lights only inside the given coordinates", () => {
      const gridOfLights = createGridOfLights(5, 5);
      const lightBoard = new LightBoard(gridOfLights);
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
      const gridOfLights = createGridOfLights(5, 5);
      const lightBoard = new LightBoard(gridOfLights);
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
      const gridOfLights = createGridOfLights(5, 5);
      const lightBoard = new LightBoard(gridOfLights);
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

  describe("brightenLights", () => {
    it("should brighten up the lights by one inside the given coordinates", () => {
      const gridOfLights = createGridOfLights(5, 5);
      const lightBoard = new LightBoard(gridOfLights);
      const end = { rowEnd: 1, colEnd: 1 };
      const start = { rowStart: 0, colStart: 0 };

      lightBoard.brightenLights(start, end);

      assert.strictEqual(lightBoard.board[0][0].brightness, 1);
      assert.strictEqual(lightBoard.board[0][1].brightness, 1);
      assert.strictEqual(lightBoard.board[1][0].brightness, 1);
      assert.strictEqual(lightBoard.board[1][0].brightness, 1);
      assert.strictEqual(lightBoard.board[0][2].brightness, 0);
      assert.strictEqual(lightBoard.board[1][2].brightness, 0);
    });
  });

  describe("darkenLights", () => {
    it("should darken the lights by one inside the given coordinates", () => {
      const gridOfLights = createGridOfLights(5, 5);
      const lightBoard = new LightBoard(gridOfLights);
      const end = { rowEnd: 1, colEnd: 1 };
      const start = { rowStart: 0, colStart: 0 };

      lightBoard.brightenLights(start, end);
      assert.strictEqual(lightBoard.board[0][0].brightness, 1);
      assert.strictEqual(lightBoard.board[0][1].brightness, 1);

      lightBoard.darkenLights(start, end);
      assert.strictEqual(lightBoard.board[0][0].brightness, 0);
      assert.strictEqual(lightBoard.board[0][1].brightness, 0);
    });
  });

  describe("brightenLightsTwice", () => {
    it("should brighten the lights by two inside the given coordinates", () => {
      const gridOfLights = createGridOfLights(5, 5);
      const lightBoard = new LightBoard(gridOfLights);
      const end = { rowEnd: 1, colEnd: 1 };
      const start = { rowStart: 0, colStart: 0 };

      lightBoard.brightenLightsTwice(start, end);
      assert.strictEqual(lightBoard.board[0][0].brightness, 2);
      assert.strictEqual(lightBoard.board[0][1].brightness, 2);
    });
  });
});