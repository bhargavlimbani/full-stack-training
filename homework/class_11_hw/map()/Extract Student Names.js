let students = [
  { name: "Vinay", age: 24 },
  { name: "Rahul", age: 22 },
  { name: "Aman", age: 23 },
  { name: "Neha", age: 21 }
];

let result = students.map((student) => {
  return student.name;
});

console.log(result);