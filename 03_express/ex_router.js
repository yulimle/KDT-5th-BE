// @ts-check
const express = require('express');

const app = express();
const userRouter = express.Router();
const PORT = 4000;

app.use('/users', userRouter);
userRouter.get('/', (req, res) => {});

app.listen(PORT, () => {
  console.log(`${PORT}번 포트 실행 중`);
});
