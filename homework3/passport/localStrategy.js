const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');
const User = require('../models/user');

// local 로그인 strategy부분
module.exports = new LocalStrategy({
    usernameField: 'web_id',
    passwordField: 'web_password'
  },
  async (web_id, web_password, done) => {
    console.info('___new LocalStrategy()');
    try {
      const exUser = await User.findOne({ where: { web_id } });
      if (exUser) {
        const result = await bcrypt.compare(web_password, exUser.web_password);
        if (result) {
          done(null, exUser);
        } else {
            return done(null, false, { message: 'Incorrect' });
        }
      } else {
        return done(null, false, { message: 'Incorrect' });
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }
);