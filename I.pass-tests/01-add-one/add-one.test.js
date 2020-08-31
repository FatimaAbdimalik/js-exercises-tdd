var addOne = require("./add-one.js");

test("Add 1 to each item in myArray", () => {
  expect(addOne([31, 57, 12, 5])).toEqual([32, 58, 13, 6]);
});
