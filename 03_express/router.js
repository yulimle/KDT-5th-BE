// @ts-check

const express = require('express');

const app = express();
const PORT = 4000;

const userRouter = require('./routes/users');

app.set('view engine', 'ejs');

// console.log(__dirname);
app.use(express.static('public'));
//express가 허용하는 범위내에서만 가능하게
// app.use('/css', express.static(__dirname + '/views/css'));
// app.use('/js', express.static('js'));

app.use('/users', userRouter);
app.get('/', (req, res) => {
  res.send('hello, express');
});

//http://localhost:4000.users
app.listen(PORT, () => {
  console.log(`${PORT}번에서 서버 실행`);
});
