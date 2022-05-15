// 로그인을 처리하는 라우터

const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/',(req, res) => {
    console.log(req.signedCookies);
    // signedCookies가 admin일 경우 관리자용 페이지로 넘어간다.
    if (req.signedCookies.admin) {
        res.sendFile(path.join(__dirname, '../views/admin_score.html'))

    // signedCookies가 student일 경우 학생용 페이지로 넘어간다.
    }else if (req.signedCookies.student) {
        res.sendFile(path.join(__dirname, '../views/student_score.html'))

    // express session 부분 구현 master 계정 로그인 횟수 체크
    }else if (req.session.views) {
        res.send(
        `<h2> master 계정 로그인 횟수 : ${req.session.views}</h2><h2>expires in : ${req.session.cookie.maxAge / 1000} s</h2> <style>
        * {
            margin-top: 20px;
            text-align: center;
          }</style>`
    )}
    else {
        res.redirect('/login')
    }
});

router.get('/login',(req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'))
});

router.post('/admit', (req, res) => {
    const {login, password} = req.body;
    console.log(req.body);
    console.log(login, password);
    // login = admin, password = admin일 경우 cookie = admin
    if (login == 'admin' && password == 'admin'){
        res.cookie('admin', true, {
            expires: new Date(Date.now() + 3000),
            httpOnly: true, // 자바스크립트에선 cookie 조작 불가
            secure: false, // true로 하면 http 전달 x https만 가능
            path: '/', // 모든 path cookie 전달
            signed: true, // 서명 쿠키 설정
        });
        res.redirect('/');

    // login = student, password = student일 경우 cookie = student
    }else if (login == 'student' && password == 'student'){
        res.cookie('student', true, {
            expires: new Date(Date.now() + 3000),
            httpOnly: true, // 자바스크립트에선 cookie 조작 불가
            secure: false, // true로 하면 http 전달 x https만 가능
            path: '/', // 모든 path cookie 전달
            signed: true, // 서명 쿠키 설정
        });
        res.redirect('/');
    // express session 부분 구현 login = master, password = master일 경우 views + 1
    }else if (login == 'master' && password == 'master'){
        req.session.views = (req.session.views || 0) + 1;
        res.redirect('/');
    }
    else{
        res.redirect('/login');
    }
});

module.exports = router;



