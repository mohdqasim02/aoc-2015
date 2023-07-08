const assert = require("assert");
const { describe, it, beforeEach } = require("node:test");
const { Wire } = require("../src/wire");
const { Gates } = require("../src/gates");

describe("Gates", () => {
  describe("assign", () => {
    it("should assign the signal to the wire when a wire and signal is provided", () => {
      const ab = new Wire('ab');
      const gates = new Gates();

      assert.strictEqual(ab.signal, undefined);
      gates.assign(ab, 5);
      assert.strictEqual(ab.signal, 5);
    });
  });

  describe("and", () => {
    it("should give the `bitwise AND (&)` of the signals of the two wires", () => {
      const ab = new Wire('ab');
      const cd = new Wire('cd');
      const gates = new Gates();

      gates.assign(ab, 5);
      gates.assign(cd, 3);
      assert.strictEqual(gates.and(ab, cd), 1);
    });
  });

  describe("or", () => {
    it("should give the `bitwise OR (|)` of the signals of the two wires", () => {
      const ab = new Wire('ab');
      const cd = new Wire('cd');
      const gates = new Gates();

      gates.assign(ab, 5);
      gates.assign(cd, 3);
      assert.strictEqual(gates.or(ab, cd), 7);
    });
  });

  describe("complement", () => {
    it("should give the `16-bit bitwise complement` of the signal of the wire", () => {
      const ab = new Wire('ab');
      const gates = new Gates();

      gates.assign(ab, 123);
      assert.strictEqual(gates.complement(ab), 65412);
    });
  });

  describe("leftShift", () => {
    it("should left shift the signal of wire by provided places", () => {
      const ab = new Wire('ab');
      const gates = new Gates();

      gates.assign(ab, 123);
      assert.strictEqual(gates.leftShift(ab, 2), 492);
      assert.strictEqual(gates.leftShift(ab, 3), 984);
    });
  });

  describe("rightShift", () => {
    it("should right shift the signal of wire by provided places", () => {
      const ab = new Wire('ab');
      const gates = new Gates();

      gates.assign(ab, 456);
      assert.strictEqual(gates.rightShift(ab, 2), 114);
      assert.strictEqual(gates.rightShift(ab, 3), 57);
    });
  });
});