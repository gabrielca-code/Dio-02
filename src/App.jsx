import React, { Component } from "react";

class App extends Component {
    state = {
        usuarios: ["Gabriel", "Vagner", "Michele"]
    };

    render() {
        const { usuarios } = this.state;
        return(
            <div className="App">
                <h1>Hello DIO!</h1>
                {usuarios.map((item) => (
                    <p>{item}</p>
                ))}
            </div>
        )
    }
}

export default App;