import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Student Performance Predictor</h1>
      <p>
        Enter your study habits and academic details to predict your performance instantly!
      </p>
      <Link to="/predict">
        <button className="get-started">Get Started</button>
      </Link>
    </div>
  );
}

export default Home;
