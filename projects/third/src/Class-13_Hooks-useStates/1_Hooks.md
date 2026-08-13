# Introduction to React Hooks 🚀

Welcome to the world of **React Hooks**.

React Hooks are one of the most important concepts in modern React development. They allow functional components to use React features such as **state, side effects, context, references, and more** without converting them into class components.

This README provides a beginner-friendly introduction to:

* What React Hooks are
* Why Hooks were introduced
* React before and after Hooks
* Whether Hooks replaced class components
* Rules of Hooks
* When to use Hooks
* Built-in Hooks
* Custom Hooks
* Practical comparison between class components and functional components

---

# 📌 Table of Contents

1. [Prerequisites](#-prerequisites)
2. [What Are React Hooks?](#-what-are-react-hooks)
3. [Why Were Hooks Introduced?](#-why-were-hooks-introduced)
4. [React Before Hooks](#-react-before-hooks)
5. [React After Hooks](#-react-after-hooks)
6. [Did Hooks Replace Class Components?](#-did-hooks-replace-class-components)
7. [Rules of Hooks](#️-rules-of-hooks)
8. [When Should We Use Hooks?](#-when-should-we-use-hooks)
9. [Built-in React Hooks](#-built-in-react-hooks)
10. [Custom Hooks](#-custom-hooks)
11. [Class vs Functional Components](#-class-vs-functional-components)
12. [Rules of Hooks – Code Examples](#-rules-of-hooks--code-examples)
13. [Summary Cheat Sheet](#-summary-cheat-sheet)
14. [Interview Questions](#-interview-questions)
15. [What's Next?](#-whats-next)

---

# 📚 Prerequisites

Before learning React Hooks, students should understand the following React concepts:

| Concept               | Why Is It Important?                                                            |
| --------------------- | ------------------------------------------------------------------------------- |
| Functional Components | Hooks are primarily used inside function components                             |
| Class Components      | Helps understand how React was commonly written before Hooks                    |
| State                 | Hooks such as `useState` are used to manage state                               |
| Props                 | Hooks work alongside props in React components                                  |
| Lifecycle Methods     | Helps understand Hooks such as `useEffect`                                      |
| Event Handling        | Frequently used with state and Hooks                                            |
| Array Methods         | Methods such as `map`, `filter`, and `reduce` are commonly used with React data |

### Recommended React Knowledge

Before starting Hooks, students should be comfortable with:

```text
React
 ├── Components
 ├── JSX
 ├── Props
 ├── State
 ├── Events
 ├── Conditional Rendering
 └── Array Methods
```

Understanding these concepts will make Hooks much easier to learn.

---

# 🧠 What Are React Hooks?

**Hooks are functions that allow functional components to use React features.**

Before Hooks, many React features such as state and lifecycle functionality were commonly associated with class components.

Hooks allow us to use these features directly inside functional components.

For example:

```jsx
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <h1>{count}</h1>
    );
}
```

Here:

```jsx
useState()
```

is a React Hook.

---

# 🎣 Simple Analogy

Think about a fishing hook.

A fishing hook connects you to the fish.

Similarly, a React Hook connects a functional component to React features.

```text
Functional Component
        ↓
      Hook
        ↓
React Feature
        ↓
State / Effect / Context / Ref
```

For example:

```text
Component
    ↓
useState()
    ↓
State
```

---

# ⏳ Why Were Hooks Introduced?

To understand Hooks, we need to understand how React was commonly written before Hooks.

React was released in:

```text
March 29, 2013
```

Hooks were introduced later with:

```text
React 16.8
February 16, 2019
```

---

# 🕰️ React Before Hooks

Before Hooks, functional components were commonly used for simpler UI logic.

When developers needed state or lifecycle methods, they generally used **class components**.

For example:

```jsx
class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <h1>
                {this.state.count}
            </h1>
        );
    }
}
```

This works, but requires more code.

---

# 🚀 React After Hooks

With React 16.8, Hooks allowed developers to use state and other React features inside functional components.

For example:

```jsx
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <h1>{count}</h1>
    );
}
```

The same concept can now be implemented with a much simpler functional component.

---

# 🔄 Before Hooks vs After Hooks

```text
BEFORE HOOKS

Functional Component
        ↓
Need State?
        ↓
Convert / use Class Component
        ↓
Manage State
```

After Hooks:

```text
AFTER HOOKS

Functional Component
        ↓
Need State?
        ↓
useState()
        ↓
Manage State
```

This is one of the main reasons Hooks became so important.

---

# ❓ Did Hooks Replace Class Components?

## No.

Hooks did **not** mean that class components suddenly became invalid.

Class components remain part of React and are especially important when working with older or legacy React applications.

### Important Points

1. Hooks are an additional feature.
2. Existing class components can continue to work.
3. Many older projects use class components.
4. Developers may need to understand class components when maintaining legacy applications.
5. Hooks provide a modern way to write many React components.

### Remember

> **Hooks are not simply "the replacement for classes." They provide another way to use React features, especially in function components.**

---

# ⚠️ Rules of Hooks

The **Rules of Hooks** are extremely important.

React relies on Hooks being called in a predictable order.

There are two core rules:

```text
Rule 1:
Only call Hooks at the top level.

Rule 2:
Only call Hooks from React functions or Custom Hooks.
```

---

# Rule 1: Call Hooks at the Top Level

Hooks should be called at the top level of your component.

### ❌ Don't Do This

```jsx
function App() {

    if (isLoggedIn) {

        const [name, setName] = useState("");

    }

}
```

The Hook is inside a condition.

---

### ❌ Don't Do This

```jsx
function App() {

    for (let i = 0; i < 5; i++) {

        const [count, setCount] = useState(0);

    }

}
```

The Hook is inside a loop.

---

### ❌ Don't Do This

```jsx
function App() {

    function handleClick() {

        const [name, setName] = useState("");

    }

}
```

The Hook is inside a nested function.

---

### ✅ Correct

```jsx
function App() {

    const [name, setName] = useState("");

    return (
        <h1>{name}</h1>
    );
}
```

The Hook is called directly at the top level.

---

# Why Must Hooks Be Called at the Top Level?

React relies on the **order of Hook calls** to preserve the correct state between renders.

For example:

```jsx
const [name, setName] = useState("");
const [age, setAge] = useState(20);
const [city, setCity] = useState("Delhi");
```

React keeps track of these Hooks based on their order.

Conceptually:

```text
1st Hook → name
2nd Hook → age
3rd Hook → city
```

If the order changes between renders, React can no longer reliably associate the correct state with the correct Hook.

Therefore:

> **Hooks must be called in the same order on every render.**

---

# Rule 2: Only Call Hooks from React Functions

Hooks should be called from:

* React function components
* Custom Hooks

### ✅ React Function Component

```jsx
function App() {

    const [count, setCount] = useState(0);

    return <h1>{count}</h1>;
}
```

### ✅ Custom Hook

```jsx
function useCounter() {

    const [count, setCount] = useState(0);

    return [count, setCount];
}
```

### ❌ Regular JavaScript Function

```jsx
function calculateSomething() {

    const [count, setCount] = useState(0);

}
```

A normal JavaScript function is not a valid place to call a React Hook.

---

# 🚫 Where Hooks Should NOT Be Called

Do not call Hooks:

```text
❌ Inside if/else
❌ Inside loops
❌ Inside switch statements
❌ Inside nested functions
❌ Inside regular JavaScript functions
❌ Inside class components
```

Instead:

```text
✅ React Function Component
✅ Custom Hook
```

---

# 🎯 When Should We Use Hooks?

Hooks are useful whenever a functional component needs React functionality.

For example:

### Need State?

Use:

```jsx
useState()
```

### Need Side Effects?

Use:

```jsx
useEffect()
```

### Need Context?

Use:

```jsx
useContext()
```

### Need a Persistent Reference?

Use:

```jsx
useRef()
```

### Need Memoization?

Use:

```jsx
useMemo()
```

or:

```jsx
useCallback()
```

---

# 📦 Built-in React Hooks

React provides several built-in Hooks.

Some important Hooks are:

| Hook          | Purpose                    |
| ------------- | -------------------------- |
| `useState`    | Manage component state     |
| `useEffect`   | Perform side effects       |
| `useContext`  | Access Context values      |
| `useRef`      | Store a mutable reference  |
| `useMemo`     | Memoize a calculated value |
| `useCallback` | Memoize a function         |
| `useReducer`  | Manage complex state logic |

We will study these Hooks individually in upcoming lectures.

---

# 1️⃣ `useState`

`useState` is used to manage state inside a functional component.

```jsx
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    );
}
```

Detailed study of `useState` comes in the next lecture.

---

# 2️⃣ `useEffect`

`useEffect` is used for handling **side effects**.

Examples include:

```text
API calls
Timers
Subscriptions
DOM-related side effects
```

Basic example:

```jsx
import { useEffect } from "react";

function App() {

    useEffect(() => {
        console.log("Component rendered");
    });

    return <h1>Hello React</h1>;
}
```

`useEffect` will be studied separately.

---

# 3️⃣ `useContext`

`useContext` allows a component to access data from React Context.

It is commonly useful when data needs to be shared between components without passing props through every level.

---

# 4️⃣ `useRef`

`useRef` creates a reference that persists between renders.

A common use case is accessing a DOM element.

```jsx
const inputRef = useRef();
```

---

# 5️⃣ `useMemo`

`useMemo` can be used to memoize a calculated value.

It is useful when a calculation is expensive and should not unnecessarily run again.

---

# 6️⃣ `useCallback`

`useCallback` is used to memoize a function.

It can be useful when passing functions to child components and trying to avoid unnecessary re-renders.

---

# 7️⃣ `useReducer`

`useReducer` is useful for managing more complex state logic.

Example:

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

It is especially useful when state transitions involve multiple actions or complex logic.

---

# 🛠️ Custom Hooks

React also allows developers to create their own Hooks.

These are called **Custom Hooks**.

A Custom Hook is a JavaScript function that:

1. Starts with `use`
2. Can call other Hooks
3. Allows reusable stateful logic

Examples:

```text
useFetch()
useLocalStorage()
useCounter()
useForm()
```

---

# Example: Custom Hook

For example:

```jsx
function useCounter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1);
    };

    return {
        count,
        increment
    };
}
```

A component can use it:

```jsx
function App() {

    const { count, increment } = useCounter();

    return (
        <div>

            <h1>{count}</h1>

            <button onClick={increment}>
                Increment
            </button>

        </div>
    );
}
```

The benefit is that the logic can be reused by multiple components.

---

# 🔁 Why Custom Hooks?

Imagine multiple components need the same API-fetching logic.

Without a Custom Hook:

```text
Component A
    ↓
Fetch Logic

Component B
    ↓
Same Fetch Logic

Component C
    ↓
Same Fetch Logic
```

This can lead to duplicated code.

With a Custom Hook:

```text
             useFetch()
                ↓
       ┌────────┼────────┐
       ↓        ↓        ↓
Component A  Component B  Component C
```

The stateful logic can be reused.

---

# 🆚 Class Component vs Functional Component

Let's compare a simple component that stores a name.

## Before Hooks – Class Component

```jsx
import React, { Component } from "react";

class NameComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: "Aadil"
        };

    }

    updateName = () => {

        this.setState({
            name: "Kumar"
        });

    };

    render() {

        return (
            <div>

                <h1>
                    Hello, {this.state.name}!
                </h1>

                <button onClick={this.updateName}>
                    Change Name
                </button>

            </div>
        );
    }
}

export default NameComponent;
```

---

# 🚀 After Hooks – Functional Component

The same functionality can be written using `useState`.

```jsx
import { useState } from "react";

function NameComponent() {

    const [name, setName] = useState("Aadil");

    const updateName = () => {

        setName("Kumar");

    };

    return (
        <div>

            <h1>
                Hello, {name}!
            </h1>

            <button onClick={updateName}>
                Change Name
            </button>

        </div>
    );
}

export default NameComponent;
```

The important concept is:

```text
Class Component
      ↓
this.state
      ↓
this.setState()
```

versus:

```text
Function Component
      ↓
useState()
      ↓
setState()
```

The practical details of `useState` will be covered separately.

---

# 🚨 Visualizing the Rules of Hooks

## ❌ Hook Inside a Condition

```jsx
function MyComponent() {

    if (userLoggedIn) {

        const [data, setData] = useState(null);

    }

}
```

### Problem

The Hook may not be called on every render.

---

## ❌ Hook Inside a Nested Function

```jsx
function MyComponent() {

    function handleClick() {

        const [data, setData] = useState(null);

    }

}
```

### Problem

`handleClick` is a normal nested function, not the component itself or a Custom Hook.

---

## ✅ Hook at the Top Level

```jsx
function MyComponent() {

    const [data, setData] = useState(null);

    function handleClick() {

        setData("New Data");

    }

    return (
        <button onClick={handleClick}>
            Update
        </button>
    );
}
```

Notice that:

```jsx
useState()
```

is declared at the top level.

The event handler can use the **state updater function**, but should not declare a new Hook.

---

# 📋 Summary Cheat Sheet

| Topic                 | Summary                                                          |
| --------------------- | ---------------------------------------------------------------- |
| React Hooks           | Functions that allow functional components to use React features |
| Introduced            | React 16.8                                                       |
| Year                  | 2019                                                             |
| Before Hooks          | State and lifecycle logic commonly required class components     |
| Functional Components | Can use Hooks                                                    |
| Class Components      | Hooks cannot be called inside them                               |
| `useState`            | Manages state                                                    |
| `useEffect`           | Handles side effects                                             |
| `useContext`          | Accesses Context                                                 |
| `useRef`              | Creates persistent references                                    |
| `useMemo`             | Memoizes calculated values                                       |
| `useCallback`         | Memoizes functions                                               |
| `useReducer`          | Manages complex state logic                                      |
| Custom Hooks          | Reusable stateful logic                                          |
| Rule 1                | Call Hooks at the top level                                      |
| Rule 2                | Call Hooks from React functions or Custom Hooks                  |
| Hook Order            | Must remain consistent across renders                            |

---

# 🧠 Memory Trick

Remember:

```text
HOOKS
```

### H → High Level / Top Level

Call Hooks at the top level.

### O → Only React Functions

Call Hooks from React function components or Custom Hooks.

### O → Order Matters

Hooks must be called in the same order on every render.

### K → Keep Conditions Away

Do not call Hooks inside conditions or loops.

### S → Stateful Logic

Hooks allow functional components to use React features such as state and effects.

---

# 🎤 Interview Questions

Students should be able to answer these questions after completing this lecture.

### Basic

1. What are React Hooks?
2. Why were Hooks introduced?
3. When were Hooks introduced?
4. Which React version introduced Hooks?
5. What problem did Hooks solve?
6. Can Hooks be used inside class components?
7. Can Hooks be called inside normal JavaScript functions?

### Rules of Hooks

8. What are the Rules of Hooks?
9. Why must Hooks be called at the top level?
10. Can we call `useState()` inside an `if` statement?
11. Can we call a Hook inside a loop?
12. Can we call a Hook inside an event handler?
13. Why does Hook call order matter?

### Practical

14. What is `useState` used for?
15. What is `useEffect` used for?
16. What is `useContext` used for?
17. What is `useRef` used for?
18. What are Custom Hooks?
19. Why do Custom Hooks start with `use`?
20. What is the difference between a built-in Hook and a Custom Hook?

---

# 📝 Important Takeaways

Remember these points:

```text
1. Hooks are functions.
2. Hooks allow functional components to use React features.
3. Hooks were introduced in React 16.8.
4. Hooks simplified stateful logic in function components.
5. Hooks did not make class components invalid.
6. Hooks must be called at the top level.
7. Hooks must be called from React functions or Custom Hooks.
8. Hook order must remain consistent across renders.
9. Custom Hooks allow stateful logic to be reused.
10. useState is one of the first Hooks you should master.
```

---

# 🚀 Learning Roadmap

This lecture is only the **Introduction to React Hooks**.

The recommended learning sequence is:

```text
Introduction to Hooks
        ↓
useState
        ↓
Event Handling + State
        ↓
Forms with useState
        ↓
useEffect
        ↓
API Integration
        ↓
useContext
        ↓
useReducer
        ↓
useRef
        ↓
useMemo
        ↓
useCallback
        ↓
Custom Hooks
```

---

# 🎯 Final Conclusion

React Hooks changed the way developers write React applications by allowing functional components to use powerful React features without relying on class components.

The most important ideas from this lecture are:

```text
Hooks
  ↓
Functions
  ↓
React Features
  ↓
State / Effects / Context / Refs
```

And the most important Rules of Hooks are:

```text
✅ Call Hooks at the top level
✅ Call Hooks from React functions
✅ Call Hooks from Custom Hooks

❌ Don't call Hooks inside conditions
❌ Don't call Hooks inside loops
❌ Don't call Hooks inside nested functions
❌ Don't call Hooks inside class components
```

> **Master the concept of Hooks first. Then learn each Hook practically, starting with `useState`.**

---

## 📂 Suggested GitHub Structure

```text
React-Notes/
│
├── 01_Introduction/
│   └── Introduction_to_React_Hooks.md
│
├── 02_useState/
│   └── useState.md
│
├── 03_useEffect/
│   └── useEffect.md
│
├── 04_useContext/
│   └── useContext.md
│
├── 05_useReducer/
│   └── useReducer.md
│
└── 06_Custom_Hooks/
    └── Custom_Hooks.md
```

This introduction should remain primarily **conceptual**; the detailed practical coding begins with the individual Hook lectures, especially `useState`. The uploaded source itself identifies the introduction as foundational and points toward detailed practical lectures later.
