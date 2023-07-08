const assert = require("assert");
const { describe, it } = require("node:test");
const { Gates } = require("../src/gates");

describe("Gates", () => {
  describe("and", () => {
    it("should give the `bitwise AND (&)` of the signals of the two wires", () => {
      const gates = new Gates();

      assert.strictEqual(gates.and(5, 3), 1);
      assert.strictEqual(gates.and(5, 4), 4);
    });
  });

  describe("or", () => {
    it("should give the `bitwise OR (|)` of the signals of the two wires", () => {
      const gates = new Gates();

      assert.strictEqual(gates.or(5, 3), 7);
      assert.strictEqual(gates.or(5, 4), 5);
    });
  });

  describe("complement", () => {
    it("should give the `16-bit bitwise complement` of the signal of the wire", () => {
      const gates = new Gates();

      assert.strictEqual(gates.complement(123), 65412);
      assert.strictEqual(gates.complement(456), 65079);
    });
  });

  describe("leftShift", () => {
    it("should left shift the signal of wire by provided places", () => {
      const gates = new Gates();

      assert.strictEqual(gates.leftShift(123, 2), 492);
      assert.strictEqual(gates.leftShift(123, 3), 984);
    });
  });

  describe("rightShift", () => {
    it("should right shift the signal of wire by provided places", () => {
      const gates = new Gates();

      assert.strictEqual(gates.rightShift(456, 2), 114);
      assert.strictEqual(gates.rightShift(456, 3), 57);
    });
  });
});