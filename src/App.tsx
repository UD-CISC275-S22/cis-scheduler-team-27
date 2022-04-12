import React from "react";
import { Planner } from "./Plan/Planner";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Sara Noor, Riley Johnson, and Sydney Segear</p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Planner></Planner>
        </div>
    );
}
export default App;
