
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
  const data = req.body;
  fs.appendFile('submissions.json', JSON.stringify(data) + ',\n', err => {
    if (err) return res.status(500).send("Error saving data.");
    res.send("Form submitted successfully!");
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
