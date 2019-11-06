const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);
const dotenv = require('dotenv');
const passport = require('passport');

const passportConfig = require('./passport');
const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');

const PORT = process.env.PORT || 3065;

dotenv.config();
const app = express();
db.sequelize.sync();
passportConfig();

// 미들웨어 추가
app.use(morgan('dev'));
app.use(
  cors({
    origin: true,
    credentials: true
  })
);
app.use(express.json()); // json 형태의 데이터를 사용하기 위함
app.use(express.urlencoded({ extended: true })); // form 으로 넘어온 데이터를 처리하기위함
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSession({
    resave: false, // 매번 새션 강제 저장
    saveUninitialized: false, // 빈 값도 저장
    store: new FileStore(),
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false // https 를 쓸때 true
    }
  })
);
// 미들웨어간 의존관계로 인해 passport 세션을 나중에 실행해야 함
// psssport 세션이 expressSession을 내부적으로 사용함
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
