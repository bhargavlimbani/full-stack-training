import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    axios.post('https://6a8512da9c451dc67a633d87.mockapi.io/Crud',{
      s_name : name,
      s_age : age,
      s_email : email
    }).then(() =>{
      navigate('/')
    })


  }

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-2 mt-2">
            <Link to='/'>
              <button className="btn btn-primary">Read Data</button>
            </Link>
          </div>
          <div className="bg-primary p-4 text-center">Create Data</div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Enter Name : </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control"
                onChange={handleName}
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Enter Age : </label>
              <input type="number" 
              placeholder="Age" 
              className="form-control" 
              onChange={handleAge}
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Enter Email : </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="form-control"
                onChange={handleEmail}
              />
            </div>

            <br />
            <div className="d-grid">
              <input type="submit" value="submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
        {name}
        <br />
        {email}
        <br />
        {age}
      </div>
    </>
  );
}

export default Create;