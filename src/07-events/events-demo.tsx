import React from "react";
import Button from "./components/Button"; // Ensure the import path is correct
import ListView from "./components/ListView";
import LoginForm from "./components/LoginForm";

const items = ["Item 1", "Item 2", "Item 3"];
const spacer = { margin: "20px 0" };

const App = () => {
    const clickHandler = (message: string) => {
        alert(message);
    };

    return (
        <div>
            <div style={spacer} />
            <h2>ListView</h2>
            <ListView items={items} />
            <div style={spacer} />
            <h2>LoginForm (class component)</h2>
            <LoginForm />
            <div style={spacer} />
            <h2>Button</h2>
            <Button onClick={() => clickHandler("Button clicked!")}>Click me as well</Button>
            <div style={spacer} />
        </div>
    );
};

export default App;

