let students = [
  { name: "Vinay", marks: [80, 75, 90] },
  { name: "Rahul", marks: [60, 70, 65] },
  { name: "Aman", marks: [90, 85, 95] }
];

let result = students.map((student) => {
  let total = student.marks.reduce((sum, mark) => {
    return sum + mark;
  }, 0);

  return {
    name: student.name,
    total: total
  };
});

console.log(result);