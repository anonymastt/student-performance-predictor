import React, { useState } from "react";
import "./PredictForm.css";

function PredictForm() {
  const [formData, setFormData] = useState({
    math: "",
    reading: "",
    writing: "",
  });

  const [prediction, setPrediction] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // 🌀 new loading state

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation: only 0–100 allowed
    if (value < 0 || value > 100) {
      setError("Scores must be between 0 and 100");
    } else {
      setError("");
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Pre-check validation
    if (!formData.math || !formData.reading || !formData.writing) {
      setError("Please fill in all fields");
      return;
    }
    if (error) return;

    setLoading(true); // Start loading animation
    setPrediction(""); // Clear old prediction

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setPrediction(data.predicted_class);
    } catch (err) {
      setError("Server not responding. Please check backend!");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="predict-container">
      <div className="predict-card">
        <h2> Student Result Predictor</h2>

        <form onSubmit={handleSubmit} className="predict-form">
          <input
            type="number"
            name="math"
            placeholder="Math Score"
            value={formData.math}
            min="0"
            max="100"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="reading"
            placeholder="Reading Score"
            value={formData.reading}
            min="0"
            max="100"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="writing"
            placeholder="Writing Score"
            value={formData.writing}
            min="0"
            max="100"
            onChange={handleChange}
            required
          />

          {error && <p className="error-text">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Predicting..." : "Predict Result"}
          </button>
        </form>

        {loading && <div className="loader"></div>}

       {prediction && (
  <p
    className={`result-text ${
      prediction === "Excellent"
        ? "excellent"
        : prediction === "Average"
        ? "average"
        : "poor"
    }`}
  >
    Predicted Class: <strong>{prediction}</strong>
  </p>
)}

      </div>
    </div>
  );
}

export default PredictForm;
