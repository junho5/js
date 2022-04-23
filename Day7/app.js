const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

// 모든 요청에 대해 처리하는 미들웨어
app.use((req, res, next) => {
  console.log('use - ' + req.path);
  next(); // 필수
});

// app.use와 app.all 비교용 
// -> use는 path를 안줘도 가능 무조건 실행!!! path주면 그 path 이후로 무슨값이 있어도 실행
// -> all은 path가 동일할 경우에만 실행!!! all에다가 *을 통해 path주면 use처럼 사용 가능
// app.all('/', (req, res, next) => {
//   console.log('all - ' + req.path);
//   next();
// });

// 라우터 미들웨어들

// 하나의 라우터 안에 미들웨어 여러개 장착시 next()로 연결 테스트
app.get('/',(req, res, next) => {
    console.log('1st /의 first callback');
//    next(); 실행시 안쪽에 있는 미들웨어 실행
    next('route'); // route를 넣고 실행시 안쪽에 있는 미들웨어 무시하고 실행
    // next('Some problem');
    // next(new Error('Something Wrong!')); // 에러처리 미들웨어 테스트용
  },
  (req, res, next) => {
    console.log('1st /의 second callback');
    next();
  }
);

// 다양한 response method 테스트
app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  // res.send({ name: 'Happy', age: 6 });
  // res.sendFile(__dirname + '/index.html');
  console.log('2nd /의 callback');
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/users', (req, res) => {
  res.json({ name: 'Happy', age: 6 });
});

// req.params 테스트
// 테스트 예: localhost:3000/user/smile, localhost:3000/user/777
app.get('/user/:id', (req, res) => {
  // res.json(req.params);
  console.log(req.params);
  res.send(`${req.params.id}님 반갑습니다!`);
});

// req.query 테스트
// 테스트 예: localhost:3000/search?title=nodejs&year=2022
app.get('/search', (req, res) => {
  console.log(req.query);
  console.log(`${req.query.title}, ${req.query.year}인 책을 검색 중...`);
  res.send('query test');
  // res.redirect('/');
});

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
