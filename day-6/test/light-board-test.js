const assert = require("assert");
const { describe, it } = require("node:test");
const { LightBoard } = require("../src/light-board");

describe("LightBoard", () => {
  describe("turnOn", () => {
    it("should turnOn the light at a given location", () => {
      const lightBoard = new LightBoard();
      const lightPosition = { x: 0, y: 0 };

      lightBoard.turnOn(lightPosition);
      assert.strictEqual(lightBoard.isLitAt(lightPosition), true);
    });
  });

  describe("turnOff", () => {
    it("should turnOff the light at a given location", () => {
      const lightBoard = new LightBoard();
      const lightPosition = { x: 0, y: 0 };

      lightBoard.turnOff(lightPosition);
      assert.strictEqual(lightBoard.isLitAt(lightPosition), false);
    });
  });

  describe("toggle", () => {
    it("should turnOff the light at a given location if it is on", () => {
      const lightBoard = new LightBoard();
      const lightPosition = { x: 0, y: 0 };

      lightBoard.turnOn(lightPosition);
      lightBoard.toggle(lightPosition);
      assert.strictEqual(lightBoard.isLitAt(lightPosition), false);
    });

    it("should turnOn the light at a given location if it is off", () => {
      const lightBoard = new LightBoard();
      const lightPosition = { x: 0, y: 0 };

      lightBoard.toggle(lightPosition);
      assert.strictEqual(lightBoard.isLitAt(lightPosition), true);
    });
  });
});