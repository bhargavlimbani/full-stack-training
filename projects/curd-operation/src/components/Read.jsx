import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Read() {

    const [data, setData] = useState([])

    const getData = () => {
        axios.get('https://6a8512da9c451dc67a633d87.mockapi.io/Crud')
            .then((response) => {
                console.log('Fetched Data:', response.data)
                setData(response.data)
            })
            .catch((error) => {
                console.log('Error:', error)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h2>User Data</h2>

            {data.map((item) => (
                <div key={item.id}>

                    <p>
                        <strong>ID:</strong> {item.id}
                    </p>

                    <p>
                        <strong>Name:</strong> {item.name}
                    </p>

                    <p>
                        <strong>Email:</strong> {item.email}
                    </p>

                    <p>
                        <strong>Mobile:</strong> {item.mobile}
                    </p>

                    <p>
                        <strong>Age:</strong> {item.age}
                    </p>

                    <hr />

                </div>
            ))}
        </div>
    )
}

export default Read