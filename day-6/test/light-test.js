const assert = require("assert");
const { describe, it } = require("node:test");
const { Light } = require("../src/light");

describe("Light", () => {
  describe("setLit", () => {
    it("should lit the light if the light is not lit", () => {
      const led = new Light();

      led.setLit();
      assert.strictEqual(led.isLit, true);
    });

    it("should leave the light lit if the light is already lit", () => {
      const led = new Light();

      led.setLit();
      led.setLit();
      assert.strictEqual(led.isLit, true);
    });
  });

  describe("setUnlit", () => {
    it("should unlit the light if the light is lit", () => {
      const led = new Light();

      led.setLit();
      led.setUnlit();
      assert.strictEqual(led.isLit, false);
    });

    it("should leave the light unlit if the light is already unlit", () => {
      const led = new Light();

      led.setUnlit();
      assert.strictEqual(led.isLit, false);
    });
  });

  describe("toggle", () => {
    it("should set light lit if light is unlit", () => {
      const led = new Light();

      led.toggle();
      assert.strictEqual(led.isLit, true);

    });

    it("should set light unlit if light is lit", () => {
      const led = new Light();

      led.setLit();
      led.toggle();
      assert.strictEqual(led.isLit, false);
    });
  });

  describe("incrementBrightness", () => {
    it("should increase the brightness of light by one", () => {
      const led = new Light();

      led.incrementBrightness();
      assert.strictEqual(led.brightness, 1);
    });
  });

  describe("decrementBrightness", () => {
    it("should decrease the brightness of light by one", () => {
      const led = new Light();

      led.incrementBrightness();
      led.decrementBrightness();
      assert.strictEqual(led.brightness, 0);
    });

    it("should decrease the brightness to a minimun of zero", () => {
      const led = new Light();

      led.decrementBrightness();
      assert.strictEqual(led.brightness, 0);
    });
  });

  describe("increaseBrightnessByTwo", () => {
    it("should increase the brightness of light by two", () => {
      const led = new Light();

      led.increaseBrightnessByTwo();
      assert.strictEqual(led.brightness, 2);
    });
  });
});