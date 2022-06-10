// import modules
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const multer = require('multer')
const nunjucks = require('nunjucks')
const passport = require('passport');

dotenv.config();

// import routers
const loginRouter = require('./routes/login');
const { sequelize } = require('./models')
// const { op } = require('sequelize')

const app = express();
app.set('port', process.env.Port || 3000);
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
});
sequelize
    .sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
});
  
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'routes')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 600000,
        },
        name: 'login_check',
    })
);
app.use(passport.initialize());
app.use(passport.session());
//--------------------------------------------------------

// 요청 경로에 따라 router 실행
app.use('/',loginRouter);

// 404 에러처리 미들웨어 (사용자 요청이라서 500위에 작성)
app.use((req, res, next) => {
    res.status(404).send(`${req.method} ${req.path} is NOT FOUND`);
  });
  
// 서버 에러처리 미들웨어
app.use((err, req, res, next) => {
console.error(err);
res.status(500).send('Something broke!');
});

app.listen(app.get('port'), () => {
console.log(`http://localhost:${app.get('port')}에서 대기중`);
});

