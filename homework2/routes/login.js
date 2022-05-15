// 로그인을 처리하는 라우터

const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/',(req, res) => {
    console.log(req.signedCookies);
    if (req.signedCookies.admin) {
        res.sendFile(path.join(__dirname, '../views/admin_score.html'))
    }else if (req.signedCookies.student) {
        res.sendFile(path.join(__dirname, '../views/student_score.html'))
    }
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

    if (login == 'admin' && password == 'admin'){
        res.cookie('admin', true, {
            expires: new Date(Date.now() + 3000),
            // maxAge: 600000, // 시간 설정 (1시간)          
            httpOnly: true, // 자바스크립트에선 cookie 조작 불가
            secure: false, // true로 하면 http 전달 x https만 가능
            path: '/', // 모든 path cookie 전달
            signed: true, // 서명 쿠키 설정
        });
        res.redirect('/');
    }else if (login == 'student' && password == 'student'){
        res.cookie('student', true, {
            expires: new Date(Date.now() + 3000),
            // maxAge: 600000, // 시간 설정 (1시간)
            httpOnly: true, // 자바스크립트에선 cookie 조작 불가
            secure: false, // true로 하면 http 전달 x https만 가능
            path: '/', // 모든 path cookie 전달
            signed: true, // 서명 쿠키 설정
        });
        res.redirect('/');
    }
    else{
        res.redirect('/login');
    }
});

module.exports = router;



