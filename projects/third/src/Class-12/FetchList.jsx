import students from "./list";

function FetchList() {
  // ==========================================
  // 1. map()
  // ==========================================

  // map() runs for every student
  // and returns a new array.

  let studentNames = students.map((student) => {
    return student.name;
  });

  // ==========================================
  // 2. filter()
  // ==========================================

  // filter() returns students
  // whose age is less than 30.

  let studentsBelow30 = students.filter((student) => {
    return student.age < 30;
  });

  // ==========================================
  // 3. reduce()
  // ==========================================

  // Calculate total age of all students.

  let totalAge = students.reduce((total, student) => {
    return total + student.age;
  }, 0);

  // ==========================================
  // 4. Calculate total marks
  // ==========================================

  let totalMarks = students.reduce((total, student) => {
    return total + student.marks;
  }, 0);

  // ==========================================
  // 5. Calculate average marks
  // ==========================================

  let averageMarks = totalMarks / students.length;

  // ==========================================
  // 6. filter() + map()
  // ==========================================

  // First select MCA students
  // Then get their names.

  let mcaStudentNames = students
    .filter((student) => student.branch === "MCA")
    .map((student) => student.name);

  // ==========================================
  // 7. filter() + reduce()
  // ==========================================

  // First select students below 30
  // Then calculate their total age.

  let totalAgeBelow30 = students
    .filter((student) => student.age < 30)
    .reduce((total, student) => {
      return total + student.age;
    }, 0);

  // ==========================================
  // 8. filter() + map() + reduce()
  // ==========================================

  // Select MCA students
  // Get their ages
  // Calculate total age

  let totalMCAAge = students
    .filter((student) => student.branch === "MCA")
    .map((student) => student.age)
    .reduce((total, age) => {
      return total + age;
    }, 0);

  // ==========================================
  // 9. Find highest marks
  // ==========================================

  let highestMarks = students.reduce((highest, student) => {
    if (student.marks > highest) {
      return student.marks;
    }

    return highest;
  }, 0);

  // ==========================================
  // 10. Find topper
  // ==========================================

  let topper = students.reduce((highest, student) => {
    if (student.marks > highest.marks) {
      return student;
    }

    return highest;
  }, students[0]);

  return (
    <>
      <h1>JavaScript Array Methods in React</h1>

      {/* 1. map() */}
      <h2>1. map() - All Students</h2>

      {students.map((student, index) => (
        <ul key={index}>
          <li>Name: {student.name}</li>
          <li>Branch: {student.branch}</li>
          <li>Age: {student.age}</li>
          <li>Marks: {student.marks}</li>
        </ul>
      ))}

      {/* 2. map() - Student Names */}
      <h2>2. map() - Student Names</h2>

      <ul>
        {studentNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      {/* 3. filter() */}

      <h2>3. filter() - Students Below 30</h2>

      {studentsBelow30.map((student, index) => (
        <ul key={index}>
          <li>Name: {student.name}</li>
          <li>Age: {student.age}</li>
        </ul>
      ))}

      {/* 4. reduce() */}

      <h2>4. reduce() - Total Age</h2>

      <p>Total Age: {totalAge}</p>

      {/* 5. Total Marks */}

      <h2>5. reduce() - Total Marks</h2>

      <p>Total Marks: {totalMarks}</p>

      {/* 6. Average Marks*/}

      <h2>6. Average Marks</h2>

      <p>Average Marks: {averageMarks}</p>

      {/* 7. filter() + map() */}

      <h2>7. filter() + map() - MCA Students</h2>

      <ul>
        {mcaStudentNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      {/* 8. filter() + reduce() */}

      <h2>8. filter() + reduce()</h2>

      <p>
        Total Age of Students Below 30:
        {totalAgeBelow30}
      </p>

      {/* 9. filter() + map() + reduce() */}

      <h2>9. filter() + map() + reduce()</h2>

      <p>
        Total Age of MCA Students:
        {totalMCAAge}
      </p>

      {/* 10. Highest Marks */}

      <h2>10. Highest Marks</h2>

      <p>Highest Marks: {highestMarks}</p>

      {/* 11. Topper*/}

      <h2>11. Topper</h2>

      <p>Name: {topper.name}</p>
      <p>Marks: {topper.marks}</p>
    </>
  );
}

export default FetchList;
