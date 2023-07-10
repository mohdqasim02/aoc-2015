const assert = require("assert");
const { describe, it } = require("node:test");
const {
  isNiceString,
  numOfNiceStrings,
  isNicerString
} = require("../src/nice-strings");

describe("niceStrings", () => {
  describe("isNiceString", () => {
    it("should give true if the text has atleast three vowels, atleast one letter that appears twice in a row and does not have any of these strings ab, cd, pq, or xy", () => {
      assert.strictEqual(isNiceString('aaa'), true);
    });

    it("should give false if the text does not have atleast 3 vowels", () => {
      assert.strictEqual(isNiceString('abba'), false);
    });

    it("should give false if the text does not have any one character repeating consecutively", () => {
      assert.strictEqual(isNiceString('jabar'), false);
    });

    it("should give false if the text does have any of the following strings 'ab', 'cd', 'pq', 'xy'", () => {
      assert.strictEqual(isNiceString('aaaxy'), false);
    });
  });

  describe("isNicerString", () => {
    it("should give true if the text has a pair appearing at least twice without overlapping and it contains at least one sandwich letters", () => {
      assert.strictEqual(isNicerString('qjhvhtzxzqqjkmpb'), true);
    });

    it("should give false if the text does have any sandwich letters", () => {
      assert.strictEqual(isNicerString('aaa'), false);
    });

    it("should give false if the text does have any pair appearing twice", () => {
      assert.strictEqual(isNicerString('aaya'), false);
    });
  });

  describe("numOfNiceStrings", () => {
    it("should give the total number of nice strings present in a list of strings", () => {
      const strings = 'aaa\nbcde\naieoo\naiexxy';
      assert.strictEqual(numOfNiceStrings(strings, isNiceString), 2);
    });

    it("should give zero if no nice strings are present", () => {
      const strings = 'aba\nbcde\naieoco\naiexxy';
      assert.strictEqual(numOfNiceStrings(strings, isNiceString), 0);
    });
  });
});