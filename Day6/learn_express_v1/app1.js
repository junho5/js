const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res, next) => {
    // console.log("Hello Express!")
    // res.send('Hello, Express');
    // res.send('<h1>Hello, Express</h1>');
    // res.send({ name : 'Happy', age : 6}); // wirte end가 같이 존재해서 send 2개이상 못함 (한번만 사용해야함)
    // res.json({ name : 'Happy', age : 6});
    // res.sendFile(__dirname + '/index.html')
    res.sendFile(path.join(__dirname , '/index.html'))
});

app.get('/users', (req, res, next) => {
    res.json({ name : 'Happy', age : 6});
});

app.get('*', (req, res, next) => {
    // res.status(404).send(`${req.path} is NOT FOUND`)
    // res.status(404).end();
    // res.sendStatus(404);
    res.redirect('/')
});

app.listen(3000, () => {
    console.log('http://localhost:3000에서 대기중')
});