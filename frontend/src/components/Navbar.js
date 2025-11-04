import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Student Predictor App</h2>
      <ul>
         <li><Link to="/">Home</Link></li>
        <li><Link to="/predict">Predict</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
