# Objects in JavaScript and React

## 1. What is an Object?

An object is a collection of data stored in **key-value pairs**.

Example:

```js
let student = {
  name: "Hardik",
  age: 23,
  branch: "CSE",
  marks: 85
};
```

Here:

* `name` → key
* `"Hardik"` → value
* `age` → key
* `23` → value
* `branch` → key
* `"CSE"` → value
* `marks` → key
* `85` → value

An object is useful when we want to store related information together.

---

# 2. Creating an Object

Objects are created using curly braces `{}`.

```js
let student = {
  name: "Hardik",
  age: 23,
  branch: "CSE",
  marks: 85
};
```

The general syntax is:

```js
let objectName = {
  key: value,
  key: value
};
```

Example:

```js
let car = {
  brand: "BMW",
  model: "X5",
  price: 8000000
};
```

---

# 3. Accessing Object Properties

There are two common ways to access object properties:

1. Dot notation
2. Bracket notation

---

## 3.1 Dot Notation

We can access a property using `.`.

```js
let student = {
  name: "Hardik",
  age: 23,
  branch: "CSE"
};

console.log(student.name);
console.log(student.age);
console.log(student.branch);
```

Output:

```text
Hardik
23
CSE
```

In our React example:

```js
let name = student.name;
```

Here:

```text
student → object
name → property
```

---

## 3.2 Bracket Notation

We can also access a property using square brackets `[]`.

```js
let student = {
  name: "Hardik",
  age: 23,
  branch: "CSE"
};

console.log(student["name"]);
console.log(student["age"]);
console.log(student["branch"]);
```

Output:

```text
Hardik
23
CSE
```

In our example:

```js
let branch = student["branch"];
```

---

# 4. Dot Notation vs Bracket Notation

Both methods can access the same property.

### Dot notation

```js
student.name
```

### Bracket notation

```js
student["name"]
```

Both return:

```text
Hardik
```

### When is bracket notation useful?

Bracket notation is especially useful when the property name is stored inside a variable.

```js
let property = "name";

console.log(student[property]);
```

Output:

```text
Hardik
```

---

# 5. Updating an Object Property

We can change the value of an existing property.

Example:

```js
let student = {
  name: "Hardik",
  marks: 85
};

student.marks = 90;
```

Now:

```js
console.log(student.marks);
```

Output:

```text
90
```

In our React example:

```js
student.marks = 90;
```

The original marks:

```text
85
```

are changed to:

```text
90
```

---

# 6. Adding a New Property

We can add a new property to an existing object.

Example:

```js
let student = {
  name: "Hardik",
  age: 23
};

student.city = "Rajkot";
```

Now the object contains:

```js
{
  name: "Hardik",
  age: 23,
  city: "Rajkot"
}
```

In our example:

```js
student.city = "Rajkot";
```

We can then access it:

```js
console.log(student.city);
```

Output:

```text
Rajkot
```

---

# 7. Nested Object

An object can contain another object.

This is called a **nested object**.

Example:

```js
let studentDetails = {
  name: "Hardik",

  address: {
    city: "Rajkot",
    state: "Gujarat"
  }
};
```

Here:

```text
studentDetails
    |
    |-- name
    |
    |-- address
          |
          |-- city
          |
          |-- state
```

---

# 8. Accessing Nested Object

To access nested properties, we use multiple dots.

```js
studentDetails.address.city
```

Example:

```js
console.log(studentDetails.address.city);
```

Output:

```text
Rajkot
```

Similarly:

```js
console.log(studentDetails.address.state);
```

Output:

```text
Gujarat
```

In React:

```jsx
<p>City: {studentDetails.address.city}</p>
<p>State: {studentDetails.address.state}</p>
```

---

# 9. Object Containing an Array

An object can also contain an array as one of its properties.

Example:

```js
let studentSubjects = {
  name: "Hardik",
  subjects: ["JavaScript", "React", "Node"]
};
```

Here:

```text
studentSubjects → object

name → string

subjects → array
```

We can access the complete array:

```js
studentSubjects.subjects
```

---

# 10. Accessing Array inside Object

We can access individual elements of the array.

```js
console.log(studentSubjects.subjects[0]);
```

Output:

```text
JavaScript
```

```js
console.log(studentSubjects.subjects[1]);
```

Output:

```text
React
```

```js
console.log(studentSubjects.subjects[2]);
```

Output:

```text
Node
```

---

# 11. Using `map()` with an Array inside an Object

Since `subjects` is an array, we can use `map()`.

```js
studentSubjects.subjects.map((subject, index) => {
  return <li key={index}>{subject}</li>;
});
```

In React:

```jsx
<ul>
  {studentSubjects.subjects.map((subject, index) => (
    <li key={index}>{subject}</li>
  ))}
</ul>
```

This displays:

```text
JavaScript
React
Node
```

---

# 12. What is an Array of Objects?

An array can contain multiple objects.

This is called an **Array of Objects**.

Example:

```js
let students = [
  { name: "Neha", marks: 75 },
  { name: "Avesh", marks: 82 },
  { name: "Hardik", marks: 91 }
];
```

Here:

```text
students
   |
   |-- Object 1
   |     |-- name
   |     |-- marks
   |
   |-- Object 2
   |     |-- name
   |     |-- marks
   |
   |-- Object 3
         |-- name
         |-- marks
```

---

# 13. Accessing an Object from an Array

Remember:

> Array uses an index, while an object uses a property.

Example:

```js
students[0]
```

returns the first object.

```js
students[0].name
```

returns the name of the first student.

Output:

```text
Neha
```

Similarly:

```js
students[2].marks
```

Output:

```text
91
```

---

# 14. Using `map()` with Array of Objects

We can use `map()` to access every object.

```js
students.map((student, index) => {
  return (
    <li key={index}>
      {student.name} - {student.marks}
    </li>
  );
});
```

In React:

```jsx
<ul>
  {students.map((student, index) => (
    <li key={index}>
      {student.name} - {student.marks}
    </li>
  ))}
</ul>
```

Output:

```text
Neha - 75
Avesh - 82
Hardik - 91
```

---

# 15. Understanding `student` and `index` in `map()`

Consider:

```jsx
students.map((student, index) => (
  <li key={index}>
    {student.name} - {student.marks}
  </li>
))
```

### `student`

Represents the current object.

For example, during the first iteration:

```js
student = {
  name: "Neha",
  marks: 75
};
```

During the second iteration:

```js
student = {
  name: "Avesh",
  marks: 82
};
```

During the third iteration:

```js
student = {
  name: "Hardik",
  marks: 91
};
```

### `index`

Represents the position of the current object.

```text
Neha   → 0
Avesh  → 1
Hardik → 2
```

---

# 16. Objects in React

React components are JavaScript functions.

Therefore, we can create and use objects inside React components.

Example:

```jsx
function Object() {

  let student = {
    name: "Hardik",
    age: 23,
    branch: "CSE",
    marks: 85
  };

  return (
    <>
      <h1>Student Details</h1>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Branch: {student.branch}</p>
      <p>Marks: {student.marks}</p>
    </>
  );
}

export default Object;
```

---

# 17. JavaScript Expressions in JSX

React allows JavaScript expressions inside `{}`.

Example:

```jsx
<p>{student.name}</p>
```

Here:

```text
{} → JavaScript expression
student.name → object property
```

Another example:

```jsx
<p>{student.marks + 5}</p>
```

If marks are `85`, the output will be:

```text
90
```

---

# 18. Complete Example

The following example contains all the concepts covered in this lesson.

```jsx
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
```

---

# 19. Important Concepts

### Object

Stores data in key-value pairs.

```js
let student = {
  name: "Hardik",
  age: 23
};
```

### Dot Notation

```js
student.name
```

### Bracket Notation

```js
student["name"]
```

### Update Property

```js
student.marks = 90;
```

### Add Property

```js
student.city = "Rajkot";
```

### Nested Object

```js
student.address.city
```

### Object with Array

```js
student.subjects[0]
```

### Array of Objects

```js
students[0].name
```

### React List Rendering

```jsx
students.map((student) => (
  <li>{student.name}</li>
))
```

---

# Quick Revision

| Concept                | Example                            |
| ---------------------- | ---------------------------------- |
| Create Object          | `let student = { name: "Hardik" }` |
| Property               | `name: "Hardik"`                   |
| Dot Notation           | `student.name`                     |
| Bracket Notation       | `student["name"]`                  |
| Update Property        | `student.marks = 90`               |
| Add Property           | `student.city = "Rajkot"`          |
| Nested Object          | `student.address.city`             |
| Object + Array         | `student.subjects`                 |
| Array of Objects       | `[{ name: "Neha" }]`               |
| Access Object in Array | `students[0].name`                 |
| React List             | `students.map()`                   |
| React Key              | `key={index}`                      |

---

# Interview Questions

1. What is an object in JavaScript?
2. What is a key-value pair?
3. How do you create an object?
4. How do you access an object property?
5. What is dot notation?
6. What is bracket notation?
7. What is the difference between dot notation and bracket notation?
8. How do you update an object property?
9. How do you add a new property to an object?
10. What is a nested object?
11. Can an object contain an array?
12. How do you access an array inside an object?
13. What is an array of objects?
14. How do you access an object inside an array?
15. How does `map()` work with an array of objects?
16. What is the use of `index` in `map()`?
17. Why do we use `key` when rendering lists in React?
18. How are objects used inside React components?
19. How can we display object properties in JSX?
20. What is the difference between an object and an array?
