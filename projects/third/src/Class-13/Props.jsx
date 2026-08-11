import {useState} from "react";

function Props({name, age}) {
    console.log(name)
    console.log(age)
    return (
        <>
            <h1>Props : </h1>
            <ul>
                <li>props are the objects </li>
                <li>props stands for the "properties" </li>
                <li>props acts as a "Parameter" inside a function where as acts as html attribute inside jsx </li>
                <li>props are unidirectional means we can send the props from parant component. </li>
                <li>props are immutable</li>
            </ul>
            {/* <h1>{props.name}</h1>
                <h1>{props.age}</h1> */}

            <h1>{name}</h1>
            <h1>{age}</h1>
        </>
    )
}

export default Props;