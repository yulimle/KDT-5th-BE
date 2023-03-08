// @ts-check

const express = require('express');

const app = express();
const PORT = 1234;

//localhost:4000/~~~
app.get('/id/:id', (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.get('/', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.get('/api', (req, res) => {
  res.send(req.params);
});

app.listen(PORT, () => {
  console.log(`${PORT}번 실행 중`);
});
