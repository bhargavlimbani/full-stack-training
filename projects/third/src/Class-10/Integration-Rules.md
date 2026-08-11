# Integrating HTML and CSS in React

## 1. What We Are Learning

In React, we don't write HTML exactly as we do in a normal HTML file.

React uses **JSX**, which looks similar to HTML but has some differences.

In this example, we will learn:

* How to convert HTML into JSX
* How to create a React component
* How to connect CSS with React
* `class` vs `className`
* `for` vs `htmlFor`
* Self-closing tags
* Creating a form using JSX
* Using external CSS files
* Importing the component into `App.jsx`

---

# 2. React Project Structure

A simple project can look like this:

```text
src
│
├── App.jsx
├── Form.jsx
├── form.css
└── main.jsx
```

We will create:

```text
Form.jsx
```

for the form structure and:

```text
form.css
```

for styling.

---

# 3. Creating the React Component

Create a file:

```text
Form.jsx
```

Basic React component:

```jsx
function Form() {
  return (
    <>
      <h1>Registration Form</h1>
    </>
  );
}

export default Form;
```

The component returns JSX.

---

# 4. What is JSX?

JSX stands for **JavaScript XML**.

It allows us to write HTML-like syntax inside JavaScript.

Example:

```jsx
function Form() {
  return (
    <h1>Registration Form</h1>
  );
}
```

This looks like HTML:

```html
<h1>Registration Form</h1>
```

But it is actually JSX inside a JavaScript file.

---

# 5. HTML vs JSX

JSX looks similar to HTML, but some attributes are different.

## HTML

```html
<div class="form-group">
```

## JSX

```jsx
<div className="form-group">
```

---

# 6. `class` vs `className`

In HTML:

```html
<div class="form-group">
```

In React JSX:

```jsx
<div className="form-group">
```

React uses:

```text
className
```

instead of:

```text
class
```

This is because `class` is a reserved keyword in JavaScript.

---

# 7. `for` vs `htmlFor`

HTML:

```html
<label for="email">
  Email
</label>
```

JSX:

```jsx
<label htmlFor="email">
  Email
</label>
```

React uses:

```text
htmlFor
```

instead of:

```text
for
```

---

# 8. Self-Closing Tags

In HTML, some tags can be written without closing tags.

Example:

```html
<input type="text">
```

In JSX, write:

```jsx
<input type="text" />
```

Other examples:

```jsx
<img src="image.jpg" />

<br />

<hr />

<input type="email" />
```

Remember:

> JSX requires elements such as `input`, `img`, and `br` to be properly closed.

---

# 9. Creating the Form

Now we can create our registration form.

```jsx
function Form() {
  return (
    <div>

      <h1>Registration Form</h1>

      <form>

        <div>
          <label htmlFor="fullname">
            Full Name
          </label>

          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter your full name"
            required
          />
        </div>

      </form>

    </div>
  );
}

export default Form;
```

---

# 10. Adding Email

Add another form field:

```jsx
<div className="form-group">

  <label htmlFor="email">
    Email
  </label>

  <input
    type="email"
    id="email"
    name="email"
    placeholder="Enter your email"
    required
  />

</div>
```

---

# 11. Adding Phone Number

```jsx
<div className="form-group">

  <label htmlFor="phone">
    Phone Number
  </label>

  <input
    type="tel"
    id="phone"
    name="phone"
    placeholder="Enter your phone number"
    required
  />

</div>
```

---

# 12. Adding Radio Buttons

For gender, we can use radio buttons.

```jsx
<div className="form-group">

  <label>Gender</label>

  <div className="gender">

    <label>
      <input
        type="radio"
        name="gender"
        value="Male"
        required
      />
      Male
    </label>

    <label>
      <input
        type="radio"
        name="gender"
        value="Female"
      />
      Female
    </label>

    <label>
      <input
        type="radio"
        name="gender"
        value="Other"
      />
      Other
    </label>

  </div>

</div>
```

Notice that all radio buttons have the same:

```jsx
name="gender"
```

This allows the user to select only one option.

---

# 13. Submit Button

Add a submit button:

```jsx
<button type="submit">
  Submit
</button>
```

The complete form is now ready.

---

# 14. Complete `Form.jsx`

```jsx
import "./form.css";

function Form() {

  return (
    <div className="form-container">

      <h1>Registration Form</h1>

      <form>

        {/* Full Name */}

        <div className="form-group">

          <label htmlFor="fullname">
            Full Name
          </label>

          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter your full name"
            required
          />

        </div>


        {/* Email */}

        <div className="form-group">

          <label htmlFor="email">
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

        </div>


        {/* Phone Number */}

        <div className="form-group">

          <label htmlFor="phone">
            Phone Number
          </label>

          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />

        </div>


        {/* Gender */}

        <div className="form-group">

          <label>Gender</label>

          <div className="gender">

            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                required
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
              />
              Female
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
              />
              Other
            </label>

          </div>

        </div>


        {/* Submit Button */}

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default Form;
```

---

# 15. Creating the CSS File

Create another file:

```text
form.css
```

We can now write normal CSS inside this file.

```css
.form-container {
  width: 400px;
  margin: 50px auto;
  padding: 25px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.form-container h1 {
  text-align: center;
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="tel"] {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.gender {
  display: flex;
  gap: 15px;
}

.gender label {
  font-weight: normal;
}

.gender input {
  margin-right: 5px;
}

button {
  width: 100%;
  padding: 10px;
  cursor: pointer;
}
```

---

# 16. Connecting CSS with React

At the top of `Form.jsx`, write:

```jsx
import "./form.css";
```

This connects:

```text
Form.jsx
   ↓
form.css
```

React will apply the CSS to the JSX elements.

---

# 17. How `className` Connects with CSS

In JSX:

```jsx
<div className="form-container">
```

In CSS:

```css
.form-container {
  width: 400px;
}
```

The connection happens through:

```text
className="form-container"
          ↓
.form-container
```

Another example:

JSX:

```jsx
<div className="form-group">
```

CSS:

```css
.form-group {
  margin-bottom: 20px;
}
```

---

# 18. Importing the Form into `App.jsx`

Now we need to display our `Form` component.

In `App.jsx`:

```jsx
import Form from "./Form";

function App() {

  return (
    <>
      <Form />
    </>
  );
}

export default App;
```

The flow is:

```text
App.jsx
   ↓
Form.jsx
   ↓
form.css
```

---

# 19. Complete Project Flow

```text
App.jsx
   |
   | imports
   ↓
Form.jsx
   |
   | imports
   ↓
form.css
```

The browser finally displays:

```text
Registration Form

Full Name
[ Enter your full name ]

Email
[ Enter your email ]

Phone Number
[ Enter your phone number ]

Gender
○ Male
○ Female
○ Other

[ Submit ]
```

---

# 20. HTML to React Conversion

When converting an HTML form into React JSX, remember these changes.

| HTML       | React JSX   |
| ---------- | ----------- |
| `class`    | `className` |
| `for`      | `htmlFor`   |
| `<input>`  | `<input />` |
| `<img>`    | `<img />`   |
| `<br>`     | `<br />`    |
| `onclick`  | `onClick`   |
| `onchange` | `onChange`  |
| `onsubmit` | `onSubmit`  |

---

# 21. HTML Example

Normal HTML:

```html
<div class="form-group">

  <label for="email">
    Email
  </label>

  <input
    type="email"
    id="email"
    placeholder="Enter email"
  />

</div>
```

React JSX:

```jsx
<div className="form-group">

  <label htmlFor="email">
    Email
  </label>

  <input
    type="email"
    id="email"
    placeholder="Enter email"
  />

</div>
```

The structure is almost the same.

The main difference is that JSX follows JavaScript naming conventions.

---

# 22. HTML CSS vs React

### Traditional HTML + CSS

```text
index.html
    ↓
style.css
```

### React

```text
App.jsx
   ↓
Component.jsx
   ↓
Component.css
```

React allows us to divide the UI into reusable components.

For example:

```text
App.jsx
   |
   ├── Navbar.jsx
   ├── Form.jsx
   ├── Student.jsx
   └── Footer.jsx
```

Each component can have its own CSS.

---

# 23. Important React Concept

At this stage, this is a **normal HTML form written using JSX**.

We have not yet connected the form with React state.

Currently:

```jsx
<input
  type="text"
  name="fullname"
/>
```

is just an input field.

In the next step, React can control this input using:

```text
useState
```

and:

```text
onChange
```

Then we can capture the user's input and use it inside our application.

---

# Quick Revision

```text
HTML
 ↓
Convert HTML to JSX
 ↓
Use className instead of class
 ↓
Use htmlFor instead of for
 ↓
Close self-closing tags
 ↓
Create React Component
 ↓
Create CSS file
 ↓
Import CSS
 ↓
Import Component into App.jsx
```

## Key Points

1. React uses JSX instead of normal HTML.
2. JSX looks similar to HTML.
3. Use `className` instead of `class`.
4. Use `htmlFor` instead of `for`.
5. Self-closing elements must be closed.
6. CSS can be kept in a separate `.css` file.
7. Import CSS using:

```jsx
import "./form.css";
```

8. Components can be imported into `App.jsx`.
9. This is the basic way to integrate an existing HTML/CSS design into React.
10. React form handling using `useState`, `onChange`, and `onSubmit` comes after this basic integration.
