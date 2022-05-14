// urlencoded, cookie-parser 실습

// import modules
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const path = require('path');

// import routers
const loginRouter = require('./routes/login_v2')
const visitRouter = require('./routes/visit')
const uploadRouter = require('./routes/upload_v1')

const app = express();
app.set('port', process.env.PORT || 3000);

// express 내부 & 외부 middlewares
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));
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
        name: 'my-session-cookie',
    })
);

// 요청 경로에 따라 router 실행
app.use('/',loginRouter);
app.use('/visit',visitRouter);
app.use('upload',uploadRouter);

// 404 에러처리 미들웨어 (사용자 요청이라서 500위에 작성)
app.use((req, res, next) => {
  res.status(404).send(`${req.method} ${req.path} is NOT FOUND`);
  // res.status(404).end();
  // res.sendStatus(404);
});

// 서버 에러처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something broke!');
});

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}에서 대기중`);
});
