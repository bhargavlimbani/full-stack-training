import { useState } from "react";
function Form() {
  const [name, setName] = useState("");

  const hendalName = (e) => {
    //console.log(e);
    //console.log(e.target);
    //console.log(e.target.value);
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name : </label>
        <input
          type="text"
          value={name}
          onChange={hendalName}
          placeholder="Enter Your Name"
        />
        <h1>{name}</h1>
        <button type="Submit">Submit</button>
      </form>
    </>
  );
}

export default Form;