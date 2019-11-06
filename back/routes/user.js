const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');

const router = express.Router();

router.get('/', (req, res) => {});
router.get('/:id', (req, res) => {});

router.post('/', async (req, res, next) => {
  try {
    const exUser = await db.User.findOne({
      where: {
        userId: req.body.userId
      }
    });
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12); // salt 는 10~13 사이로 유지

    const newUser = await db.User.create({
      nickname: req.body.nickname,
      userId: req.body.userId,
      password: hashedPassword
    });
    console.log(newUser);
    return res.status(200).json(newUser);
  } catch (e) {
    console.error(e);
    // 에러 처리를 이 부분에서 하고 최후의 수단으로 next(e) 를 쓴다.
    return next(e);
  }
});

router.post('/logout', (req, res) => {});

router.post('/login', (req, res, next) => {
  console.log('라우터 시작 ');
  // POST /api/user/login
  console.log('passport.authenticate 실행 ');
  passport.authenticate('local', (err, user, info) => {
    console.log('passport.authenticalte callback 실행 ');
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    console.log('req.login 실행 ');
    return req.login(user, loginErr => {
      console.log('req.login callback 실행');
      if (loginErr) {
        return next(loginErr);
      }
      const fillteredUser = { ...user.toJSON() };
      console.log(fillteredUser);
      delete fillteredUser.password;
      return res.json(user);
    });
  })(req, res, next);
});
router.get('api/user/:id/follow', (req, res) => {});

router.post('/:id/follow', (req, res) => {});

router.post('/:id/follow', (req, res) => {});

router.post('/:id/follower', (req, res) => {});

router.get('/:id/posts', (req, res) => {});

module.exports = router;
