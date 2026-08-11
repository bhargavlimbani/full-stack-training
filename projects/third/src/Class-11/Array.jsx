// React: Arrays and map() in JSX

function Array() {

  // 1. Creating an Array
  let students = ["Neha", "Avesh", "Hardik", "Anuj", "Deep"];
  let marks = [10, 12, 43, 54, 67];

  // 2. Accessing Array Elements
  let firstStudent = students[0];
  let secondStudent = students[1];
  let firstMark = marks[0];

  // 3. Array Properties
  // length gives the total number of elements
  let totalStudents = students.length;


  return (
    <>
      <h1>Arrays in React</h1>


      {/* ------------------------------------------------
          Basic Array Access
      ------------------------------------------------ */}

      <h2>Accessing Array Elements</h2>

      <p>First Student: {firstStudent}</p>
      <p>Second Student: {secondStudent}</p>
      <p>First Mark: {firstMark}</p>

      <p>Total Students: {totalStudents}</p>


      {/* ------------------------------------------------
          4. Rendering Array using map()
          
          map() runs a function for every element
          and returns a new array.
      ------------------------------------------------ */}

      <h2>Student List</h2>

      <ul>
        {students.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>


      {/* ------------------------------------------------
          5. Using index
      ------------------------------------------------ */}

      <h2>Students with Index</h2>

      <ul>
        {students.map((value, index) => {
          return (
            <li key={index}>
              Index: {index} - Name: {value}
            </li>
          );
        })}
      </ul>


      {/* ------------------------------------------------
          6. Performing Operation on Array Values
      ------------------------------------------------ */}

      <h2>Marks + 1</h2>

      <ul>
        {marks.map((value, index) => {
          return (
            <li key={index}>
              Student {index + 1}: {value + 1}
            </li>
          );
        })}
      </ul>


      {/* ------------------------------------------------
          7. Short Syntax of map()
      ------------------------------------------------ */}

      <h2>Short map() Syntax</h2>

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>


      {/* ------------------------------------------------
          8. Array of Objects
          
          This is commonly used in real React applications.
      ------------------------------------------------ */}

      <h2>Students Data</h2>

      <ul>
        {[
          { name: "Neha", marks: 10 },
          { name: "Avesh", marks: 12 },
          { name: "Hardik", marks: 43 },
          { name: "Anuj", marks: 54 },
          { name: "Deep", marks: 67 }
        ].map((student, index) => (
          <li key={index}>
            {student.name} - {student.marks}
          </li>
        ))}
      </ul>


      {/* ------------------------------------------------
          9. Using Multiple Properties
      ------------------------------------------------ */}

      <h2>Student Details</h2>

      <ul>
        {[
          { name: "Neha", age: 20, marks: 75 },
          { name: "Avesh", age: 21, marks: 82 },
          { name: "Hardik", age: 22, marks: 91 }
        ].map((student, index) => (
          <li key={index}>
            {student.name} | Age: {student.age} | Marks: {student.marks}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Array;