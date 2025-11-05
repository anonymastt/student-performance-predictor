Student Performance Predictor

The Student Performance Predictor is a full-stack web application built using React, Node.js, and Flask.
It predicts a student’s academic performance using a trained Machine Learning model built with Scikit-Learn.
This project demonstrates full frontend-backend integration, REST API communication, model deployment, and version control using Git and GitHub.

Tech Stack

Layer Technology
Frontend React.js, JavaScript, HTML, CSS
Backend Node.js, Express.js
Machine Learning Python, Flask, Scikit-Learn, Joblib
Version Control Git and GitHub
Deployment Netlify (frontend), Render/Railway (backend and ML API)

Features

• Clean and responsive user interface built with React
• Real-time API communication between frontend, Node.js, and Flask
• Accurate performance prediction using trained ML model
• Modular and scalable code structure
• Fully integrated full-stack architecture ready for deployment

Project Structure

student-performance-predictor/
│
├── frontend/ React app (user interface)
│ ├── src/
│ ├── components/
│ ├── App.js
│ └── package.json
│
├── backend/ Node.js + Express server (API bridge)
│ ├── server.js
│ └── package.json
│
├── ml_model/ Flask ML API + trained model
│ ├── app.py
│ ├── model.pkl
│ └── requirements.txt
│
└── README.md

How to Run the Project Locally

Clone the repository
git clone https://github.com/anonymastt/student-performance-predictor.git

cd student-performance-predictor

Start the ML API
cd ml_model
pip install -r requirements.txt
python app.py

The ML API will run at:
http://localhost:5001

Start the backend
cd ../backend
npm install
node server.js

The backend will run at:
http://localhost:5000

Start the frontend
cd ../frontend
npm install
npm start

The frontend will run at:
http://localhost:3000

End-to-End Flow

Frontend (React) → Backend (Node.js) → ML API (Flask) → Model Prediction → Result displayed on UI

Future Enhancements

• Add user authentication and data storage
• Implement data visualization dashboard
• Enhance model accuracy using larger datasets
• Add dark mode and animation for better UX

Author

Hritesh Sharma
