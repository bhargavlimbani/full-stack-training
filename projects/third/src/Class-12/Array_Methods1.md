# JavaScript Array Methods in React

## 1. What We Are Learning

In this example, we are working with an array of student objects.

We will learn:

1. `map()`
2. `filter()`
3. `filter().map()` chaining
4. Rendering arrays in React
5. Accessing object properties
6. Using `key` in React lists

---

# 2. Student Data

Our student data is stored in a separate file.

### `list.js`

```js
let students = [
  {
    name: "Neha",
    branch: "MCA",
    age: 17
  },

  {
    name: "Mira",
    branch: "CE",
    age: 24
  },

  {
    name: "Deep",
    branch: "ICT",
    age: 32
  },

  {
    name: "Hardik",
    branch: "MCA",
    age: 27
  },

  {
    name: "Avesh",
    branch: "MCA",
    age: 47
  },

  {
    name: "Alok",
    branch: "EC",
    age: 37
  }
];

export default students;
```

Here:

```text
students
   ↓
Array
   ↓
Objects
   ↓
name, branch, age
```

So this is an:

> **Array of Objects**

---

# 3. Importing the Data

Since `students` is exported from `list.js`, we can import it into another component.

```js
import students from "./list";
```

Now we can use `students` inside our React component.

Example:

```js
function FetchList() {

  console.log(students);

  return (
    <h1>Students</h1>
  );
}
```

---

# 4. `map()` Method

The `map()` method is used to iterate over an array and create a **new array**.

Basic syntax:

```js
array.map((value, index) => {
  return newValue;
});
```

Example:

```js
let numbers = [1, 2, 3, 4];

let result = numbers.map((value) => {
  return value * 2;
});

console.log(result);
```

Output:

```text
[2, 4, 6, 8]
```

---

# 5. Important Points about `map()`

Remember these three points:

1. `map()` iterates over every element.
2. It executes the callback function for every element.
3. It creates and returns a new array.

Example:

```js
let numbers = [10, 20, 30];

let result = numbers.map((value) => {
  return value + 5;
});
```

Result:

```text
[15, 25, 35]
```

---

# 6. `map()` with Array of Objects

Our `students` array contains objects.

```js
let students = [
  {
    name: "Neha",
    branch: "MCA",
    age: 17
  },

  {
    name: "Mira",
    branch: "CE",
    age: 24
  }
];
```

We can use `map()` to access every student.

```js
students.map((value) => {
  console.log(value);
});
```

The `value` represents the current object.

For the first iteration:

```js
value = {
  name: "Neha",
  branch: "MCA",
  age: 17
};
```

For the second iteration:

```js
value = {
  name: "Mira",
  branch: "CE",
  age: 24
};
```

---

# 7. Accessing Object Properties inside `map()`

Because `value` contains a student object, we can access its properties.

```js
students.map((value) => {
  console.log(value.name);
  console.log(value.branch);
  console.log(value.age);
});
```

Output:

```text
Neha
MCA
17

Mira
CE
24
```

---

# 8. `map()` in React

One of the most common uses of `map()` in React is displaying a list.

```jsx
{students.map((value, index) => {
  return (
    <ul key={index}>
      <li>Name is {value.name}</li>
      <li>Branch is {value.branch}</li>
      <li>Age is {value.age}</li>
    </ul>
  );
})}
```

React executes `map()` for every student.

The result is multiple `<ul>` elements.

---

# 9. Understanding the `map()` Code

Consider:

```jsx
students.map((value, index) => {
```

### `students`

The complete array.

### `value`

The current student object.

### `index`

The current position.

Example:

```text
Neha   → index 0
Mira   → index 1
Deep   → index 2
Hardik → index 3
Avesh  → index 4
Alok   → index 5
```

---

# 10. React `key`

When React renders a list, each item should have a `key`.

Example:

```jsx
<ul key={index}>
```

The `key` helps React identify individual elements in a list.

For simple examples, we can use:

```jsx
key={index}
```

In real applications, if the data has a unique ID, prefer that:

```jsx
key={student.id}
```

---

# 11. `filter()` Method

The `filter()` method is used to select elements based on a condition.

Basic syntax:

```js
array.filter((value) => {
  return condition;
});
```

Example:

```js
let numbers = [10, 20, 30, 40, 50];

let result = numbers.filter((value) => {
  return value > 25;
});

console.log(result);
```

Output:

```text
[30, 40, 50]
```

---

# 12. Important Points about `filter()`

Remember:

1. `filter()` checks every element.
2. The callback must return `true` or `false`.
3. If the result is `true`, the element is included.
4. If the result is `false`, the element is excluded.
5. `filter()` returns a new array.

---

# 13. Understanding `true` and `false`

Example:

```js
let numbers = [10, 20, 30];

let result = numbers.filter((value) => {
  return value > 15;
});
```

For `10`:

```text
10 > 15
false
```

So `10` is removed.

For `20`:

```text
20 > 15
true
```

So `20` is included.

For `30`:

```text
30 > 15
true
```

So `30` is included.

Final result:

```text
[20, 30]
```

---

# 14. Filtering Students by Age

Our students are objects, so we can use object properties in the condition.

Example:

```js
students.filter((value) => {
  return value.age < 30;
});
```

This means:

> Give me only those students whose age is less than 30.

From our data:

```text
Neha   → 17 → included
Mira   → 24 → included
Deep   → 32 → excluded
Hardik → 27 → included
Avesh  → 47 → excluded
Alok   → 37 → excluded
```

Result:

```text
Neha
Mira
Hardik
```

---

# 15. `filter()` in React

We can directly use `filter()` inside JSX.

```jsx
{students
  .filter((value) => value.age < 30)
  .map((value, index) => {
    return (
      <ul key={index}>
        <li>Name is: {value.name}</li>
        <li>Branch is: {value.branch}</li>
        <li>Age is: {value.age}</li>
      </ul>
    );
  })}
```

This code performs two operations.

First:

```js
filter()
```

selects students whose age is below 30.

Then:

```js
map()
```

displays those students.

---

# 16. Method Chaining

Using multiple array methods one after another is called **method chaining**.

Example:

```js
students
  .filter((value) => value.age < 30)
  .map((value) => value.name);
```

First:

```js
filter()
```

Then:

```js
map()
```

The flow is:

```text
students
   ↓
filter()
   ↓
students with age < 30
   ↓
map()
   ↓
student names
```

---

# 17. Understanding `filter().map()`

Consider:

```js
students
  .filter((value) => value.age < 30)
  .map((value) => value.name);
```

### Step 1 — Original Array

```text
Neha
Mira
Deep
Hardik
Avesh
Alok
```

### Step 2 — `filter()`

Condition:

```js
value.age < 30
```

Remaining students:

```text
Neha
Mira
Hardik
```

### Step 3 — `map()`

We return:

```js
value.name
```

Final result:

```text
["Neha", "Mira", "Hardik"]
```

---

# 18. `filter()` vs `map()`

| `map()`                                     | `filter()`                              |
| ------------------------------------------- | --------------------------------------- |
| Transforms data                             | Selects data                            |
| Returns a new array                         | Returns a new array                     |
| Usually returns one value for every element | May return fewer elements               |
| Used to modify/convert elements             | Used to apply conditions                |
| Commonly used for React lists               | Commonly used for filtering React lists |

Example of `map()`:

```js
marks.map((mark) => mark + 1);
```

Example of `filter()`:

```js
marks.filter((mark) => mark >= 40);
```

---

# 19. `map()` vs `filter()` with Students

### `map()`

```js
students.map((student) => {
  return student.name;
});
```

Result:

```text
["Neha", "Mira", "Deep", "Hardik", "Avesh", "Alok"]
```

`map()` keeps all elements but changes what we return.

---

### `filter()`

```js
students.filter((student) => {
  return student.age < 30;
});
```

Result contains only:

```text
Neha
Mira
Hardik
```

`filter()` removes elements that do not satisfy the condition.

---

# 20. Complete React Example

```jsx
import students from "./list";

function FetchList() {

  return (
    <>
      <h1>Student List</h1>

      <h2>All Students</h2>

      {students.map((value, index) => {
        return (
          <ul key={index}>
            <li>Name is: {value.name}</li>
            <li>Branch is: {value.branch}</li>
            <li>Age is: {value.age}</li>
          </ul>
        );
      })}

      <h2>Students Age Below 30</h2>

      {students
        .filter((value) => value.age < 30)
        .map((value, index) => {
          return (
            <ul key={index}>
              <li>Name is: {value.name}</li>
              <li>Branch is: {value.branch}</li>
              <li>Age is: {value.age}</li>
            </ul>
          );
        })}
    </>
  );
}

export default FetchList;
```

---

# 21. Data Flow in This Example

The complete flow is:

```text
list.js
   ↓
students array
   ↓
import students
   ↓
React Component
   ↓
map()
   ↓
Display all students
```

For filtering:

```text
students
   ↓
filter(age < 30)
   ↓
Students below 30
   ↓
map()
   ↓
Display students
```

---

# 22. Important Syntax

### `map()`

```js
array.map((value, index) => {
  return value;
});
```

### `filter()`

```js
array.filter((value) => {
  return condition;
});
```

### `filter().map()`

```js
array
  .filter((value) => condition)
  .map((value) => value);
```

---

# 23. Common Mistake

Do not use `filter()` when you want to display or transform every element.

Wrong concept:

```js
students.filter((student) => {
  return student.name;
});
```

If the purpose is to display every student, use:

```js
students.map((student) => {
  return student.name;
});
```

Use `filter()` when you have a condition.

```js
students.filter((student) => {
  return student.age < 30;
});
```

---

# 24. Another Example

Find students from the `MCA` branch.

```js
let mcaStudents = students.filter((student) => {
  return student.branch === "MCA";
});

console.log(mcaStudents);
```

From our data:

```text
Neha
Hardik
Avesh
```

---

# 25. Filter by Branch and Map Names

We can combine both methods.

```js
let names = students
  .filter((student) => student.branch === "MCA")
  .map((student) => student.name);

console.log(names);
```

Output:

```text
["Neha", "Hardik", "Avesh"]
```

Flow:

```text
students
   ↓
filter(branch === "MCA")
   ↓
MCA students
   ↓
map(student.name)
   ↓
student names
```

---

# Quick Revision

| Method           | Purpose                       | Example                   |
| ---------------- | ----------------------------- | ------------------------- |
| `map()`          | Transform/display data        | `students.map()`          |
| `filter()`       | Select data                   | `students.filter()`       |
| `filter().map()` | Filter then transform/display | `students.filter().map()` |
| `key`            | Identify React list items     | `key={index}`             |
| `value`          | Current array element         | `value.name`              |
| `index`          | Current array position        | `index`                   |

---

# Interview Questions

1. What is the `map()` method?
2. What does `map()` return?
3. Does `map()` modify the original array?
4. What is the `filter()` method?
5. What does `filter()` return?
6. What should the callback of `filter()` return?
7. What is the difference between `map()` and `filter()`?
8. What is method chaining?
9. What is `filter().map()`?
10. Why is `map()` commonly used in React?
11. Why do we use `key` when rendering lists in React?
12. What are the parameters of `map()`?
13. How can we filter an array of objects?
14. How can we filter students based on age?
15. How can we filter students based on branch?
16. How can we get only the names of MCA students?
17. What happens when the condition in `filter()` returns `false`?
18. What is the difference between transforming data and filtering data?
19. How can we render filtered data in React?
20. What is the execution order in `filter().map()`?
