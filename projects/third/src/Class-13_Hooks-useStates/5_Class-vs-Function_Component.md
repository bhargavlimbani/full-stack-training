# React State: Class Component vs Functional Component 📘

In the previous lectures, we learned how to use the `useState` Hook to manage state inside functional components.

In this lecture, we will compare the **old approach of managing state using Class Components** with the **modern approach using Functional Components and Hooks**.

We will build the same **Counter Application** using both approaches.

---

## 📌 Table of Contents

1. [Learning Objective](#-learning-objective)
2. [Part 1: Class Component](#-part-1-class-component)
3. [Understanding `this.state`](#-understanding-thisstate)
4. [Understanding `this.setState()`](#-understanding-thissetstate)
5. [Part 2: Functional Component](#-part-2-functional-component)
6. [Understanding `useState`](#-understanding-usestate)
7. [Part 3: Class vs Functional Components](#-part-3-class-vs-functional-components)
8. [Complete Project Code](#-complete-project-code)
9. [Summary Cheat Sheet](#-summary-cheat-sheet)
10. [Practice Task](#-practice-task)
11. [Key Takeaways](#-key-takeaways)

---

# 🎯 Learning Objective

In this lecture, we will build a simple **Counter Application**.

The application will have:

* A counter value
* **Increment** button
* **Decrement** button

We will implement the same application twice:

### 1. Class Component

Using:

```text
this.state
this.setState()
constructor()
render()
```

### 2. Functional Component

Using:

```text
useState()
```

The purpose of this comparison is to understand how React state management evolved from **Class Components** to **Functional Components with Hooks**.

---

# 🏛️ Part 1: Class Component

Before React Hooks were introduced, stateful React components were commonly written using **Class Components**.

A class component generally extends:

```jsx
Component
```

from React.

Example:

```jsx
import React, { Component } from "react";

class ClassState extends Component {
    
    // component code

}
```

---

# 🧱 Basic Structure of a Class Component

A traditional class component contains:

```text
Class Component
      ↓
constructor()
      ↓
this.state
      ↓
Event Handler
      ↓
this.setState()
      ↓
render()
      ↓
JSX
```

---

# 🧠 Initializing State with `this.state`

In the traditional approach, state is stored inside:

```jsx
this.state
```

Example:

```jsx
this.state = {
    counter: 0
};
```

Here:

```text
counter → state property
0       → initial value
```

We can access it using:

```jsx
this.state.counter
```

---

# 🏗️ Using the Constructor

The traditional way to initialize state is through a constructor:

```jsx
constructor(props) {

    super(props);

    this.state = {
        counter: 0
    };

}
```

### Understanding the Code

### `constructor()`

Used to initialize the component.

### `super(props)`

Calls the constructor of the parent `Component` class.

### `this.state`

Stores the component's state.

---

# 🔄 Updating State with `this.setState()`

We should **not directly modify state**.

❌ Avoid:

```jsx
this.state.counter = 10;
```

Instead, use:

```jsx
this.setState({
    counter: 10
});
```

React can then process the state update and update the UI.

---

# ➕ Increment Example

```jsx
incre = () => {

    this.setState({
        counter: this.state.counter + 1
    });

};
```

If:

```text
counter = 0
```

then after clicking:

```text
Increment
    ↓
counter = 1
```

Click again:

```text
counter = 2
```

---

# ➖ Decrement Example

```jsx
decre = () => {

    this.setState({
        counter: this.state.counter - 1
    });

};
```

If:

```text
counter = 2
```

then:

```text
Decrement
    ↓
counter = 1
```

---

# ⚠️ Understanding `this` Binding

One of the confusing parts of Class Components is the `this` keyword.

For example:

```jsx
this.incre
```

needs to correctly refer to the component instance.

One common solution is to use an arrow function:

```jsx
incre = () => {

    this.setState({
        counter: this.state.counter + 1
    });

};
```

Arrow functions preserve the expected `this` context for this usage.

---

# 💻 Class Component Example

```jsx
import React, { Component } from "react";

class ClassState extends Component {

    constructor(props) {

        super(props);

        this.state = {
            counter: 0
        };

    }

    incre = () => {

        this.setState({
            counter: this.state.counter + 1
        });

    };

    decre = () => {

        this.setState({
            counter: this.state.counter - 1
        });

    };

    render() {

        return (
            <div>

                <h1>{this.state.counter}</h1>

                <button onClick={this.incre}>
                    Increment
                </button>

                <button onClick={this.decre}>
                    Decrement
                </button>

            </div>
        );

    }
}

export default ClassState;
```

---

# 🪝 Part 2: Functional Component

Modern React applications commonly use **Functional Components with Hooks**.

With React Hooks, we can manage state without:

* `constructor`
* `this`
* `this.state`
* `this.setState()`
* Class syntax

The most common Hook for basic state management is:

```jsx
useState()
```

---

# 🧠 Understanding `useState()`

We can import `useState` from React:

```jsx
import React, { useState } from "react";
```

Then create state:

```jsx
const [count, setCount] = useState(0);
```

This gives us two values:

```text
count
   ↓
Current state

setCount
   ↓
Function used to update state
```

---

# ➕ Increment in Functional Component

```jsx
const incre = () => {

    setCount(count + 1);

};
```

The current value is:

```jsx
count
```

The updated value is passed to:

```jsx
setCount()
```

---

# ➖ Decrement in Functional Component

```jsx
const decre = () => {

    setCount(count - 1);

};
```

---

# 💻 Functional Component Example

```jsx
import React, { useState } from "react";

function FunctionState() {

    const [count, setCount] = useState(0);

    const incre = () => {

        setCount(count + 1);

    };

    const decre = () => {

        setCount(count - 1);

    };

    return (
        <div>

            <h1>{count}</h1>

            <button onClick={incre}>
                Increment
            </button>

            <button onClick={decre}>
                Decrement
            </button>

        </div>
    );
}

export default FunctionState;
```

---

# 🔍 Understanding the Difference

The same counter is implemented in both approaches.

### Class Component

```jsx
this.state.counter
```

and:

```jsx
this.setState({
    counter: this.state.counter + 1
});
```

### Functional Component

```jsx
count
```

and:

```jsx
setCount(count + 1);
```

The functional version is shorter and avoids the `this` syntax.

---

# ⚖️ Part 3: Class vs Functional Components

| Feature        | Class Component                             | Functional Component |
| -------------- | ------------------------------------------- | -------------------- |
| Syntax         | `class`                                     | `function`           |
| State          | `this.state`                                | `useState()`         |
| Update State   | `this.setState()`                           | `setStateFunction()` |
| `this` keyword | Required                                    | Not required         |
| Constructor    | Traditionally used for state initialization | Not required         |
| `render()`     | Required                                    | Not required         |
| Hooks          | Not used in the same way                    | Supported            |
| Code           | More verbose                                | More concise         |
| Modern React   | Mainly legacy code                          | Preferred approach   |

---

# 🧩 State Initialization Comparison

### Class Component

```jsx
this.state = {
    counter: 0
};
```

### Functional Component

```jsx
const [count, setCount] = useState(0);
```

---

# 🔄 State Update Comparison

### Class Component

```jsx
this.setState({
    counter: this.state.counter + 1
});
```

### Functional Component

```jsx
setCount(count + 1);
```

---

# 📖 Important Difference: Object State Updates

One important difference appears when working with objects.

In Class Components:

```jsx
this.setState({
    counter: 10
});
```

class `setState()` has merging behavior for state objects.

With functional components:

```jsx
setPerson({
    name: "Kumar"
});
```

the new object replaces the previous state value.

Therefore, if you want to preserve existing properties, use the spread operator:

```jsx
setPerson(prev => ({
    ...prev,
    name: "Kumar"
}));
```

This concept is important when working with object state in functional components.

---

# 🧮 Counter Comparison

## Class Component

```text
this.state.counter
        ↓
this.setState()
        ↓
React updates state
        ↓
render()
        ↓
Updated UI
```

## Functional Component

```text
count
 ↓
setCount()
 ↓
React updates state
 ↓
Component re-renders
 ↓
Updated UI
```

---

# 🏆 Which Approach Should You Use?

For **new React applications**, Functional Components with Hooks are the standard approach.

Example:

```jsx
function Counter() {

    const [count, setCount] = useState(0);

    // ...

}
```

However, Class Components are still important to learn because you may encounter them in:

* Older React projects
* Legacy applications
* Existing company codebases
* Older tutorials and repositories
* Projects that have not been migrated to Hooks

Therefore:

> **Learn Functional Components for modern React development, but understand Class Components for working with existing React code.**

---

# 💻 Complete Project Code

A possible project structure:

```text
src/
│
├── components/
│   ├── ClassState.js
│   └── FunctionState.js
│
└── App.js
```

---

## `App.js`

```jsx
import React from "react";

// import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";

function App() {

    return (
        <div>

            {/* Uncomment ClassState to test the class component */}

            {/* <ClassState /> */}

            <FunctionState />

        </div>
    );
}

export default App;
```

---

# `components/ClassState.js`

```jsx
import React, { Component } from "react";

class ClassState extends Component {

    constructor(props) {

        super(props);

        this.state = {
            counter: 0
        };

    }

    incre = () => {

        this.setState({
            counter: this.state.counter + 1
        });

    };

    decre = () => {

        this.setState({
            counter: this.state.counter - 1
        });

    };

    render() {

        return (
            <div>

                <h1>{this.state.counter}</h1>

                <button onClick={this.incre}>
                    Increment
                </button>

                <button onClick={this.decre}>
                    Decrement
                </button>

            </div>
        );
    }
}

export default ClassState;
```

---

# `components/FunctionState.js`

```jsx
import React, { useState } from "react";

function FunctionState() {

    const [count, setCount] = useState(0);

    const incre = () => {

        setCount(count + 1);

    };

    const decre = () => {

        setCount(count - 1);

    };

    return (
        <div>

            <h1>{count}</h1>

            <button onClick={incre}>
                Increment
            </button>

            <button onClick={decre}>
                Decrement
            </button>

        </div>
    );
}

export default FunctionState;
```

---

# 📋 Summary Cheat Sheet

| Concept         | Class Component                      | Functional Component       |
| --------------- | ------------------------------------ | -------------------------- |
| Component       | `class ClassState extends Component` | `function FunctionState()` |
| State           | `this.state`                         | `useState()`               |
| Initial State   | `this.state = { counter: 0 }`        | `useState(0)`              |
| Read State      | `this.state.counter`                 | `count`                    |
| Update State    | `this.setState()`                    | `setCount()`               |
| `this`          | Required                             | Not required               |
| Constructor     | Traditionally used                   | Not required               |
| Render          | `render()`                           | Direct `return`            |
| Hooks           | Not applicable in class components   | Supported                  |
| Code Complexity | Higher                               | Lower                      |

---

# 🧪 Practice Task

## Task 1: Add Reset

Modify the Functional Component.

Add a third button:

```text
Reset
```

When clicked, the counter should become:

```text
0
```

Hint:

```jsx
setCount(0);
```

---

## Task 2: Add Reset to Class Component

Add a reset handler:

```jsx
reset = () => {

    this.setState({
        counter: 0
    });

};
```

Then create:

```jsx
<button onClick={this.reset}>
    Reset
</button>
```

---

## Task 3: Test Direct State Mutation

Inside the Class Component, try:

```jsx
this.state.counter = 5;
```

instead of:

```jsx
this.setState({
    counter: 5
});
```

Click the button and observe the result.

### Question

Why should we use:

```jsx
this.setState()
```

instead of directly changing:

```jsx
this.state
```

?

Think about how React knows that it needs to update the UI.

---

# 🎯 Key Takeaways

1. Class Components were the traditional way to create stateful React components.
2. Class Components use `this.state` to store state.
3. Class Components use `this.setState()` to update state.
4. Class Components commonly involve constructors and `this`.
5. Functional Components use Hooks such as `useState()` to manage state.
6. Functional Components do not require `this`.
7. Functional Components generally require less boilerplate.
8. `useState()` returns the current state and a state updater function.
9. Class `setState()` has object-merging behavior, while a `useState` setter replaces the state value.
10. Functional Components with Hooks are the standard approach for modern React development.
11. Understanding Class Components is still useful when working with legacy React applications.

---

# 🚀 Learning Path

This lecture connects the concepts we have learned so far:

```text
React Components
       ↓
Functional Components
       ↓
useState Hook
       ↓
useState with String
       ↓
useState with Number
       ↓
useState with Boolean
       ↓
useState with Object
       ↓
useState with Array
       ↓
Class Component vs Functional Component
       ↓
Next React Concepts
```

> **Practice both approaches, but focus primarily on Functional Components and Hooks for modern React development.**

# Happy Coding! 🚀
