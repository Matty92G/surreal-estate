import React from "react";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div>
      <ul className="navbar-links">
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Add a Property</li>
      </ul>
    </div>
  );
};

export default NavBar;
