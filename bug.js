const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This line might throw an error if fs.readFileSync encounters an issue
  const data = fs.readFileSync('nonexistent.txt', 'utf8');
  res.send(data);
});
app.listen(3000, () => console.log('Server listening on port 3000'));