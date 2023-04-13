import React from "react";
import "../styles/app.css";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <header className="App-header">
        <h2>Surreal Estate</h2>
      </header>
    </div>
  );
}

export default App;
