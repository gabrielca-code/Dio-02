import React, { useState, useEffect } from "react";

const App = () => {
    const [usuarios, setUsuarios] = useState(["Gabriel", "Vagner", "Michele"])

    useEffect(() => {
        setTimeout(() => {
            setUsuarios([...usuarios, "Geovanna"])
        }, 3000);
    }, [])

    return (
        <div className="App">
            <h1>Hello DIO!</h1>
            <div>
                <input value={usuario} onChange={(event) => setUsuario(event.target.value)}></input>
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