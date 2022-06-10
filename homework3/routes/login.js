// 로그인 회원가입 라우터
const express = require('express');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const passport = require('../passport/index')
const User = require('../models/user');

const router = express.Router();
//--------------------------------------------------------

// 메인 --------------------------------------------------------
router.get('/',(req, res) => {
    res.render('login')
});

router.get('/main',(req, res) => {
    res.render('main')
});

router.get('/aboutUs',(req, res) => {
    console.log(req.user)
    console.log(req.isAuthenticated())
    res.render('aboutUs')
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
      res.redirect('/login');
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
        res.send('<script type="text/javascript">alert("입력하지 않은 부분이 존재합니다."); document.location.href="/join";</script>');
    }else{
        res.send('<script type="text/javascript">alert("회원가입을 환영합니다!"); document.location.href="/login";</script>');
    }
});
//------------------------------------------------------------------

module.exports = router;
