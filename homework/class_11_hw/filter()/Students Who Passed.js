let students = [
  { name: "Vinay", marks: 85 },
  { name: "Rahul", marks: 32 },
  { name: "Aman", marks: 67 },
  { name: "Neha", marks: 28 },
  { name: "Priya", marks: 91 }
];

let result = students.filter((student) => {
  return student.marks >= 50;
});

console.log(result);