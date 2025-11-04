import React, { useState } from "react";

function PredictForm() {
  const [formData, setFormData] = useState({
    math: "",
    reading: "",
    writing: "",
  });

  const [prediction, setPrediction] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setPrediction(data.predicted_class);
  };

  return (
  <div className="container">
    <div className="card">
      <h2>Student Result Predictor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="math"
          placeholder="Math Score"
          value={formData.math}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="reading"
          placeholder="Reading Score"
          value={formData.reading}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="writing"
          placeholder="Writing Score"
          value={formData.writing}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Predict Result</button>
      </form>

      {prediction && <h3 style={{ marginTop: "20px" }}>Predicted Class: {prediction}</h3>}
    </div>
  </div>
);

}

export default PredictForm;
