const passport = require('passport');
const db = require('../models');
const local = require('./local');

module.exports = () => {
  // 유저 프로필에 대한 모든 내용을 서버에 저장하면 메모리 과부하
  // 대신에 해당 데이터를 찾을 수 있는 정보를 담은 배열만 저장, 메모리가
  // serialize 시에 서버쪽에 [{id: 3, cookie: 'asdfgh' }] 배열로 저장, expression에 저장
  // cookie 를 프론트로 보내서 저장
  // 추후 쿠키가 서버로 오면 cookie를 기준으로 해당 id를 찾아냄
  // db에서 3번은 어떤 유저구나로 판단

  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });

  // 위에서 받은 id를 토대로 user 정보를 db로 불러옴
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await db.User.findOne({
        where: { id }
      });
      return done(null, user); // 이 때 req.user에 유저 정보 저장
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });
  local();
};

// 프론트에서 서버로는 cookie만 보냄 (asdfgh)
// 서버가 쿠키 파서, 익스프레스 세션으로 쿠키 검사 후 id: 3 발견
// id의 3이  deserializeUser 에 들어감
// req.user로 사용자 정보가 들어감

// 프론트 요청시에 매번 deserialize 가 실행됨
// 문제가 매번 요청시마다 db 조회 요청을 함 그 결과 deserialize 결과를 캐싱
// 서버 작업중에 db 요청이 비싼 작업이어서 줄야야함
// 실무에서는  deserialize 결과를 캐싱함
