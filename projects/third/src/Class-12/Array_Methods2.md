# 26. `reduce()` Method

The `reduce()` method is used to **reduce an array to a single value**.

It is commonly used for:

* Calculating total
* Calculating sum
* Finding average
* Counting items
* Finding maximum/minimum
* Creating a single result from an array

Basic syntax:

```js
array.reduce((accumulator, currentValue) => {
  return updatedValue;
}, initialValue);
```

The two most important concepts are:

```text
accumulator → stores the result
currentValue → current array element
```

---

# 27. Simple `reduce()` Example

Suppose we have:

```js
let numbers = [10, 20, 30, 40];
```

We want to calculate the total.

```js
let total = numbers.reduce((sum, value) => {
  return sum + value;
}, 0);

console.log(total);
```

Output:

```text
100
```

---

# 28. How `reduce()` Works

Consider:

```js
let numbers = [10, 20, 30];
```

Code:

```js
let total = numbers.reduce((sum, value) => {
  return sum + value;
}, 0);
```

Initial value:

```text
sum = 0
```

### First iteration

```text
sum = 0
value = 10

0 + 10 = 10
```

Now:

```text
sum = 10
```

### Second iteration

```text
sum = 10
value = 20

10 + 20 = 30
```

Now:

```text
sum = 30
```

### Third iteration

```text
sum = 30
value = 30

30 + 30 = 60
```

Final result:

```text
60
```

---

# 29. `reduce()` with Array of Objects

Our `students` array contains student objects.

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
```

Suppose we want to calculate the **total age of all students**.

```js
let totalAge = students.reduce((total, student) => {
  return total + student.age;
}, 0);

console.log(totalAge);
```

Calculation:

```text
17 + 24 + 32 + 27 + 47 + 37
```

Result:

```text
184
```

---

# 30. Understanding `reduce()` Parameters

Consider:

```js
students.reduce((total, student) => {
  return total + student.age;
}, 0);
```

Here:

### `total`

The accumulator.

It stores the result of the previous iteration.

### `student`

The current student object.

Example:

```js
student.age
```

gives the age of the current student.

### `0`

The initial value of `total`.

So:

```text
total = 0
```

at the beginning.

---

# 31. Find Total Marks Using `reduce()`

If students also have marks:

```js
let students = [
  { name: "Neha", marks: 75 },
  { name: "Mira", marks: 82 },
  { name: "Deep", marks: 65 }
];
```

We can calculate total marks:

```js
let totalMarks = students.reduce((total, student) => {
  return total + student.marks;
}, 0);

console.log(totalMarks);
```

Calculation:

```text
75 + 82 + 65 = 222
```

Output:

```text
222
```

---

# 32. Calculate Average Using `reduce()`

First calculate the total:

```js
let totalMarks = students.reduce((total, student) => {
  return total + student.marks;
}, 0);
```

Then calculate average:

```js
let average = totalMarks / students.length;

console.log(average);
```

Example:

```text
75 + 82 + 65 = 222

222 / 3 = 74
```

Output:

```text
74
```

---

# 33. `map()` vs `filter()` vs `reduce()`

These three methods are extremely important.

| Method     | Purpose                 | Result               |
| ---------- | ----------------------- | -------------------- |
| `map()`    | Transform every element | New array            |
| `filter()` | Select elements         | New array            |
| `reduce()` | Combine elements        | Usually single value |

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

---

### `filter()`

```js
students.filter((student) => {
  return student.age < 30;
});
```

Result:

```text
Students whose age is below 30
```

---

### `reduce()`

```js
students.reduce((total, student) => {
  return total + student.age;
}, 0);
```

Result:

```text
184
```

---

# 34. Easy Way to Remember

Remember:

```text
map()
 ↓
CHANGE

filter()
 ↓
SELECT

reduce()
 ↓
CALCULATE
```

Or:

```text
map()    → Transform
filter() → Select
reduce() → Accumulate
```

---

# 35. `filter()` + `reduce()`

We can also combine `filter()` and `reduce()`.

Suppose we want the **total age of students below 30**.

First:

```js
filter()
```

selects students below 30.

Then:

```js
reduce()
```

calculates their total age.

```js
let totalAge = students
  .filter((student) => student.age < 30)
  .reduce((total, student) => {
    return total + student.age;
  }, 0);

console.log(totalAge);
```

Students below 30:

```text
Neha   → 17
Mira   → 24
Hardik → 27
```

Calculation:

```text
17 + 24 + 27 = 68
```

Result:

```text
68
```

---

# 36. `filter()` + `map()` + `reduce()`

We can also use all three methods together.

Example:

```js
let total = students
  .filter((student) => student.branch === "MCA")
  .map((student) => student.age)
  .reduce((total, age) => {
    return total + age;
  }, 0);

console.log(total);
```

First:

```text
filter()
```

selects MCA students.

From our data:

```text
Neha   → 17
Hardik → 27
Avesh  → 47
```

Then:

```text
map()
```

extracts their ages:

```text
[17, 27, 47]
```

Finally:

```text
reduce()
```

calculates:

```text
17 + 27 + 47 = 91
```

Final result:

```text
91
```

---

# 37. Using `reduce()` to Count Students

`reduce()` can also be used for counting.

Example:

```js
let count = students.reduce((total, student) => {
  return total + 1;
}, 0);

console.log(count);
```

If there are 6 students:

```text
6
```

A simpler option is:

```js
students.length
```

But the `reduce()` example helps understand how an accumulator works.

---

# 38. Find the Highest Marks

Suppose:

```js
let students = [
  { name: "Neha", marks: 75 },
  { name: "Mira", marks: 82 },
  { name: "Hardik", marks: 91 }
];
```

We can find the highest marks using `reduce()`.

```js
let highestMarks = students.reduce((highest, student) => {

  if (student.marks > highest) {
    return student.marks;
  }

  return highest;

}, 0);

console.log(highestMarks);
```

Output:

```text
91
```

---

# 39. Find the Student with Highest Marks

We can also return the complete student object.

```js
let topper = students.reduce((highest, student) => {

  if (student.marks > highest.marks) {
    return student;
  }

  return highest;

}, students[0]);

console.log(topper);
```

Output:

```js
{
  name: "Hardik",
  marks: 91
}
```

---

# 40. `reduce()` in React

`reduce()` can be used inside React when we need to calculate something from data.

Example:

```jsx
function Students() {

  let students = [
    { name: "Neha", marks: 75 },
    { name: "Mira", marks: 82 },
    { name: "Hardik", marks: 91 }
  ];

  let totalMarks = students.reduce((total, student) => {
    return total + student.marks;
  }, 0);

  return (
    <>
      <h1>Students</h1>

      <p>Total Marks: {totalMarks}</p>
    </>
  );
}

export default Students;
```

Output:

```text
Total Marks: 248
```

---

# 41. Complete Example

The following example demonstrates:

* `map()`
* `filter()`
* `reduce()`
* `filter().map()`
* `filter().reduce()`
* Array of Objects
* React rendering

```jsx
import students from "./list";

function FetchList() {

  // Display all students
  // map() → transforms each student into JSX

  // Filter students below 30
  // filter() → selects students

  // Calculate total age
  // reduce() → combines all ages into one value

  let totalAge = students.reduce((total, student) => {
    return total + student.age;
  }, 0);

  return (
    <>
      <h1>Student List</h1>

      <h2>All Students</h2>

      {students.map((student, index) => (
        <ul key={index}>
          <li>Name: {student.name}</li>
          <li>Branch: {student.branch}</li>
          <li>Age: {student.age}</li>
        </ul>
      ))}

      <h2>Students Below 30</h2>

      {students
        .filter((student) => student.age < 30)
        .map((student, index) => (
          <ul key={index}>
            <li>Name: {student.name}</li>
            <li>Branch: {student.branch}</li>
            <li>Age: {student.age}</li>
          </ul>
        ))}

      <h2>Total Age</h2>

      <p>{totalAge}</p>
    </>
  );
}

export default FetchList;
```

---

# 42. Complete Array Methods Flow

The three methods can be understood as:

```text
                  ARRAY
                    |
        ┌───────────┼───────────┐
        ↓           ↓           ↓
      map()      filter()    reduce()
        ↓           ↓           ↓
   Transform      Select      Calculate
        ↓           ↓           ↓
   New Array     New Array   Single Value
```

Example:

```js
students.map(...)
```

means:

> Do something with every student.

```js
students.filter(...)
```

means:

> Give me only the students who satisfy this condition.

```js
students.reduce(...)
```

means:

> Combine the students/data into one final result.

---

# Quick Revision

| Method              | Meaning                  | Returns       |
| ------------------- | ------------------------ | ------------- |
| `map()`             | Transform every element  | New array     |
| `filter()`          | Select matching elements | New array     |
| `reduce()`          | Combine elements         | Single result |
| `filter().map()`    | Select then transform    | New array     |
| `filter().reduce()` | Select then calculate    | Single result |
| `map().reduce()`    | Transform then calculate | Single result |

## Remember

```text
map()     → CHANGE
filter()  → SELECT
reduce()  → CALCULATE
```

---

# Interview Questions

1. What is `map()`?
2. What is `filter()`?
3. What is `reduce()`?
4. What is the difference between `map()`, `filter()`, and `reduce()`?
5. What does `map()` return?
6. What does `filter()` return?
7. What does `reduce()` return?
8. What is an accumulator in `reduce()`?
9. What is the initial value in `reduce()`?
10. How do you calculate the sum of an array using `reduce()`?
11. How do you calculate the total marks of students?
12. How do you calculate the average using `reduce()`?
13. How do you find the highest value using `reduce()`?
14. Can `filter()` and `reduce()` be chained?
15. Can `filter()`, `map()`, and `reduce()` be chained?
16. What is method chaining?
17. What is the difference between `filter().map()` and `map().filter()`?
18. How can `reduce()` be used inside a React component?
19. How can you calculate the total age of students below 30?
20. How can you find the student with the highest marks using `reduce()`?
