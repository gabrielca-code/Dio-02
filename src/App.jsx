import React, { useState, useEffect } from "react";

const App = () => {
    const [usuario, setUsuario] = useState("")
    const [usuarios, setUsuarios] = useState(["Gabriel", "Vagner", "Michele"])

    useEffect(() => {
        setTimeout(() => {
            setUsuarios([...usuarios, "Geovanna"])
        }, 3000);
    }, [])

    const handleAddUser = () => {
        setUsuarios([...usuarios, usuario])
        setUsuario("")
    }

    return (
        <div className="App">
            <h1>Hello DIO!</h1>
            <div>
                <input value={usuario} onChangeText={(event) => setUsuario(event.target.value)}/>
                <button>Adicionar</button>
            </div>
            <hr/>
            {usuarios.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    )

}

export default App;