from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

# Step 2: Load the trained model
model = joblib.load('model.pkl')

# Step 3: Define a route for the homepage
@app.route('/')
def home():
    return "Student Predictor Flask API is Running"

# Step 4: Define a route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    # Get data from frontend
    data = request.get_json()
    print("Received data:", data)

    # Extract individual inputs
    math = data['math']
    reading = data['reading']
    writing = data['writing']

    # Prepare for model
    features = [[math, reading, writing]]
    prediction = model.predict(features)[0]

    # Send prediction as JSON
    return jsonify({'predicted_class': prediction})

# Step 5: Run the Flask app
if __name__ == '__main__':
    app.run(port=8000, debug=True)
