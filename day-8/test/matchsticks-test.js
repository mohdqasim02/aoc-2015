const assert = require("assert");
const { describe, it } = require("node:test");
const {
  countLiteralCharacters,
  countInMemoryCharacters
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
    it("should count each character as one character", () => {
      const strings = [
        `""`,
        `"abc"`,
        `"\\x27"`,
        `"aaa\\"aaa"`
      ];

      assert.strictEqual(countInMemoryCharacters(strings), 11);
    });
  });
});