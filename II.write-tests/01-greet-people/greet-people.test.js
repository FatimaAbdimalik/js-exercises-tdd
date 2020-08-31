const greetPeople = require("./greet-people.js");
test("print list of names prefixed with Hello", () => {
  expect(greetPeople(["Irina", "Ashleigh", "Etza"])).toEqual([
    "Hello Irina",
    "Hello Ashleigh",
    "Hello Etza",
  ]);
});
// Arrange
// Act
// Assert
