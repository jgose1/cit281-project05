const express = require('express');
const path = require('path');
const { playRound } = require('./p5-game');

const app = express();
const PORT = 4000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// GET endpoint to play a round
app.get('/api/play-round', (req, res) => {
  const result = playRound();
  res.json(result);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});