import React, { useState } from 'react'
import './Abc.css'
import axios from 'axios'

function Abc() {
    const [name , setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    const handleName = (e) =>{
        setName(e.target.value);
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }

    const handleAge = (e) =>{
        setAge(e.target.value);
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        await axios.post('https://6a8512da9c451dc67a633d87.mockapi.io/Crud',{
            e_name : name,
            e_age : age,
            e_email : email
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name : </label>
            <input type="text" value={name} onChange={handleName}/>

            <br /><br />
            <label htmlFor="">Email</label>
            <input type="text" value={email} onChange={handleEmail} />

            <br /><br />
            <label htmlFor="">Age</label>
            <input type="number" value={age} onChange={handleAge} />

            <br /><br />
            <input type="submit" value="Register" />
        </form>
    </div>
  )
}

export default Abc