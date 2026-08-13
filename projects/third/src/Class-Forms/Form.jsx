import { useState } from "react";
function Form() {
  const [name, setName] = useState("");

  const handleName = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(name);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter your name : </label>
        <input type="text" value={name} onChange={handleName} />


        
        <button type="Submit">Submit</button>


      </form>
    </>
  );
}

export default Form;
