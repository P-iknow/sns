const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      /*  
      { 
        userId: ...,
        password: ... 
      }
      */
      {
        usernameField: 'userId',
        passwordField: 'password'
      },
      async (userId, password, done) => {
        console.log('new LocalStrategy callback 실행');
        try {
          const user = await db.User.findOne({
            where: { userId }
          });
          if (!user) {
            return done(null, false, { reason: '존재하지 않는 사용자입니다!' });
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: '비밀번호가 틀립니다.' });
        } catch (e) {
          console.log(e);
          return done(e);
        }
      }
    )
  );
};
