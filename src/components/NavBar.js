import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <ul className="navbar-links">
      <li className="navbar-links-item">
        <Link className="item" to="/">
          View Properties
        </Link>
      </li>
      <li className="navbar-links-item">
        <Link className="item" to="add-property">
          Add a Property
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
