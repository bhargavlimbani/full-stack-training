function Props({name, age}){
console.log(name)
console.log(age)
    return (
        <>
            <h1>Props :</h1>
            <ul>
                <li>Props are the objects</li>
                <li>Props stands for "Properties"</li>
                <li>props acts as a "parameter" inside a function whereas acts as a html attribute inside JSX</li>
                <li>Props are unidirectional means we can send the props from parent component to child component.</li>
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