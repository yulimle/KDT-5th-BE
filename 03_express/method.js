// @ts-check
const express = require('express');

const app = express();
const PORT = 1324;

//get방식이 아니면 안받음 use는 다받음
app.get('/', (req, res) => {
  res.send('Get 메소드');
});

app.post('/', (req, res) => {
  res.send('Post 메소드');
});

app.put('/', (req, res) => {
  res.send('Put 메소드');
});
app.delete('/', (req, res) => {
  res.send('Delete 메소드');
});

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번에서 실행 중입니다!`);
});
