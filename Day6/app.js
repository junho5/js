const express = require('express');
const path = require('path');

const app = express();
app.set('port',3000)

app.use((req, res, next)=>{
    console.log(req.path);
    next();
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname , '/index.html'))
});

app.get('/users', (req, res) => {
    res.json({ name : 'Oh Jun Ho', age : 26});
});

app.get('/user/:id', (req, res) => {
    res.send(`${req.params.id}님 반갑습니다!!`)
});

app.get('*', (req, res, next) => {
    if (Object.keys(req.query).length !=0){
        console.log(req.query)
        console.log(`${req.query.title}, ${req.query.price}인 신발을 검색 중...`);
        res.send('query test');
    }else res.redirect('/');
});

app.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}에서 대기중`)
});