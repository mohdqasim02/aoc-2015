const assert = require("assert");
const { describe, it } = require("node:test");
const { Light } = require("../src/light");

describe("Light", () => {
  describe("turnOn", () => {
    it("should turn on the light if the light is off", () => {
      const led = new Light();

      led.turnOn();
      assert.strictEqual(led.isLit, true);
    });

    it("should leave the light lit if the light is already on", () => {
      const led = new Light();

      led.turnOn();
      led.turnOn();
      assert.strictEqual(led.isLit, true);
    });
  });
});