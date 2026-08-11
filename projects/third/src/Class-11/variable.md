# Variables in JavaScript and React

## 1. What is a Variable?

A variable is a named container used to **store data** in a program.

For example:

```js
let name = "Hardik";
let age = 23;
```

Here:

* `name` is the variable name.
* `"Hardik"` is the value.
* `age` is another variable.
* `23` is its value.

We can use these variables later in our program.

---

## 2. Creating Variables

JavaScript provides three keywords for creating variables:

```js
var
let
const
```

Example:

```js
let name = "Hardik";
const age = 23;
var city = "Rajkot";
```

### `let`

Use `let` when the value may change.

```js
let age = 23;

age = 24;
```

### `const`

Use `const` when the variable should not be reassigned.

```js
const pi = 3.14;
```

The following is not allowed:

```js
const pi = 3.14;

pi = 4;
```

### `var`

`var` is the older way of declaring variables.

```js
var name = "Hardik";
```

In modern JavaScript, prefer:

```js
let
const
```

over `var`.

---

# 3. Rules for Variable Names

Variable names can contain:

* Letters
* Numbers
* `_`
* `$`

Example:

```js
let name = "Hardik";
let studentAge = 23;
let student_age = 23;
let $price = 500;
```

A variable name **cannot start with a number**.

```js
let 1name = "Hardik"; // Invalid
```

Correct:

```js
let name1 = "Hardik";
```

Variable names are case-sensitive.

```js
let name = "Hardik";
let Name = "Avesh";
```

`name` and `Name` are different variables.

---

# 4. JavaScript Data Types

A variable can store different types of data.

The commonly used primitive data types are:

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

JavaScript also has:

8. Object

---

# 5. String

A string represents text.

```js
let name = "Hardik";
```

Other ways:

```js
let name1 = 'Hardik';
let name2 = `Hardik`;
```

Example:

```js
let message = "Hello Students";
```

---

# 6. Number

Numbers are used to store numeric values.

```js
let age = 23;
let marks = 85;
let price = 499.99;
```

JavaScript uses the `number` type for both integers and decimal numbers.

```js
let a = 10;
let b = 10.5;
```

Both are:

```js
number
```

---

# 7. Boolean

A Boolean has only two values:

```js
true
false
```

Example:

```js
let isMarried = false;
let isStudent = true;
```

Boolean values are commonly used in conditions.

```js
if (isStudent) {
  console.log("Student");
}
```

---

# 8. Undefined

If a variable is declared but no value is assigned, its value is `undefined`.

```js
let a;

console.log(a);
```

Output:

```text
undefined
```

Its data type is:

```js
typeof a
```

Output:

```text
undefined
```

---

# 9. Null

`null` represents an intentionally empty value.

```js
let b = null;
```

We are explicitly saying that `b` currently has no value.

Important JavaScript behavior:

```js
typeof null
```

returns:

```text
object
```

This is a historical behavior of JavaScript.

Although `typeof null` returns `"object"`, `null` itself represents the intentional absence of a value.

---

# 10. Checking Data Type with `typeof`

The `typeof` operator is used to check the data type of a value.

Example:

```js
let name = "Hardik";
let age = 23;
let isStudent = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
```

Output:

```text
string
number
boolean
```

More examples:

```js
let a;

console.log(typeof a);
```

Output:

```text
undefined
```

And:

```js
let b = null;

console.log(typeof b);
```

Output:

```text
object
```

---

# 11. Variables in React

React components are JavaScript functions.

Therefore, we can create JavaScript variables inside a React component.

```jsx
function Variable() {

  let name = "Hardik";
  let age = 23;

  return (
    <>
      <h1>{name}</h1>
      <p>Age: {age}</p>
    </>
  );
}
```

---

# 12. JavaScript inside JSX

In JSX, JavaScript expressions are written inside:

```jsx
{ }
```

Example:

```jsx
let name = "Hardik";

return (
  <h1>{name}</h1>
);
```

The value of `name` will be displayed on the screen.

---

# 13. Expressions inside JSX

We can also perform calculations inside `{}`.

```jsx
<p>{2 + 3}</p>
```

Output:

```text
5
```

Another example:

```jsx
<p>{10 * 5}</p>
```

Output:

```text
50
```

We can use variables too:

```jsx
let age = 23;

<p>{age + 1}</p>
```

Output:

```text
24
```

---

# 14. Converting Boolean to String

A Boolean can be converted into a string using `.toString()`.

```js
let isMarried = false;

console.log(isMarried.toString());
```

Output:

```text
false
```

In React:

```jsx
<p>
  Is married: {isMarried.toString()}
</p>
```

---

# 15. Complete Example

The following example combines all the concepts discussed above:

```jsx
function Variable() {

  let name = "Hardik";
  let age = 23;
  let isMarried = false;
  let a;
  let b = null;

  return (
    <>
      <h1>Name is: {name}</h1>

      <p>
        Is {name} married: {isMarried.toString()}
      </p>

      <p>
        {name}'s age is: {age}
      </p>

      <h2>Data Types</h2>

      <p>name: {typeof name}</p>
      <p>age: {typeof age}</p>
      <p>isMarried: {typeof isMarried}</p>
      <p>a: {typeof a}</p>
      <p>b: {typeof b}</p>

      <h2>Expression in JSX</h2>

      <p>2 × 3 = {2 * 3}</p>
    </>
  );
}

export default Variable;
```

---

# 16. Expected Output

```text
Name is: Hardik

Is Hardik married: false

Hardik's age is: 23

Data Types

name: string
age: number
isMarried: boolean
a: undefined
b: object

Expression in JSX

2 × 3 = 6
```

---

# 17. Important Points to Remember

### Variable

A variable stores data.

```js
let name = "Hardik";
```

### `let`

Used when the value can be reassigned.

```js
let age = 23;
age = 24;
```

### `const`

Used when the variable should not be reassigned.

```js
const pi = 3.14;
```

### `typeof`

Used to check the data type.

```js
typeof name
```

### `undefined`

A variable has been declared but no value has been assigned.

```js
let a;
```

### `null`

Represents an intentionally empty value.

```js
let b = null;
```

### JSX `{}`

Used to write JavaScript expressions inside JSX.

```jsx
<h1>{name}</h1>
```

### React Component

A React component is commonly written as a JavaScript function that returns JSX.

```jsx
function Variable() {
  return <h1>Hello</h1>;
}
```

---

# Quick Revision

| Concept                       | Example                 |
| ----------------------------- | ----------------------- |
| String                        | `let name = "Hardik"`   |
| Number                        | `let age = 23`          |
| Boolean                       | `let isMarried = false` |
| Undefined                     | `let a`                 |
| Null                          | `let b = null`          |
| Check type                    | `typeof name`           |
| Convert Boolean               | `isMarried.toString()`  |
| JSX expression                | `{name}`                |
| Calculation                   | `{2 * 3}`               |
| Variable can change           | `let`                   |
| Variable cannot be reassigned | `const`                 |

## Interview Questions

1. What is a variable?
2. What are the different ways to declare variables in JavaScript?
3. Difference between `var`, `let`, and `const`.
4. What is a string?
5. What is a number in JavaScript?
6. What are Boolean values?
7. What is `undefined`?
8. What is `null`?
9. What is the difference between `undefined` and `null`?
10. What is the output of `typeof null`?
11. What is the use of the `typeof` operator?
12. Why do we use `{}` in JSX?
13. Can we write JavaScript expressions inside JSX?
14. How can a Boolean be converted into a string?
15. How are JavaScript variables used inside a React component?
