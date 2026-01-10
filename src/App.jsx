import React, { useState, useEffect } from "react";

const App = () => {
    const [usuario, setUsuario] = useState("")
    const [count, setCount] = useState()
    const [usuarios, setUsuarios] = useState(["Gabriel", "Vagner", "Michele"])

    useEffect(() => {
        setTimeout(() => {
            setUsuarios([...usuarios, "Geovanna"])
        }, 3000);
    }, [])

    useEffect(() => {
        setCount(usuarios.length)
    }, [usuarios])

    const handleAddUser = () => {
        setUsuarios([...usuarios, usuario])
        setUsuario("")
    }

    return (
        <div className="App">
            <h1>Hello DIO!</h1>
            <div>
                <input value={usuario} onChange={(event) => setUsuario(event.target.value)}/>
                <button onClick={handleAddUser}>Adicionar</button>
            </div>
            <hr/>
            <h2>{count}</h2>
            {usuarios.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    )

}

export default App;