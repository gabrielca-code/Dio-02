import React, { useState } from "react";

const App = () => {
    const [usuarios, setUsuarios] = useState(["Gabriel", "Vagner", "Michele"])
    return(
        <div className="App">
            <h1>Hello DIO!</h1>
            {usuarios.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    )

}

export default App;