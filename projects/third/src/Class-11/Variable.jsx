// React: Variables and Data Types

function Variable() {

  // String
  let name = "Hardik";

  // Number
  let age = 23;

  // Boolean
  let isMarried = false;

  // Undefined
  let a;

  // Null
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

      {/* typeof is used to check the data type */}
      <h2>Data Types</h2>

      <p>name: {typeof name}</p>
      <p>age: {typeof age}</p>
      <p>isMarried: {typeof isMarried}</p>
      <p>a: {typeof a}</p>
      <p>b: {typeof b}</p>

      {/* JavaScript expression inside JSX */}
      <h2>Expression in JSX</h2>

      <p>2 × 3 = {2 * 3}</p>
    </>
  );
}

export default Variable;