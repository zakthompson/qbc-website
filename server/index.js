const { spawn } = require('child_process');
const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('public'));

app.post('/build', (req, res) => {
  console.log('Received POST');
  spawn('yarn', ['build']);
  res.send('Success');
});

app.listen(port, () => { console.log(`Running Gatsby static server and build hook on port ${port}`) });
