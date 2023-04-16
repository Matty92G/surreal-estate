import React from 'react';
import '../styles/app.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';

const App = () => (
  <div className="App">
    <nav>
      <NavBar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="add-property" element={<AddProperty />} />
      </Routes>
    </nav>
    <header className="App-header">
      <h2>Surreal Estate</h2>
    </header>
  </div>
);

export default App;
