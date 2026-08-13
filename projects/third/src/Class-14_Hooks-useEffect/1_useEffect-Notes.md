# React `useEffect` Hook – Complete Student Notes 📘

Welcome to the next important React Hook!

In the previous lectures, we learned how to use **`useState`** to manage state in Functional Components.

In this lecture, we will learn the **`useEffect` Hook**, which is used to handle **side effects** in React applications.

---

## 📌 Table of Contents

1. [Learning Objective](#-learning-objective)
2. [What are Side Effects?](#-what-are-side-effects)
3. [Why do we Need `useEffect`?](#-why-do-we-need-useeffect)
4. [Class Components and Lifecycle Methods](#-class-components-and-lifecycle-methods)
5. [Functional Components and `useEffect`](#-functional-components-and-useeffect)
6. [`useEffect` Syntax](#-useeffect-syntax)
7. [Practical Comparison: Class vs Functional](#-practical-comparison-class-vs-functional)
8. [Complete Project Code](#-complete-project-code)
9. [Important Theory Points](#-important-theory-points)
10. [Summary Cheat Sheet](#-summary-cheat-sheet)
11. [Practice Task](#-practice-task)
12. [Key Takeaways](#-key-takeaways)

---

# 🎯 Learning Objective

By the end of this lecture, you will understand:

* What a **side effect** is.
* Why side effects should be handled separately from rendering.
* What the `useEffect` Hook does.
* How `useEffect` works after a component renders.
* How `useEffect` compares with Class Component lifecycle methods.
* How to use `useEffect` without a dependency array.
* How state changes can trigger an effect.
* Why the Dependency Array is important.

We will build a simple **Counter Application** and observe how effects execute.

---

# 🌪️ What are Side Effects?

A **side effect** is an operation that interacts with something outside the component's normal rendering process.

React components are primarily responsible for:

```text
State + Props
      ↓
    Render
      ↓
     JSX
      ↓
      UI
```

However, applications also need to perform other operations.

These operations are called **side effects**.

---

## 🔥 Common Examples of Side Effects

### 1. API Calls

Fetching data from a backend:

```javascript
fetch("https://example.com/users");
```

---

### 2. Timers

Using:

```javascript
setTimeout();
```

or:

```javascript
setInterval();
```

---

### 3. Console Logging

For example:

```javascript
console.log("Component rendered");
```

---

### 4. Subscriptions

For example, subscribing to:

* Browser events
* WebSocket connections
* External data sources

---

### 5. External DOM Operations

Working directly with browser APIs or external systems.

---

# 🤔 Why Do We Need `useEffect`?

A React component can render many times.

For example:

```text
Initial Render
      ↓
User clicks button
      ↓
State changes
      ↓
Component renders again
      ↓
User clicks button
      ↓
State changes
      ↓
Component renders again
```

If side-effect code is placed directly inside the component body, it can execute every time the component renders.

This can create unwanted behavior.

For example:

```jsx
function App() {

    console.log("Hello");

    return <h1>Hello React</h1>;
}
```

The `console.log()` executes whenever the component function runs.

For operations such as API calls, subscriptions, and timers, we need a mechanism to control when the operation executes.

That is where:

```jsx
useEffect()
```

comes into the picture.

---

# 🪝 What is `useEffect`?

`useEffect` is a React Hook used to perform **side effects in Functional Components**.

It allows us to tell React:

> "After rendering, perform this particular side-effect operation."

Basic example:

```jsx
useEffect(() => {

    console.log("Effect executed");

});
```

---

# 🔄 Basic Execution Flow

When a component renders:

```text
Component Function
       ↓
     Render
       ↓
React commits UI
       ↓
   useEffect
       ↓
Side Effect
```

Therefore, the effect is handled separately from the component's rendering logic.

---

# 🏛️ Class Components and Lifecycle Methods

Before Hooks were introduced, Class Components commonly used lifecycle methods to handle operations related to component lifecycle.

Important lifecycle methods include:

```text
componentDidMount()
componentDidUpdate()
componentWillUnmount()
```

---

# 1️⃣ `componentDidMount()`

This lifecycle method runs after the component is mounted.

Example:

```jsx
componentDidMount() {

    console.log("Component Mounted");

}
```

It is commonly used for operations that should happen after the component appears.

---

# 2️⃣ `componentDidUpdate()`

This lifecycle method runs after the component updates.

Example:

```jsx
componentDidUpdate() {

    console.log("Component Updated");

}
```

If the component updates multiple times, this method can execute multiple times.

---

# 3️⃣ `componentWillUnmount()`

This lifecycle method runs before a component is removed from the UI.

Example:

```jsx
componentWillUnmount() {

    console.log("Component Removed");

}
```

It is commonly associated with cleanup operations.

---

# 🪝 Functional Components and `useEffect`

Functional Components don't use these Class Component lifecycle methods.

Instead, React provides Hooks.

For side effects, we use:

```jsx
useEffect()
```

For example:

```jsx
useEffect(() => {

    console.log("Effect executed");

});
```

---

# ⚖️ Class Component vs Functional Component

| Lifecycle Purpose | Class Component          | Functional Component                  |
| ----------------- | ------------------------ | ------------------------------------- |
| After mounting    | `componentDidMount()`    | `useEffect()`                         |
| After updates     | `componentDidUpdate()`   | `useEffect()`                         |
| Cleanup           | `componentWillUnmount()` | Cleanup function inside `useEffect()` |

The exact behavior of `useEffect` depends on how its dependency array is configured.

---

# 🧪 `useEffect` Syntax

The basic syntax is:

```jsx
useEffect(() => {

    // Side effect code

});
```

The more general syntax is:

```jsx
useEffect(() => {

    // Side effect

}, [dependencies]);
```

There are two important parts:

```text
useEffect(
    callback,
    dependencyArray
)
```

---

# 🧩 Part 1: Callback Function

The first argument is a function:

```jsx
useEffect(() => {

    console.log("Effect executed");

});
```

This function contains the side-effect logic.

---

# 🧩 Part 2: Dependency Array

The second argument is an optional array:

```jsx
useEffect(() => {

    console.log("Effect executed");

}, []);
```

The dependency array controls when the effect should run.

We will study different dependency-array patterns in detail in the next lecture.

---

# ⚠️ Important: No Dependency Array

If you don't provide a dependency array:

```jsx
useEffect(() => {

    console.log("Effect executed");

});
```

the effect runs after the **initial render and subsequent renders**.

For example:

```text
Initial Render
      ↓
useEffect()
      ↓
Click Button
      ↓
State Update
      ↓
Re-render
      ↓
useEffect()
```

Therefore, an effect without a dependency array can run frequently.

---

# 💻 Practical Comparison: Class vs Functional

Let's create a simple counter.

The counter will:

* Start at `0`
* Increase when the button is clicked
* Print information to the console

---

# 🏛️ Class Component Example

### `ClassEffect.js`

```jsx
import React, { Component } from "react";

class ClassEffect extends Component {

    constructor(props) {

        super(props);

        this.state = {
            count: 0
        };

    }

    componentDidMount() {

        console.log("Component Did Mount Called");

    }

    componentDidUpdate() {

        console.log("Component Did Update Called");

    }

    updateCount = () => {

        this.setState({
            count: this.state.count + 1
        });

    };

    render() {

        return (
            <div>

                <h1>{this.state.count}</h1>

                <button onClick={this.updateCount}>
                    Update
                </button>

            </div>
        );

    }
}

export default ClassEffect;
```

---

# 🧠 Understanding the Class Example

When the application loads:

```jsx
componentDidMount()
```

runs.

Console:

```text
Component Did Mount Called
```

When the button is clicked:

```jsx
this.setState()
```

updates the state.

The component renders again.

Then:

```jsx
componentDidUpdate()
```

runs.

Console:

```text
Component Did Update Called
```

---

# 🪝 Functional Component Example

### `FunctionEffect.js`

```jsx
import React, { useState, useEffect } from "react";

function FunctionEffect() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log(`Hello I am Effect = ${count}`);

    });

    const updateState = () => {

        setCount(count + 1);

    };

    return (
        <div>

            <h1>{count}</h1>

            <button onClick={updateState}>
                Update State
            </button>

        </div>
    );
}

export default FunctionEffect;
```

---

# 🔍 Understanding the Functional Example

Initially:

```text
count = 0
```

The component renders.

Then:

```jsx
useEffect()
```

runs.

Console:

```text
Hello I am Effect = 0
```

Click the button.

State changes:

```text
0 → 1
```

The component renders again.

Then the effect runs again:

```text
Hello I am Effect = 1
```

Click again:

```text
1 → 2
```

Console:

```text
Hello I am Effect = 2
```

---

# 🖥️ Expected Console Output

### Initial Load

```text
Hello I am Effect = 0
```

### First Click

```text
Hello I am Effect = 1
```

### Second Click

```text
Hello I am Effect = 2
```

### Third Click

```text
Hello I am Effect = 3
```

The important observation is:

```text
Render
   ↓
Effect
```

The effect executes after React commits the render.

---

# 🔄 Complete Execution Flow

For the Functional Component:

```text
        Component Starts
              ↓
       useState(0)
              ↓
           Render
              ↓
        UI is Updated
              ↓
         useEffect()
              ↓
       Console Message
```

When the button is clicked:

```text
       Button Click
            ↓
      setCount(...)
            ↓
        State Update
            ↓
          Render
            ↓
       UI is Updated
            ↓
       useEffect()
            ↓
     Console Message
```

---

# 📁 Complete Project Structure

```text
src/
│
├── components/
│   ├── ClassEffect.js
│   └── FunctionEffect.js
│
└── App.js
```

---

# 💻 Complete Project Code

## `App.js`

```jsx
import React from "react";

// import ClassEffect from "./components/ClassEffect";
import FunctionEffect from "./components/FunctionEffect";

function App() {

    return (
        <div>

            {/* Uncomment to test Class Component */}

            {/* <ClassEffect /> */}

            <FunctionEffect />

        </div>
    );
}

export default App;
```

---

## `components/ClassEffect.js`

```jsx
import React, { Component } from "react";

class ClassEffect extends Component {

    constructor(props) {

        super(props);

        this.state = {
            count: 0
        };

    }

    componentDidMount() {

        console.log("Component Did Mount Called");

    }

    componentDidUpdate() {

        console.log("Component Did Update Called");

    }

    updateCount = () => {

        this.setState({
            count: this.state.count + 1
        });

    };

    render() {

        return (
            <div>

                <h1>{this.state.count}</h1>

                <button onClick={this.updateCount}>
                    Update
                </button>

            </div>
        );
    }
}

export default ClassEffect;
```

---

## `components/FunctionEffect.js`

```jsx
import React, { useState, useEffect } from "react";

function FunctionEffect() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log(`Hello I am Effect = ${count}`);

    });

    return (
        <div>

            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Update State
            </button>

        </div>
    );
}

export default FunctionEffect;
```

---

# 📖 Important Theory Points

| Concept                  | Explanation                                                                      |
| ------------------------ | -------------------------------------------------------------------------------- |
| `useEffect`              | React Hook used for side effects in Functional Components.                       |
| Side Effect              | An operation such as API calls, timers, subscriptions, or external interactions. |
| Effect Callback          | Function containing the side-effect logic.                                       |
| Dependency Array         | Optional array that controls when the effect runs.                               |
| No Dependency Array      | Effect runs after the initial render and subsequent renders.                     |
| `componentDidMount()`    | Class lifecycle method that runs after mounting.                                 |
| `componentDidUpdate()`   | Class lifecycle method that runs after updates.                                  |
| `componentWillUnmount()` | Class lifecycle method used before unmounting.                                   |
| Cleanup                  | A function returned from an effect that can perform cleanup work.                |
| Import                   | `useEffect` must be imported from React.                                         |

---

# 📋 Summary Cheat Sheet

| Scenario                     | Code                                                    |
| ---------------------------- | ------------------------------------------------------- |
| Import                       | `import { useEffect } from "react";`                    |
| Basic Effect                 | `useEffect(() => { console.log("Effect"); });`          |
| Effect with Dependency Array | `useEffect(() => { ... }, [dependency]);`               |
| Empty Dependency Array       | `useEffect(() => { ... }, []);`                         |
| Cleanup Structure            | `useEffect(() => { return () => { /* cleanup */ }; });` |
| Class Mounting               | `componentDidMount()`                                   |
| Class Updating               | `componentDidUpdate()`                                  |
| Class Unmounting             | `componentWillUnmount()`                                |

---

# 🧹 Cleanup Function Preview

An effect can return a function:

```jsx
useEffect(() => {

    console.log("Effect Started");

    return () => {

        console.log("Cleanup");

    };

});
```

The returned function is called the **cleanup function**.

Cleanup is commonly used for:

* Removing event listeners
* Clearing timers
* Closing subscriptions
* Disconnecting external resources

We will study cleanup in more detail when learning advanced `useEffect` behavior.

---

# ⚠️ Performance Consideration

Consider:

```jsx
useEffect(() => {

    // expensive operation

});
```

Without a dependency array, this effect can execute after every render.

If the component renders frequently, the side effect may also run frequently.

Therefore, understanding the **Dependency Array** is extremely important.

---

# 🧪 Practice Task

## Task 1: Observe Rendering and Effect

Inside `FunctionEffect.js`, add:

```jsx
console.log("Component Rendering...");
```

Place it **outside** the `useEffect`:

```jsx
function FunctionEffect() {

    console.log("Component Rendering...");

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log(`Hello I am Effect = ${count}`);

    });

    // ...
}
```

Open the browser console.

Observe the order of execution.

---

## Task 2: Update the Counter

Add another button:

```text
Increment
```

and update the counter.

Observe how many times the effect executes.

---

## Task 3: Predict the Output

Consider:

```jsx
function App() {

    const [count, setCount] = useState(0);

    console.log("Render");

    useEffect(() => {

        console.log("Effect");

    });

    return (
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    );
}
```

### Question

What will the console show when:

1. The application loads?
2. The button is clicked once?
3. The button is clicked twice?

Write the output before running the application.

---

# 🎯 Key Takeaways

1. `useEffect` is a React Hook used to handle side effects.
2. Side effects include API calls, timers, subscriptions, logging, and external interactions.
3. `useEffect` is used inside Functional Components.
4. The effect callback runs after React commits the render.
5. Without a dependency array, the effect runs after the initial render and subsequent renders.
6. Class Components use lifecycle methods such as `componentDidMount()` and `componentDidUpdate()`.
7. Functional Components use `useEffect()` to handle side-effect logic.
8. The Dependency Array controls when an effect should run.
9. Effects can return a cleanup function.
10. Avoid putting side-effect operations directly into rendering logic.
11. Understanding the Dependency Array is essential for using `useEffect` effectively.

---

# 🚀 Learning Path

You have now learned:

```text
React Components
       ↓
Functional Components
       ↓
useState
       ↓
useState with Objects
       ↓
useState with Arrays
       ↓
Class vs Functional Components
       ↓
useEffect
       ↓
Dependency Array
       ↓
Cleanup Function
       ↓
API Calls
```

The next important topic after this lecture is the **`useEffect` Dependency Array**:

```jsx
useEffect(() => {

    // Effect

}, [dependencies]);
```

You will learn how to control exactly **when an effect executes**.

---

> **Remember:** `useState` manages changing data, while `useEffect` helps synchronize your component with side effects and external systems.

# Happy Coding! 🚀
