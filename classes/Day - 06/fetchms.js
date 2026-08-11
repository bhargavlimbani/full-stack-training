fetch("https://jsonplaceholder.typicode.com/users")

    .then((response) => {
        return response.json();
    })
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


async function getdata() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");

        //converting the response into JSON format
        const data = await response.json();

        // Print the actual data received from the server.
        console.log(data);
    } catch (error) {

        // Handle any error that occurs during the request.
        console.log("Error:", error);
    }
}

// =========================================

// task - fetch the user data and print the id, name, email, and city on the console using async/await

async function getUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        await users.forEach((user) => {
            console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, City: ${user.address.city}`);
        }
        );
    } catch (error) {
        console.log("Error:", error);
    }
}