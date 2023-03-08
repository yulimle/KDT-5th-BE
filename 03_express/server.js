// @ts-check
const express = require('express');

const server = express();

const PORT = 4000;

//http://localhost:4000/api
server.use('/', (req, res, next) => {
  console.log('미들웨어 1');
  res.send('종료');

  // next(); //다음 미들웨어로 넘어감
});

server.use((req, res, next) => {
  console.log('미들웨어2');
  res.send('응답!');
  // next();
  // console.log('next 아래에 있는 콘솔 로그');
});

server.use((req, res, next) => {
  console.log('미들웨어3');
});

server.listen(PORT, () => {
  console.log(`익스프레스 서버는 ${PORT}번 포트에서 작동 중입니다!`);
});
