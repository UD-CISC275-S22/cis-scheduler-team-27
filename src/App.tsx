import React from "react";
import "./App.css";
import { OpeningInstruction } from "./openingInstruction";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <OpeningInstruction></OpeningInstruction>
            </header>
            <p>Sara Noor, Riley Johnson, and Sydney Segear</p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
