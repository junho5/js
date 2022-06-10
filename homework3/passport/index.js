const passport = require('passport');
const localStrategy = require('./localStrategy');
// const kakaoStrategy = require('./kakaoStrategy');
const User = require('../models/user');


passport.serializeUser(function(user, done) {
    console.log("serializeUser ", user)
    done(null, user.id);
  });
  
passport.deserializeUser(function(id, done) {
    console.log("deserializeUser id ", id)
    User.findOne({ where: { id }})
        .then((user) => done(null, user))
        .catch((err) => done(err));   
});

passport.use(localStrategy);
// passport.use(kakaoStrategy);

module.exports = passport;