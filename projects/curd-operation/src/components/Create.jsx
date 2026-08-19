import React, { useState } from 'react'
import axios from 'axios'

function Create() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [age, setAge] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            name: name,
            email: email,
            mobile: mobile,
            age: age
        }

        axios.post(
            'https://6a8512da9c451dc67a633d87.mockapi.io/Crud',
            data
        )
        .then((response) => {
            console.log('Data Added:', response.data)

            setName('')
            setEmail('')
            setMobile('')
            setAge('')
        })
        .catch((error) => {
            console.log('Error:', error)
        })
    }

    return (
        <div>
            <h2>Create User</h2>

            <form onSubmit={handleSubmit}>

                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                />

                <br /><br />

                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                />

                <br /><br />

                <label>Mobile:</label>
                <input
                    type="number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter mobile"
                />

                <br /><br />

                <label>Age:</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter age"
                />

                <br /><br />

                <input
                    type="submit"
                    value="Submit"
                />

            </form>
        </div>
    )
}

export default Create