function Object() {

  // 1. Creating an Object
  let student = {
    name: "Hardik",
    age: 23,
    branch: "CSE",
    marks: 85
  };

  // 2. Accessing Object Properties
  let name = student.name;
  let branch = student["branch"];

  // 3. Updating a Property
  student.marks = 90;

  // 4. Adding a New Property
  student.city = "Rajkot";

  // 5. Nested Object
  let studentDetails = {
    name: "Hardik",
    address: {
      city: "Rajkot",
      state: "Gujarat"
    }
  };

  // 6. Object containing an Array
  let studentSubjects = {
    name: "Hardik",
    subjects: ["JavaScript", "React", "Node"]
  };

  // 7. Array of Objects
  let students = [
    { name: "Neha", marks: 75 },
    { name: "Avesh", marks: 82 },
    { name: "Hardik", marks: 91 }
  ];

  return (
    <>
      <h1>JavaScript Objects in React</h1>

      {/* Basic Object */}
      <h2>Student Details</h2>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Branch: {student.branch}</p>
      <p>Marks: {student.marks}</p>
      <p>City: {student.city}</p>

      {/* Dot and Bracket Notation */}
      <h2>Accessing Properties</h2>

      <p>Name using dot notation: {name}</p>
      <p>Branch using bracket notation: {branch}</p>

      {/* Nested Object */}
      <h2>Nested Object</h2>

      <p>City: {studentDetails.address.city}</p>
      <p>State: {studentDetails.address.state}</p>

      {/* Object with Array */}
      <h2>Subjects</h2>

      <ul>
        {studentSubjects.subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>

      {/* Array of Objects */}
      <h2>Students List</h2>

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.marks}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Object;