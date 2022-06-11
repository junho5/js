const passport = require('passport');
const localStrategy = require('./localStrategy');
const kakaoStrategy = require('./kakaoStrategy');
const User = require('../models/user');

// 로그인 성공하면 사용자 식별자 req.session에 저장
passport.serializeUser(function(user, done) {
    console.log("serializeUser ", user)
    done(null, user.id);
  });

// 로그인 후 서버 요청마다 req.session에 저장된 값을 이용해 사용자 정보를 읽어 req.user에 저장
passport.deserializeUser(function(id, done) {
    console.log("deserializeUser id ", id)
    User.findOne({ where: { id }})
        .then((user) => done(null, user))
        .catch((err) => done(err));  
});

passport.use(localStrategy);
passport.use(kakaoStrategy);

module.exports = passport;