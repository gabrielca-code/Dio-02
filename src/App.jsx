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
            {usuarios.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    )

}

export default App;