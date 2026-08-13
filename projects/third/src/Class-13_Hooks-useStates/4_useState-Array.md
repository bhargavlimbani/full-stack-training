# React `useState` Hook with Arrays (Lists) 📘

In the previous lectures, we learned how to manage:

* Strings
* Numbers
* Booleans
* Objects

In this lecture, we will learn how to manage **arrays (lists)** using React's `useState` Hook.

Arrays are extremely common in React applications. They are used for:

* Todo lists
* Student lists
* Product lists
* Shopping carts
* API data
* Notifications
* Menu items
* Dynamic forms

By the end of this lecture, you will understand how to:

* Store an array in `useState`
* Render an array using `.map()`
* Use the `key` prop
* Replace an entire array
* Add items to an array
* Add random values
* Maintain immutability
* Use the spread operator
* Use functional state updates

---

## 📌 Table of Contents

1. [Recap: `useState` Can Hold Anything](#-recap-usestate-can-hold-anything)
2. [Creating an Array in State](#-step-1-creating-an-array-in-state)
3. [Rendering an Array](#-step-2-rendering-an-array-list-rendering)
4. [The `key` Prop](#-step-3-the-key-prop)
5. [Replacing the Entire Array](#-step-4-replacing-the-entire-array)
6. [Adding an Item](#-step-5-adding-an-item-to-the-array)
7. [Adding Random Numbers](#-step-6-adding-random-numbers)
8. [Important Theory](#-important-theory)
9. [Complete Example](#-complete-example)
10. [Summary Cheat Sheet](#-summary-cheat-sheet)
11. [Practice Tasks](#-practice-tasks)
12. [Key Takeaways](#-key-takeaways)

---

# 🔁 Recap: `useState` Can Hold Anything

`useState` can manage different JavaScript data types.

### String

```jsx
const [name, setName] = useState("Aadil");
```

### Number

```jsx
const [age, setAge] = useState(25);
```

### Boolean

```jsx
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

### Object

```jsx
const [user, setUser] = useState({
    name: "Aadil",
    age: 29
});
```

### Array

```jsx
const [numbers, setNumbers] = useState([11, 22, 33, 44]);
```

In this lecture, our focus is:

```text
useState
   ↓
Array
   ↓
Render Array
   ↓
Update Array
```

---

# 👨‍💻 Step 1: Creating an Array in State

Just like objects, arrays can be stored directly inside `useState`.

## Method 1: Define the Array Separately

```jsx
import React, { useState } from "react";

function UseStateWithArray() {

    const nums = [11, 22, 33, 44];

    const [numbers, setNumbers] = useState(nums);

    return (
        <div>
            <h1>Array Example</h1>
        </div>
    );
}

export default UseStateWithArray;
```

Here:

```jsx
const nums = [11, 22, 33, 44];
```

creates the array.

Then:

```jsx
const [numbers, setNumbers] = useState(nums);
```

stores that array in React state.

---

## Method 2: Directly Inside `useState`

We can also write:

```jsx
const [numbers, setNumbers] = useState([
    11,
    22,
    33,
    44
]);
```

Both approaches are valid.

---

# 🖥️ Step 2: Rendering an Array (List Rendering)

React commonly uses the JavaScript `.map()` method to render arrays.

Suppose we have:

```jsx
const numbers = [11, 22, 33, 44];
```

We can render the values using:

```jsx
numbers.map()
```

Example:

```jsx
<ul>

    {numbers.map((num) => (
        <li>{num}</li>
    ))}

</ul>
```

### Output

```text
• 11
• 22
• 33
• 44
```

---

# 🔍 Understanding `.map()`

The `.map()` method runs once for every element in the array.

For:

```jsx
const numbers = [11, 22, 33, 44];
```

the process is conceptually:

```text
11 → <li>11</li>
22 → <li>22</li>
33 → <li>33</li>
44 → <li>44</li>
```

React then renders the returned JSX elements.

---

# ⚠️ Step 3: The `key` Prop

When rendering lists in React, every list item should have a unique `key`.

Without a key:

```jsx
{numbers.map((num) => (
    <li>{num}</li>
))}
```

React displays a warning similar to:

```text
Each child in a list should have a unique "key" prop.
```

---

## Why Does React Need `key`?

React uses keys to identify individual elements in a list.

Keys help React determine:

* Which item changed
* Which item was added
* Which item was removed
* Which item should be updated

---

## Using the Index as a Key

The `.map()` callback can receive the index:

```jsx
numbers.map((num, index) => ...)
```

We can use it as the key:

```jsx
<ul>

    {numbers.map((num, index) => (
        <li key={index}>
            {num}
        </li>
    ))}

</ul>
```

For beginner examples and static lists, this is acceptable.

### Important

For dynamic lists where items can be:

* Added
* Removed
* Reordered

a stable unique ID from the data is generally preferable to using the array index.

Example:

```jsx
<li key={student.id}>
    {student.name}
</li>
```

---

# 🔄 Step 4: Replacing the Entire Array

Suppose our initial state is:

```jsx
const [numbers, setNumbers] = useState([
    11,
    22,
    33,
    44
]);
```

We can replace the entire array:

```jsx
const changeList = () => {

    setNumbers([
        55,
        66,
        77,
        88
    ]);

};
```

Button:

```jsx
<button onClick={changeList}>
    Change Array
</button>
```

### Before

```text
[11, 22, 33, 44]
```

### After clicking the button

```text
[55, 66, 77, 88]
```

The previous array has been replaced.

---

# ➕ Step 5: Adding an Item to the Array

Now suppose we want to add:

```text
98
```

to the existing array.

---

## ❌ Wrong Way

Do not do:

```jsx
const addItem = () => {

    setNumbers([98]);

};
```

Why?

Because:

```jsx
setNumbers([98]);
```

replaces the entire array.

For example:

```text
Before:

[11, 22, 33, 44]

After:

[98]
```

The existing values are lost.

---

# ✅ Correct Way: Spread Operator

Use the spread operator to copy the existing elements into a new array.

```jsx
const addItem = () => {

    setNumbers(prevState => [
        ...prevState,
        98
    ]);

};
```

### How it works

Suppose:

```text
prevState = [11, 22, 33, 44]
```

The spread operator:

```jsx
...prevState
```

copies:

```text
11
22
33
44
```

Then:

```jsx
98
```

is added.

Final result:

```text
[11, 22, 33, 44, 98]
```

---

# 🧠 Understanding the Spread Operator

This:

```jsx
[
    ...prevState,
    98
]
```

can be understood as:

```text
Copy old items
      +
Add new item
      ↓
Create a new array
```

This is important because we should not directly modify the existing state array.

---

# 🎲 Step 6: Adding Random Numbers

We can also generate a random number whenever the button is clicked.

```jsx
const addRandomItem = () => {

    setNumbers(prevState => [
        ...prevState,
        Math.floor(Math.random() * 50)
    ]);

};
```

---

## Understanding the Random Number

### `Math.random()`

Generates a decimal number between `0` and `1`.

Example:

```text
0.764
```

### Multiply by `50`

```jsx
Math.random() * 50
```

Example:

```text
38.2
```

### `Math.floor()`

Removes the decimal part:

```jsx
Math.floor(38.2)
```

Result:

```text
38
```

Therefore:

```jsx
Math.floor(Math.random() * 50)
```

generates an integer from:

```text
0 to 49
```

---

# 📖 Important Theory

| Concept           | Explanation                                                  |
| ----------------- | ------------------------------------------------------------ |
| Array State       | An array can be stored directly inside `useState`            |
| State Replacement | `setNumbers()` replaces the current array with the new value |
| Spread Operator   | `...prevState` copies existing array elements                |
| Functional Update | `prevState => ...` gives access to the previous state        |
| `.map()`          | Used to transform/render array elements                      |
| `key`             | Helps React identify list elements                           |
| Immutability      | Do not directly modify the existing state array              |
| New Array         | Create a new array when updating state                       |

---

# 🚫 Never Mutate the State Array Directly

One common mistake is:

```jsx
numbers.push(98);
```

This directly modifies the existing array.

Avoid this approach.

Instead:

```jsx
setNumbers(prevState => [
    ...prevState,
    98
]);
```

This creates a new array.

---

# 💻 Complete Example

```jsx
import React, { useState } from "react";

function UseStateWithArray() {

    // Initial array state
    const [numbers, setNumbers] = useState([
        11,
        22,
        33,
        44
    ]);

    // Replace the complete array
    const changeList = () => {

        setNumbers([
            55,
            66,
            77,
            88
        ]);

    };

    // Add a static number
    const addItem = () => {

        setNumbers(prevState => [
            ...prevState,
            98
        ]);

    };

    // Add a random number
    const addRandomItem = () => {

        setNumbers(prevState => [
            ...prevState,
            Math.floor(Math.random() * 50)
        ]);

    };

    return (
        <div>

            <h1>Numbers List</h1>

            <ul>

                {numbers.map((num, index) => (
                    <li key={index}>
                        {num}
                    </li>
                ))}

            </ul>

            <button onClick={changeList}>
                Replace All
            </button>

            <br />
            <br />

            <button onClick={addItem}>
                Add 98
            </button>

            <br />
            <br />

            <button onClick={addRandomItem}>
                Add Random Number
            </button>

        </div>
    );
}

export default UseStateWithArray;
```

---

# 🔍 Complete Flow

The component follows this flow:

```text
Initial State
     ↓
[11, 22, 33, 44]
     ↓
.map()
     ↓
Render List
     ↓
User Clicks Button
     ↓
setNumbers()
     ↓
New Array
     ↓
React Re-renders
     ↓
Updated List
```

---

# 📋 Summary Cheat Sheet

| Scenario               | Code                                                        |
| ---------------------- | ----------------------------------------------------------- |
| Create array state     | `const [numbers, setNumbers] = useState([11, 22, 33, 44]);` |
| Replace entire array   | `setNumbers([55, 66, 77, 88]);`                             |
| Add item to end        | `setNumbers(prev => [...prev, newItem]);`                   |
| Add item to beginning  | `setNumbers(prev => [newItem, ...prev]);`                   |
| Remove item            | `setNumbers(prev => prev.filter(item => item !== target));` |
| Render array           | `numbers.map((num) => <li>{num}</li>)`                      |
| Render with key        | `numbers.map((num, index) => <li key={index}>{num}</li>)`   |
| Generate random number | `Math.floor(Math.random() * 50)`                            |
| Reverse array safely   | `setNumbers(prev => [...prev].reverse());`                  |

---

# 🧪 Practice Tasks

## Task 1: Simple To-Do List

Create an array state:

```jsx
const [tasks, setTasks] = useState([
    "Learn React",
    "Build Project"
]);
```

Render the tasks using `.map()`.

Add a button that adds:

```text
New Task
```

to the array.

---

## Task 2: Remove an Item

Add a button next to every item.

When the button is clicked, remove that item from the array.

Hint:

```jsx
setNumbers(prev =>
    prev.filter((num, index) => index !== indexToRemove)
);
```

---

## Task 3: Reverse the List

Create a button that reverses the array.

Do not directly use:

```jsx
prev.reverse()
```

because `.reverse()` mutates the existing array.

Instead:

```jsx
setNumbers(prev =>
    [...prev].reverse()
);
```

---

## Task 4: Add Numbers

Create three buttons:

```text
Add 10
Add 20
Add 30
```

Each button should add its respective number to the array.

---

## Task 5: Clear the Array

Create a button:

```text
Clear All
```

When clicked, the array should become:

```jsx
[]
```

Hint:

```jsx
setNumbers([]);
```

---

# 🎯 Key Takeaways

1. `useState` can store arrays.
2. `.map()` is commonly used to render array data in React.
3. Every rendered list item should have a `key`.
4. `setNumbers()` replaces the existing array.
5. Use the spread operator to preserve existing items.
6. Use functional updates when the new state depends on the previous state.
7. Never directly mutate state using methods such as `push()`.
8. Create a new array when updating state.
9. Use `.filter()` to remove items.
10. Use `.map()` to update or transform items.
11. Use `[...prev].reverse()` when reversing an array without mutating the existing state.

---

# 🌐 Real-World Applications

Array state is used throughout real React applications.

### Todo List

```jsx
const [tasks, setTasks] = useState([]);
```

### Shopping Cart

```jsx
const [cart, setCart] = useState([]);
```

### Student List

```jsx
const [students, setStudents] = useState([]);
```

### Product List

```jsx
const [products, setProducts] = useState([]);
```

### Notifications

```jsx
const [notifications, setNotifications] = useState([]);
```

The same concepts will be used when working with:

```text
Arrays
   ↓
Objects
   ↓
Arrays of Objects
   ↓
API Data
   ↓
Real React Applications
```

---

> **Mastering array state is an important step toward building dynamic React applications.**
>
> You will use these patterns in Todo Lists, Shopping Carts, Student Management Systems, Product Catalogs, Forms, Dashboards, and many other applications.

# 🚀 Happy Coding!
