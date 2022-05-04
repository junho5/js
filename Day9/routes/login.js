// routes/login.js
// 로그인을 처리하는 라우터
// 

const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/',(req, res) => {
    console.log(req.session);
    console.log(req.sessionID);
    if (req.session.views)
        res.send(
            `<h2>views: ${req.session.views}</h2><h2>expires in: ${
                req.session.cookie.maxAge / 1000
            }'s</h2>`
        );
    else res.redirect('/login')
});

router.get('/login',(req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'))
});

// 입력한 login과 password가 guest, 7777이면
// res.cookie로 admit를 true로 전달 후 /로 redirect
router.post('/admit', (req, res) => {
    const {login, password} = req.body;
    // console.log(req.body);
    // console.log(login, password);

    if (login == 'guest' && password == '7777'){
        req.session.views = (req.session.views || 0) +1;
        res.redirect('/');
    }else{
        res.redirect('/login');
    }
});

module.exports = router;



