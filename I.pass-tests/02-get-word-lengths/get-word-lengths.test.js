var wordLengths = require("./get-word-lengths");

test("Get word lengths", () => {
  expect(wordLengths(["sun", "potato", "roundabout", "pizza"])).toEqual([
    3,
    6,
    10,
    5,
  ]);
});
