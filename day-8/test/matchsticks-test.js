const assert = require("assert");
const { describe, it } = require("node:test");
const {
  countLiteralCharacters,
  countInMemoryCharacters,
  countEncodedCharacters
} = require("../src/matchsticks");

describe("matchsticks", () => {
  describe("countLiteralCharacters", () => {
    it("should count each character as one character", () => {
      const strings = [
        `""`,
        `"abc"`,
        `"\\x27"`,
        `"aaa\\"aaa"`
      ];

      assert.strictEqual(countLiteralCharacters(strings), 23);
    });
  });

  describe("countInMemoryCharacters", () => {
    it("should count character as one character based on how it is stored in the memory", () => {
      const strings = [
        `""`,
        `"abc"`,
        `"\\x27"`,
        `"aaa\\"aaa"`
      ];

      assert.strictEqual(countInMemoryCharacters(strings), 11);
    });
  });

  describe("countEncodedCharacters", () => {
    it("should count each character as one character after encoding the string", () => {
      const strings = [
        `""`,
        `"abc"`,
        `"\\x27"`,
        `"aaa\\"aaa"`
      ];

      assert.strictEqual(countEncodedCharacters(strings), 42);
    });
  });
});