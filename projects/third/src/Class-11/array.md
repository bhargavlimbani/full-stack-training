# Arrays in JavaScript and React

## 1. What is an Array?

An array is a collection of multiple values stored in a single variable.

Instead of creating separate variables:

```js
let student1 = "Neha";
let student2 = "Avesh";
let student3 = "Hardik";
```

We can store all values in one array:

```js
let students = ["Neha", "Avesh", "Hardik"];
```

An array can store multiple values.

---

# 2. Creating an Array

We can create an array using square brackets `[]`.

```js
let students = ["Neha", "Avesh", "Hardik"];
```

An array can contain different types of values:

```js
let data = ["Hardik", 23, true];
```

However, in most applications, it is better to keep related data together.

---

# 3. Array Index

Array elements are stored at positions called **indexes**.

Important:

> Array indexing starts from `0`.

Example:

```js
let students = ["Neha", "Avesh", "Hardik", "Anuj"];
```

| Index | Value  |
| ----: | ------ |
|     0 | Neha   |
|     1 | Avesh  |
|     2 | Hardik |
|     3 | Anuj   |

---

# 4. Accessing Array Elements

We can access an array element using its index.

```js
let students = ["Neha", "Avesh", "Hardik"];

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
```

Output:

```text
Neha
Avesh
Hardik
```

Example:

```js
let marks = [10, 12, 43, 54, 67];

console.log(marks[0]);
```

Output:

```text
10
```

---

# 5. Updating Array Elements

We can change an array element using its index.

```js
let students = ["Neha", "Avesh", "Hardik"];

students[1] = "Anuj";

console.log(students);
```

Output:

```text
["Neha", "Anuj", "Hardik"]
```

---

# 6. Array Length

The `length` property tells us how many elements are present in an array.

```js
let students = ["Neha", "Avesh", "Hardik"];

console.log(students.length);
```

Output:

```text
3
```

Example:

```js
let marks = [10, 12, 43, 54, 67];

console.log(marks.length);
```

Output:

```text
5
```

---

# 7. Adding Elements to an Array

## `push()`

`push()` adds an element at the end of an array.

```js
let students = ["Neha", "Avesh"];

students.push("Hardik");

console.log(students);
```

Output:

```text
["Neha", "Avesh", "Hardik"]
```

---

## `unshift()`

`unshift()` adds an element at the beginning.

```js
let students = ["Avesh", "Hardik"];

students.unshift("Neha");

console.log(students);
```

Output:

```text
["Neha", "Avesh", "Hardik"]
```

---

# 8. Removing Elements from an Array

## `pop()`

`pop()` removes the last element.

```js
let students = ["Neha", "Avesh", "Hardik"];

students.pop();

console.log(students);
```

Output:

```text
["Neha", "Avesh"]
```

---

## `shift()`

`shift()` removes the first element.

```js
let students = ["Neha", "Avesh", "Hardik"];

students.shift();

console.log(students);
```

Output:

```text
["Avesh", "Hardik"]
```

---

# 9. Finding an Element

## `includes()`

`includes()` checks whether an element exists in an array.

```js
let students = ["Neha", "Avesh", "Hardik"];

console.log(students.includes("Hardik"));
```

Output:

```text
true
```

Example:

```js
console.log(students.includes("Rahul"));
```

Output:

```text
false
```

---

# 10. Finding the Index

## `indexOf()`

`indexOf()` returns the index of an element.

```js
let students = ["Neha", "Avesh", "Hardik"];

console.log(students.indexOf("Hardik"));
```

Output:

```text
2
```

If the element does not exist:

```js
console.log(students.indexOf("Rahul"));
```

Output:

```text
-1
```

---

# 11. Looping Through an Array

We can use a `for` loop to access every element.

```js
let students = ["Neha", "Avesh", "Hardik"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
```

Output:

```text
Neha
Avesh
Hardik
```

---

# 12. `forEach()`

`forEach()` executes a function for every element.

```js
let students = ["Neha", "Avesh", "Hardik"];

students.forEach((student) => {
  console.log(student);
});
```

Output:

```text
Neha
Avesh
Hardik
```

---

# 13. `map()`

`map()` is one of the most important array methods in React.

It runs a function for every element and returns a **new array**.

```js
let marks = [10, 20, 30];

let newMarks = marks.map((value) => {
  return value + 1;
});

console.log(newMarks);
```

Output:

```text
[11, 21, 31]
```

---

# 14. Understanding `map()` Parameters

`map()` can provide three important parameters:

```js
array.map((value, index, array) => {
  
});
```

### `value`

The current element.

### `index`

The index of the current element.

### `array`

The complete original array.

Example:

```js
let students = ["Neha", "Avesh", "Hardik"];

students.map((value, index, array) => {
  console.log(value);
  console.log(index);
  console.log(array);
});
```

---

# 15. `map()` with Index

```js
let students = ["Neha", "Avesh", "Hardik"];

students.map((student, index) => {
  console.log(index, student);
});
```

Output:

```text
0 Neha
1 Avesh
2 Hardik
```

---

# 16. Short Syntax of `map()`

Instead of:

```js
let marks = [10, 20, 30];

let newMarks = marks.map((value) => {
  return value + 1;
});
```

We can write:

```js
let newMarks = marks.map((value) => value + 1);
```

Both produce the same result.

---

# 17. Array of Objects

In real applications, arrays commonly contain objects.

Example:

```js
let students = [
  {
    name: "Neha",
    marks: 75
  },
  {
    name: "Avesh",
    marks: 82
  },
  {
    name: "Hardik",
    marks: 91
  }
];
```

Each element is an object.

We can access the data:

```js
console.log(students[0].name);
console.log(students[0].marks);
```

Output:

```text
Neha
75
```

---

# 18. `map()` with Array of Objects

We can use `map()` to process an array of objects.

```js
students.map((student) => {
  console.log(student.name);
  console.log(student.marks);
});
```

We can also create a new array:

```js
let names = students.map((student) => {
  return student.name;
});
```

Output:

```text
["Neha", "Avesh", "Hardik"]
```

---

# 19. Arrays in React

React uses JavaScript arrays to display multiple elements.

Example:

```jsx
function Array() {

  let students = ["Neha", "Avesh", "Hardik"];

  return (
    <>
      <h1>Students</h1>

      <ul>
        {students.map((student) => {
          return <li>{student}</li>;
        })}
      </ul>
    </>
  );
}

export default Array;
```

---

# 20. Why `key` is Used in React

When rendering a list in React, each element should have a unique `key`.

```jsx
<ul>
  {students.map((student, index) => {
    return <li key={index}>{student}</li>;
  })}
</ul>
```

The `key` helps React identify which list items have changed.

For simple learning examples, `index` can be used.

In real applications, a unique ID is generally preferred.

Example:

```jsx
<li key={student.id}>{student.name}</li>
```

---

# 21. `map()` with Marks

We can perform calculations while rendering an array.

```jsx
let marks = [10, 20, 30];

return (
  <ul>
    {marks.map((mark, index) => {
      return (
        <li key={index}>
          {mark + 1}
        </li>
      );
    })}
  </ul>
);
```

Output:

```text
11
21
31
```

---

# 22. Complete React Example

```jsx
function Array() {

  let students = [
    "Neha",
    "Avesh",
    "Hardik",
    "Anuj",
    "Deep"
  ];

  let marks = [10, 12, 43, 54, 67];

  return (
    <>
      <h1>Arrays in React</h1>

      <h2>Student List</h2>

      <ul>
        {students.map((student, index) => {
          return (
            <li key={index}>
              {index} - {student}
            </li>
          );
        })}
      </ul>

      <h2>Marks</h2>

      <ul>
        {marks.map((mark, index) => {
          return (
            <li key={index}>
              Student {index + 1}: {mark}
            </li>
          );
        })}
      </ul>

      <h2>Marks + 1</h2>

      <ul>
        {marks.map((mark, index) => {
          return (
            <li key={index}>
              {mark + 1}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Array;
```

---

# 23. Important Array Methods

| Method       | Purpose                                  |
| ------------ | ---------------------------------------- |
| `push()`     | Adds element at the end                  |
| `pop()`      | Removes element from the end             |
| `unshift()`  | Adds element at the beginning            |
| `shift()`    | Removes element from the beginning       |
| `includes()` | Checks whether element exists            |
| `indexOf()`  | Finds the index                          |
| `forEach()`  | Executes function for every element      |
| `map()`      | Creates a new array                      |
| `filter()`   | Creates a new array based on a condition |
| `find()`     | Finds the first matching element         |
| `reduce()`   | Reduces array to a single value          |
| `sort()`     | Sorts an array                           |
| `reverse()`  | Reverses an array                        |

---

# 24. `filter()`

`filter()` creates a new array containing elements that satisfy a condition.

```js
let marks = [35, 45, 60, 25, 80];

let passed = marks.filter((mark) => {
  return mark >= 40;
});

console.log(passed);
```

Output:

```text
[45, 60, 80]
```

---

# 25. `find()`

`find()` returns the first element that satisfies a condition.

```js
let marks = [35, 45, 60, 25, 80];

let result = marks.find((mark) => {
  return mark > 50;
});

console.log(result);
```

Output:

```text
60
```

---

# 26. `reduce()`

`reduce()` is used when we want to convert an array into a single value.

Example:

```js
let marks = [10, 20, 30, 40];

let total = marks.reduce((sum, mark) => {
  return sum + mark;
}, 0);

console.log(total);
```

Output:

```text
100
```

---

# 27. Important Difference

### `forEach()`

Used when we want to perform an action for every element.

```js
students.forEach((student) => {
  console.log(student);
});
```

It does **not** return a new array.

### `map()`

Used when we want to create a new array.

```js
let names = students.map((student) => {
  return student;
});
```

### `filter()`

Used when we want only elements that satisfy a condition.

```js
let passed = marks.filter((mark) => {
  return mark >= 40;
});
```

### `find()`

Used when we want the first matching element.

```js
let result = marks.find((mark) => {
  return mark >= 40;
});
```

### `reduce()`

Used when we want a single final value.

```js
let total = marks.reduce((sum, mark) => {
  return sum + mark;
}, 0);
```

---

# 28. Quick Revision

| Concept                | Example                            |
| ---------------------- | ---------------------------------- |
| Create array           | `let students = ["Neha", "Avesh"]` |
| Access element         | `students[0]`                      |
| Array length           | `students.length`                  |
| Add at end             | `push()`                           |
| Remove from end        | `pop()`                            |
| Add at beginning       | `unshift()`                        |
| Remove from beginning  | `shift()`                          |
| Check element          | `includes()`                       |
| Find index             | `indexOf()`                        |
| Loop                   | `for`                              |
| Loop through array     | `forEach()`                        |
| Create new array       | `map()`                            |
| Filter values          | `filter()`                         |
| Find value             | `find()`                           |
| Calculate single value | `reduce()`                         |
| React list             | `map()`                            |
| React list identifier  | `key`                              |

---

# Interview Questions

1. What is an array?
2. How do you create an array in JavaScript?
3. What is the starting index of an array?
4. How do you access an array element?
5. What is the use of the `length` property?
6. What is the difference between `push()` and `unshift()`?
7. What is the difference between `pop()` and `shift()`?
8. What is `forEach()`?
9. What is `map()`?
10. What is the difference between `map()` and `forEach()`?
11. What are the parameters provided by `map()`?
12. What is `filter()`?
13. What is the difference between `filter()` and `find()`?
14. What is `reduce()`?
15. What is an array of objects?
16. How do you render an array in React?
17. Why is `key` required when rendering lists in React?
18. Why is `index` generally not the best choice for a React `key` when a stable unique ID is available?
19. What is the difference between `map()`, `filter()`, `find()`, and `reduce()`?
20. How can you display API data in React using `map()`?
