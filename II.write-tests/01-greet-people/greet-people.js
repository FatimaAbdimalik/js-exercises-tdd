function greetPeople(people) {
  var greeting = "Hello";
  let arr = [];
  people.forEach((person) => arr.push(`${greeting} ${person}`));

  return arr;
}

module.exports = greetPeople;

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
