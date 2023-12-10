const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const { noun, adjective, verb, place, color } = req.body;

  // Include the borzoi in the mad lib story
  const madLib = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} in a ${color} ${place}. This adventurous ${noun} was a borzoi named Boris, who embarked on a thrilling journey.`;

  res.send(madLib);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});