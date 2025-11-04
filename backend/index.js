const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});

app.post('/predict', (req, res) => {
  const data = req.body; // Get JSON data from frontend
  console.log('Received data:', data);

  const { math, reading, writing } = data;

  // Very simple logic for now
  const avgScore = (parseInt(math) + parseInt(reading) + parseInt(writing)) / 3;
  let predicted_class = '';

  if (avgScore >= 85) {
    predicted_class = 'Excellent';
  } else if (avgScore >= 60) {
    predicted_class = 'Average';
  } else {
    predicted_class = 'Needs Improvement';
  }

  res.json({ predicted_class });
});

