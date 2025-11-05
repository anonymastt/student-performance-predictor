import React from "react";
import { Link } from "react-router-dom";
//import bg from "../assets/bg.jpg"; // ✅ Keep your image in src/assets
import "./Home.css";

function Home() {
  return (
    <div
      className="home-container"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="home-content">
        <h1> Student Performance Predictor</h1>
        <p>
          Predict a student’s academic performance based on their subject scores
          using Machine Learning.
        </p>
        <Link to="/predict">
          <button className="start-btn">Start Predicting</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
