# React `useState` Hook – Complete Guide for Students 🚀

Welcome to the world of **React Hooks**!

This guide will teach you the **`useState` Hook** from the basics to practical examples. By the end, you will understand how to create state, update state, work with different data types, use functional updates, and follow the Rules of Hooks.

---

# 📌 Table of Contents

1. [What is `useState`?](#-what-is-usestate)
2. [Why Do We Need `useState`?](#-why-do-we-need-usestate)
3. [Syntax](#-syntax--the-magic-line)
4. [Understanding the Returned Array](#-understanding-the-returned-array)
5. [Array Destructuring](#-destructuring--making-it-clean)
6. [How to Update State](#-how-to-update-state)
7. [Rules of Hooks](#️-rules-of-hooks-important)
8. [Complete Code Examples](#-complete-code-examples)
9. [Using Different Data Types](#-using-different-data-types)
10. [Updating Objects](#-updating-objects)
11. [Updating Arrays](#-updating-arrays)
12. [Functional Updates](#-functional-updates)
13. [State vs Normal Variables](#-state-vs-normal-variables)
14. [Common Mistakes](#-common-mistakes)
15. [Summary Cheat Sheet](#-summary-cheat-sheet)
16. [Practice Tasks](#-practice-tasks)
17. [Final Revision](#-final-revision)

---

# 🧠 What is `useState`?

`useState` is a **React Hook** that allows us to add and manage state inside functional components.

```jsx
import { useState } from "react";
```

### What is State?

**State is data that can change over time and affect what is displayed on the screen.**

Examples:

* Counter value
* User's name
* Login status
* Checkbox status
* Form input values
* Shopping cart items
* List of students

For example, a counter can change:

```text
0 → 1 → 2 → 3 → 4
```

A user's login status can change:

```text
Logged Out → Logged In
```

A user's name can change:

```text
Aadil → Kumar
```

React needs a way to track these changes. This is where `useState` is used.

---

# 🤔 Why Do We Need `useState`?

Consider a normal JavaScript variable:

```jsx
let count = 0;

function increaseCount() {
    count++;
}
```

The value of `count` can change, but React does not automatically update the UI just because a normal variable changed.

With `useState`:

```jsx
const [count, setCount] = useState(0);
```

When we update the state:

```jsx
setCount(1);
```

React knows that the state changed and schedules the component to **re-render**.

### State Flow

```text
User Interaction
       ↓
State Update
       ↓
setState()
       ↓
React Re-renders Component
       ↓
Updated UI
```

This keeps the **UI synchronized with the data**.

---

# ✨ Syntax – The Magic Line

The basic syntax of `useState` is:

```jsx
const [stateVariable, setStateFunction] = useState(initialValue);
```

Example:

```jsx
const [name, setName] = useState("Aadil");
```

Let's understand each part.

| Part      | Meaning                           |
| --------- | --------------------------------- |
| `name`    | Current state value               |
| `setName` | Function used to update the state |
| `"Aadil"` | Initial value                     |

Think of it as:

```text
name       → What is the current value?
setName    → How do I change the value?
"Aadil"    → What should the initial value be?
```

---

# 🧩 Understanding the Returned Array

When we call:

```jsx
useState("Aadil");
```

React returns an array containing **two elements**:

```jsx
[
    currentStateValue,
    functionToUpdateState
]
```

Conceptually:

```jsx
[
    "Aadil",
    function
]
```

The first element is:

```text
Index 0 → Current state
```

The second element is:

```text
Index 1 → State updater function
```

---

## Without Destructuring

We can technically access these values using indexes:

```jsx
const stateArray = useState("Aadil");

const name = stateArray[0];

const setName = stateArray[1];
```

Here:

```text
stateArray[0] → "Aadil"
stateArray[1] → updater function
```

However, this approach is not commonly used.

---

# 🧹 Destructuring – Making It Clean

Instead, React applications normally use **array destructuring**.

```jsx
const [name, setName] = useState("Aadil");
```

This is equivalent to:

```jsx
const stateArray = useState("Aadil");

const name = stateArray[0];

const setName = stateArray[1];
```

The destructuring version is much cleaner:

```jsx
const [name, setName] = useState("Aadil");
```

### Remember

```text
Index 0 → State variable
Index 1 → State updater
```

---

# 🔄 How to Update State

To update state, call the updater function.

Example:

```jsx
const [name, setName] = useState("Aadil");
```

To change the name:

```jsx
setName("Kumar");
```

The flow is:

```text
Initial State
     ↓
name = "Aadil"
     ↓
User clicks button
     ↓
setName("Kumar")
     ↓
React updates state
     ↓
Component re-renders
     ↓
name = "Kumar"
```

---

# Example

```jsx
<h1>Hello, {name}!</h1>
```

Initially:

```text
Hello, Aadil!
```

After:

```jsx
setName("Kumar");
```

The UI becomes:

```text
Hello, Kumar!
```

---

# ⚠️ Rules of Hooks

The Rules of Hooks apply to all React Hooks, including:

```text
useState
useEffect
useContext
useReducer
useMemo
useCallback
```

There are two important rules.

---

## Rule 1: Only Call Hooks at the Top Level

Hooks should not be called inside:

* `if`
* `else`
* `for`
* `while`
* `switch`
* Nested functions

### ❌ Incorrect

```jsx
function App() {

    if (true) {

        const [count, setCount] = useState(0);

    }

}
```

### ✅ Correct

```jsx
function App() {

    const [count, setCount] = useState(0);

    return <h1>{count}</h1>;
}
```

React expects Hooks to be called in the **same order on every render**.

---

# Rule 2: Only Call Hooks from React Functions

Hooks should be called from:

* React function components
* Custom Hooks

### ✅ Correct

```jsx
function App() {

    const [count, setCount] = useState(0);

    return <h1>{count}</h1>;
}
```

Do not call Hooks from ordinary JavaScript functions.

---

# 💻 Complete Code Examples

# Example 1: Name Changer

```jsx
import { useState } from "react";

function NameComponent() {

    const [name, setName] = useState("Aadil");

    const updateName = () => {
        setName("Kumar");
    };

    return (
        <div>

            <h1>Hello, {name}!</h1>

            <button onClick={updateName}>
                Change Name
            </button>

        </div>
    );
}

export default NameComponent;
```

## What Happens?

Initially:

```text
name = "Aadil"
```

The screen displays:

```text
Hello, Aadil!
```

When the button is clicked:

```jsx
setName("Kumar");
```

The state changes:

```text
Aadil → Kumar
```

React re-renders the component.

The screen now displays:

```text
Hello, Kumar!
```

---

# Example 2: Counter

```jsx
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>

            <h2>Count: {count}</h2>

            <button onClick={increment}>
                +
            </button>

            <button onClick={decrement}>
                -
            </button>

        </div>
    );
}

export default Counter;
```

### Initial State

```text
count = 0
```

Click `+`:

```text
0 → 1
```

Click `+` again:

```text
1 → 2
```

Click `-`:

```text
2 → 1
```

---

# 📦 Using Different Data Types

`useState` can store different JavaScript data types.

---

## String

```jsx
const [name, setName] = useState("Aadil");
```

---

## Number

```jsx
const [age, setAge] = useState(25);
```

---

## Boolean

```jsx
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

---

## Array

```jsx
const [items, setItems] = useState([
    "Apple",
    "Banana"
]);
```

---

## Object

```jsx
const [user, setUser] = useState({
    name: "Aadil",
    age: 25
});
```

---

# 🧱 Updating Objects

Suppose our state contains:

```jsx
const [user, setUser] = useState({
    name: "Aadil",
    age: 25
});
```

We want to update only the age.

### ❌ Avoid Direct Mutation

```jsx
user.age = 26;
```

Do not directly modify the state object.

### ✅ Use the Setter

```jsx
setUser(prevUser => ({
    ...prevUser,
    age: 26
}));
```

The spread operator:

```jsx
...prevUser
```

copies the existing properties.

Before:

```jsx
{
    name: "Aadil",
    age: 25
}
```

After:

```jsx
{
    name: "Aadil",
    age: 26
}
```

The `name` property is preserved.

---

# 📋 Complete Object Example

```jsx
import { useState } from "react";

function User() {

    const [user, setUser] = useState({
        name: "Aadil",
        age: 25
    });

    const increaseAge = () => {

        setUser(prevUser => ({
            ...prevUser,
            age: prevUser.age + 1
        }));

    };

    return (
        <div>

            <h2>Name: {user.name}</h2>

            <h2>Age: {user.age}</h2>

            <button onClick={increaseAge}>
                Increase Age
            </button>

        </div>
    );
}

export default User;
```

---

# 📚 Updating Arrays

Suppose we have:

```jsx
const [items, setItems] = useState([
    "Apple",
    "Banana"
]);
```

To add an item:

```jsx
setItems([
    ...items,
    "Orange"
]);
```

Result:

```text
Apple
Banana
Orange
```

---

## Using Functional Update

A safer approach when the new array depends on the previous array is:

```jsx
setItems(prevItems => [
    ...prevItems,
    "Orange"
]);
```

---

# Removing an Item

We can use methods such as:

```text
filter()
slice()
```

For example, to remove the first item:

```jsx
setItems(prevItems => prevItems.slice(1));
```

To remove a specific item:

```jsx
setItems(prevItems =>
    prevItems.filter(item => item !== "Banana")
);
```

---

# 🔄 Functional Updates – Why and How

Sometimes the new state depends on the **previous state**.

For these situations, use the functional form of the setter.

Instead of:

```jsx
setCount(count + 1);
```

we can write:

```jsx
setCount(prevCount => prevCount + 1);
```

Here:

```text
prevCount
```

represents the previous state value supplied by React.

---

# When Should You Use Functional Updates?

Use functional updates when the new value depends on the previous value.

Examples:

### Counter

```jsx
setCount(prev => prev + 1);
```

### Toggle

```jsx
setIsLoggedIn(prev => !prev);
```

### Array

```jsx
setItems(prevItems => [
    ...prevItems,
    "Orange"
]);
```

### Object

```jsx
setUser(prevUser => ({
    ...prevUser,
    age: prevUser.age + 1
}));
```

---

# Multiple State Updates

Consider:

```jsx
setCount(count + 1);
setCount(count + 1);
```

Students may expect the count to increase by `2`.

However, both updates can be based on the same value of `count` from the current render.

Instead, use functional updates:

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

Now each update is calculated from the previous state value.

### Important Rule

> If the new state depends on the previous state, prefer the functional update form.

---

# 🔍 State vs Normal Variables

This is an important React concept.

## Normal Variable

```jsx
let count = 0;

count++;
```

React does not track this variable as component state.

---

## State Variable

```jsx
const [count, setCount] = useState(0);

setCount(count + 1);
```

React tracks the state and schedules a re-render when it changes.

### Comparison

| Normal Variable                                          | State                             |
| -------------------------------------------------------- | --------------------------------- |
| `let count = 0`                                          | `useState(0)`                     |
| React does not track it as state                         | React tracks it                   |
| Changing it does not trigger a React re-render           | Setter schedules a re-render      |
| Value is not preserved as component state across renders | State is preserved across renders |

---

# ❌ Common Mistakes

## Mistake 1: Directly Changing State

❌ Incorrect:

```jsx
count = count + 1;
```

✅ Correct:

```jsx
setCount(count + 1);
```

---

## Mistake 2: Mutating an Object

❌ Incorrect:

```jsx
user.age = 30;
```

✅ Correct:

```jsx
setUser(prev => ({
    ...prev,
    age: 30
}));
```

---

## Mistake 3: Mutating an Array

❌ Avoid:

```jsx
items.push("Orange");
```

✅ Correct:

```jsx
setItems(prev => [
    ...prev,
    "Orange"
]);
```

---

## Mistake 4: Calling Hook Inside Condition

❌ Incorrect:

```jsx
if (isLoggedIn) {
    const [name, setName] = useState("");
}
```

✅ Correct:

```jsx
const [name, setName] = useState("");
```

---

## Mistake 5: Forgetting to Import `useState`

❌

```jsx
const [count, setCount] = useState(0);
```

without importing it.

✅

```jsx
import { useState } from "react";
```

---

# 📋 Summary Cheat Sheet

| Concept           | Description                                                |
| ----------------- | ---------------------------------------------------------- |
| `useState`        | Hook used to add state to functional components            |
| State             | Data that can change and affect the UI                     |
| Initial Value     | Starting value passed to `useState()`                      |
| Return Value      | `[currentState, setStateFunction]`                         |
| Setter            | Function used to update state                              |
| Re-render         | React updates the component after a state update           |
| Destructuring     | `const [state, setState] = useState(initial)`              |
| Functional Update | `setState(prev => newValue)`                               |
| Object State      | Use spread syntax to create a new object                   |
| Array State       | Use methods such as spread, `filter`, `map`, `slice`, etc. |
| Rules of Hooks    | Hooks must be called at the top level                      |

---

# 🧪 Practice Tasks

Practice these tasks without looking at the solution.

---

## Task 1: Toggle Switch

Create a component that displays:

```text
OFF
```

Initially.

When the button is clicked:

```text
ON
```

When clicked again:

```text
OFF
```

### Requirement

Use:

```jsx
useState(false)
```

---

## Task 2: Greeting App

Create an input field:

```text
Enter your name
```

As the user types, display:

```text
Hello, Vinay!
```

### Requirement

Use:

```jsx
useState("")
```

and:

```jsx
onChange
```

---

## Task 3: Shopping Cart

Create a shopping cart using an array state.

Initial items:

```jsx
[
    "Laptop",
    "Mouse"
]
```

Create a button to add:

```text
Keyboard
```

Display all items using:

```jsx
map()
```

---

## Task 4: Age Calculator

Create an object state:

```jsx
{
    firstName: "Aadil",
    birthYear: 2000
}
```

Calculate the current age dynamically.

Display:

```text
Name: Aadil
Age: 26
```

---

## Task 5: Student Manager

Create an array of student objects:

```jsx
[
    {
        name: "Aadil",
        age: 20
    },
    {
        name: "Rahul",
        age: 21
    }
]
```

Add a button that adds another student.

Display the students using:

```jsx
map()
```

---

# 🎯 Final Revision

Before moving to the next React Hook, make sure you understand these concepts:

### 1. What is state?

State is data that can change and affect the UI.

### 2. What is `useState`?

A React Hook used to add state to functional components.

### 3. What does it return?

An array containing:

```jsx
[
    currentState,
    updaterFunction
]
```

### 4. How do we use it?

```jsx
const [count, setCount] = useState(0);
```

### 5. How do we update it?

```jsx
setCount(10);
```

### 6. What if the new value depends on the previous value?

Use:

```jsx
setCount(prev => prev + 1);
```

### 7. How do we update an object?

```jsx
setUser(prev => ({
    ...prev,
    age: 26
}));
```

### 8. How do we update an array?

```jsx
setItems(prev => [
    ...prev,
    "Orange"
]);
```

### 9. Can Hooks be called inside conditions?

**No.**

Hooks must be called at the top level.

---

# 🧠 The Most Important Pattern

Remember this:

```jsx
const [state, setState] = useState(initialValue);
```

Examples:

```jsx
const [name, setName] = useState("Aadil");

const [count, setCount] = useState(0);

const [age, setAge] = useState(25);

const [isLoggedIn, setIsLoggedIn] = useState(false);

const [items, setItems] = useState([]);

const [user, setUser] = useState({});
```

And remember:

```text
State changes
     ↓
Setter function
     ↓
React schedules re-render
     ↓
Component renders again
     ↓
Updated UI
```

---

# 🚀 What's Next?

After understanding `useState`, the next important React concepts are:

```text
1. useState
      ↓
2. Event Handling
      ↓
3. Forms
      ↓
4. useEffect
      ↓
5. API Integration
      ↓
6. useContext
      ↓
7. useReducer
      ↓
8. Custom Hooks
```

Master `useState` first. It is the foundation for understanding how React manages changing data.

> **State makes your UI dynamic, and `useState` gives your functional components the ability to manage that state.**
