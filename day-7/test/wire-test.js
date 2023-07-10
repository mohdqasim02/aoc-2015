const assert = require("assert");
const { describe, it } = require("node:test");
const { Wire } = require("../src/wire");

describe("Wire", () => {
  describe("hasSignal", () => {
    it("should give true when the wire is provided with a signal", () => {
      const ab = new Wire("ab", 5);
      assert.strictEqual(ab.hasSignal(), true);
    });

    it("should give false when the wire is not provided with any signal", () => {
      const ab = new Wire("ab");
      assert.strictEqual(ab.hasSignal(), false);
    });
  });
});