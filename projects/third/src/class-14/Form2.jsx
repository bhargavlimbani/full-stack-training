import { useState } from "react";
import "./form.css";

function Form2() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name is : ", name);
        console.log("Email is : ", email);
        console.log("Password is : ", password);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter your name : </label>
                <input type="text" value={name} onChange={handleName} />
                <br />

                <label htmlFor="email">Enter your email : </label>
                <input type="email" value={email} onChange={handleEmail} />
                <br />
                <br />

                <label htmlFor="">Enter your password : </label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePassword}
                />
                <br />
                <br />

                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Form2;