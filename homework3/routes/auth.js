// 로그인 회원가입 라우터
const express = require('express');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const passport = require('../passport/index')
const User = require('../models/user');

const router = express.Router();
//--------------------------------------------------------
// req.user의 사용자 데이터를 넌적스 템플릿에서 이용가능하도록 res.locals에 저장
router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
  });
//------------------------------------------------------------------

// 로그인 --------------------------------------------------------
router.get('/login',(req, res) => {
    res.render('login')
});

// local login
router.post('/admit', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
      console.info('___passport.authenticate()');
      if (authError) {
        console.error(authError);
        return next(authError);
      }
      if (!user) {
        return res.redirect(`/?loginError=${info.message}`);
      }
  
      console.info('___req.login()');
      return req.login(user, (loginError) => {
        if (loginError) {
          console.error(loginError);
          return next(loginError);
        }
        return res.redirect('/main');
      });
    })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
  });
//------------------------------------------------------------------

// logout ----------------------------------------------------------
router.get('/logout', (req, res) => {
    req.logout(() => {
      req.session.destroy();
      res.redirect('/');
    });
  });
//------------------------------------------------------------------

// 회원가입 --------------------------------------------------------
router.get('/join',(req, res) => {
    res.render('join')
});

router.post('/join', isNotLoggedIn, async(req,res,next) => {
    console.log(req.body)
    const hash = await bcrypt.hash(req.body.web_password,12);
    User.create({
      name: req.body.name,
      gender: req.body.gender,
      web_id: req.body.web_id,
      web_password: hash
    })
    if (req.body.name=='' || req.body.gender =='' || req.body.web_id=='' || req.body.web_password==''){
        res.send('<script type="text/javascript">alert("입력하지 않은 부분이 존재합니다."); document.location.href="/auth/join";</script>');
    }else{
        res.send('<script type="text/javascript">alert("회원가입을 환영합니다!"); document.location.href="/auth/login";</script>');
    }
});
//------------------------------------------------------------------
// kakao site login
router.get('/kakao', passport.authenticate('kakao'));

// kakao site login후 자동 redirect
// kakao 계정 정보를 이용하여 login or 회원가입/login
router.get('/kakao/callback',passport.authenticate('kakao', {
    failureRedirect: '/',
  }),
  (req, res) => {
    res.redirect('/main');
  }
);
module.exports = router;
