// @ts-check

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

const mainRouter = require('./routes/index');
const userRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

app.set('view engine', 'ejs');

// console.log(__dirname);
app.use(express.static('public'));
//express가 허용하는 범위내에서만 가능하게
// app.use('/css', express.static(__dirname + '/views/css'));
// app.use('/js', express.static('js'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/posts', postsRouter);

app.get('/', (req, res) => {
  res.send('hello, express');
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message + `<a href="/">홈으로</a>`);
});

//http://localhost:4000.users
app.listen(PORT, () => {
  console.log(`${PORT}번에서 서버 실행`);
});
