Student Performance Predictor

The Student Performance Predictor is a full-stack web application built using React and Node.js.
It predicts a student's overall performance based on their academic scores.
This project demonstrates frontend-backend integration, REST API design, and version control using Git and GitHub.

Tech Stack
Layer	Technology
Frontend	React.js, JavaScript, HTML, CSS
Backend	Node.js, Express.js
Version Control	Git and GitHub
Upcoming Update	Python (Scikit-Learn) for real ML prediction logic
Features

Simple and clean user interface built with React

Real-time API communication between frontend and backend

Dynamic prediction output based on user input

Organized and scalable code structure

Ready for AI model integration in the next version

Project Structure
student-performance-predictor/
│
├── backend/            # Node.js + Express server
│   ├── index.js
│   └── package.json
│
├── frontend/           # React app
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md

How to Run the Project Locally

1. Clone the repository
git clone https://github.com/anonymastt/student-performance-predictor.git
cd student-performance-predictor

2. Start the backend
cd backend
npm install
node index.js


The backend will run at:
http://localhost:5000

3. Start the frontend

Open a new terminal window and run:

cd frontend
npm install
npm start


The frontend will run at:
http://localhost:3000

Upcoming Update

In the next version, a real Machine Learning model (using Scikit-Learn) will be added to replace the dummy logic,
turning this into a true AI-based Student Result Predictor.

Author

Hritesh Sharma
Aspiring Python and AI Developer
Passionate about building simple, data-driven applications that connect frontend and backend technologies effectively.