const express = require('express');

const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');

const app = express();
db.sequelize.sync();

// 미들웨어 추가
app.use(express.json()); // json 형태의 데이터를 사용하기 위함
app.user(express.urlencoded({ extended: true })); // form 으로 넘어온 데이터를 처리하기위함

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);

app.listen(3065, () => {
  console.log('server is running on http://localhost:3065');
});
