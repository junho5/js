const express = require('express');
const path = require('path');
const passport = require('./passportmiddleware');

const router = express.Router();

router.get('/', (req, res) => {
  // passport 에서 생성한 req.user로 로그인확인
  if (req.user) {
    res.send(`${req.user.username}(${req.user.email})님 로그인되었습니다!`);
  } else {
    res.redirect('/login');
  }
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, './public/login.html'));
});

/* Passport Login */
/* Local-Strategy를 이용해서 사용자 인증 요청 처리 */
router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/login',
  }),
  (req, res) => {
    res.redirect('/');
  }
);

module.exports = router;
