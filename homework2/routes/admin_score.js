// 관리자용 학생 점수 관리하는 라우터

const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const router = express.Router();

router.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '../views/admin_score.html'))
})

router.get('/scores', async (req, res) => {
    res.sendFile(path.join(__dirname, './score.json'))
})

// post, put, delete 전에 파일을 읽어야함 
router.use('/score' , async (req, res, next) => {
    req.scores = JSON.parse(
        await fs.readFile(path.join(__dirname, './score.json'))
    );
    next();
  });

// post 요청 scores.json에 업데이트
router.post('/score', async (req, res) => {
    const { name, score} = req.body;
    const id = Date.now();
    req.scores[id] = { name, score};
    await fs.writeFile(
        path.join(__dirname, './score.json'),
        JSON.stringify(req.scores)
    );
    res.end();
})

// put, delete 요청 scores.json에 업데이트
router
    .route('/score/:id')
    .put(async (req, res) => {
    const { name, score} = req.body;
    const id = Date.now();
    req.scores[req.params.id] = { name, score};
    await fs.writeFile(
        path.join(__dirname, './score.json'),
        JSON.stringify(req.scores)
    );
    res.end();
    })
    .delete(async (req, res) => {
    delete req.scores[req.params.id];
    await fs.writeFile(
        path.join(__dirname, './score.json'),
        JSON.stringify(req.scores)
    );
    res.end()
    })

module.exports = router;



