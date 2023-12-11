const express = require('express');
const app = express();
const port = 3000;

// Use built-in middleware for parsing the request body
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  const { noun, adjective, verb, place, color } = req.body;

  // Include the borzoi in the mad lib story
  const madLib = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} in a ${color} ${place}. This adventurous ${noun} was a borzoi named Boris, who embarked on a thrilling journey.`;

  res.send(madLib);
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});