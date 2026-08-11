let people = [
  { name: "A", age: 17 },
  { name: "B", age: 22 },
  { name: "C", age: 15 },
  { name: "D", age: 30 },
  { name: "E", age: 19 }
];

let result = people.filter((person) => {
  return person.age >= 18;
});

console.log(result);