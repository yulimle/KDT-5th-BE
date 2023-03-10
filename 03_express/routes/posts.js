const express = require('express');

const POSTS = [];
const router = express.Router();
router.get('/', (req, res) => {
  res.render('posts', { POSTS, postCounts: POSTS.length });
});

router.post('/add', (req, res) => {
  if (Object.keys(req.query).length >= 1) {
    if (req.query.title && req.query.content) {
      const newPosts = {
        title: req.query.title,
        content: req.query.content,
      };
      POSTS.push(newPosts);
      res.redirect('/posts');
    } else {
      const err = new Error('폼데이터 입력을 확인하세요.');
      err.statusCode = 404;
      throw err;
    }
  } else if (req.body) {
    if (Object.keys(req.body).length >= 1) {
      if (req.body.title && req.body.content) {
        const newPosts = {
          title: req.body.title,
          content: req.body.content,
        };
        POSTS.push(newPosts);
        res.redirect('/posts');
      } else {
        const err = new Error('데이터가 입력되지 않았습니다.');
        err.statusCode = 404;
        throw err;
      }
    } else {
      const err = new Error('데이터가 입력되지 않았습니다!');
      err.statusCode = 404;
      throw err;
    }
  }
});

module.exports = router;
