const express = require('express');
const fs = require('fs');
const app = express();
app.get('/', (req, res) => {
  try {
    const data = fs.readFileSync('data.txt', 'utf8');
    res.send(data);
  } catch (err) {
    console.error('Error reading file:', err);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));