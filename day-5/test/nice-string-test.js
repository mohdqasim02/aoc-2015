const assert = require("assert");
const { describe, it } = require("node:test");
const { isNiceString } = require("../nice-strings");

describe("niceStrings", () => {
  describe("isNiceString", () => {
    it("should give true if the text has atleast three vowels, atleast one letter that appears twice in a row and does not have any of these strings ab, cd, pq, or xy", () => {
      assert.strictEqual(isNiceString('aaa'), true);
    });

    it("should give false if the text does not meet all three criteria", () => {
      assert.strictEqual(isNiceString('aaa'), false);
    });
  });
});