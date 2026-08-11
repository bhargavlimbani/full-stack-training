import {useState} from "react";

function States() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    let color = "black";
    if (count < 0) {
        color = "red";
    }  
    else if (count > 0) {
        color = "green";
    }
    return (
        <>
            <h1>States : </h1>
            <ul>
                <li>States are the objects </li>
                <li>States are the "properties" </li>
                <li>States acts as a "Parameter" inside a function where as acts as html attribute inside jsx </li>
                <li>States are unidirectional means we can send the states from parant component. </li>
                <li>States are mutable</li>
            </ul>
            <h1 style={{ color: color }}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}

export default States;