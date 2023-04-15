import React from "react";
import "../styles/app.css";
import NavBar from "./NavBar";
import { Routes } from "react-router-dom";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
        <Routes>
          <Route path="/" element={Properties} />
          <Route path="add-property" element={AddProperty} />
        </Routes>
      </nav>
      <header className="App-header">
        <h2>Surreal Estate</h2>
      </header>
    </div>
  );
}

export default App;
