// 로그인 회원가입 라우터
const express = require('express');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const passport = require('../passport/index')
const User = require('../models/user');

const router = express.Router();

// req.user의 사용자 데이터를 넌적스 템플릿에서 이용가능하도록 res.locals에 저장
router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
  });

// local login구현 부분 admit post 요청시 실행
router.get('/login',(req, res) => {
    res.render('login')
});

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
    })(req, res, next); 
  });

// logout 구현 부분 session destroy후 /로 redirect 실행 -----------------
router.get('/logout', (req, res) => {
    req.logout(() => {
      req.session.destroy();
      res.redirect('/');
    });
  });

// 회원가입 구현 부분 --------------------------------------------------------
router.get('/join',(req, res) => {
    res.render('join')
});

router.post('/join', isNotLoggedIn, async(req,res,next) => {
    console.log(req.body)
    // bcrypt를 이용하여 password 암호화
    const hash = await bcrypt.hash(req.body.web_password,12);
    // user테이블에 새로운 회원 생성
    User.create({
      name: req.body.name,
      gender: req.body.gender,
      web_id: req.body.web_id,
      web_password: hash
    })
    // 입력하지 않은 부분 존재할 경우 알람창 실행
    if (req.body.name=='' || req.body.gender =='' || req.body.web_id=='' || req.body.web_password==''){
        res.send('<script type="text/javascript">alert("입력하지 않은 부분이 존재합니다."); document.location.href="/auth/join";</script>');
    }else{
        // 회원가입 정상적으로 구현되면 환영 메시지 출력
        res.send('<script type="text/javascript">alert("회원가입을 환영합니다!"); document.location.href="/auth/login";</script>');
    }
});

// 카카오 로그인
router.get('/kakao', passport.authenticate('kakao'));

// 카카오 로그인하면 main화면으로 redirect 실행 kakao 계정 정보를 이용하여 login or 회원가입 or login
router.get('/kakao/callback',passport.authenticate('kakao', {
    failureRedirect: '/',
  }),
  (req, res) => {
    res.redirect('/main');
  }
);
module.exports = router;
