// @ts-check

// 서버 구축
const express = require('express');
const cors = require('cors');

const PORT = 4000;

const app = express();

app.use(cors());

app.use('/', (req, res) => {
  const str = 'Hello, here is backend 한글도 보낸다';
  const json = JSON.stringify(str);
  res.send(json);
});

app.listen(PORT, () => {
  console.log(`데이터 통신 서버가 ${PORT}번에서 실행중입니다!`);
});
