// 관리자용 학생 출석 관리하는 라우터

const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const router = express.Router();

router.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '../views/admin_attendance.html'))
})

router.get('/attendances', async (req, res) => {
    res.sendFile(path.join(__dirname, './attendances.json'))
})

// post, put, delete 전에 파일을 읽어야함 
router.use('/attendance' , async (req, res, next) => {
    req.attendances = JSON.parse(
        await fs.readFile(path.join(__dirname, './attendances.json'))
    );
    next();
  });

// post 요청 attendances.json에 업데이트
router.post('/attendance', async (req, res) => {
    const { name, attendance} = req.body;
    const id = Date.now();
    req.attendances[id] = { name, attendance};
    await fs.writeFile(
        path.join(__dirname, './attendances.json'),
        JSON.stringify(req.attendances)
    );
    res.end();
})

// put, delete 요청 attendances.json에 업데이트
router
    .route('/attendance/:id')
    .put(async (req, res) => {
    const { name, attendance} = req.body;
    const id = Date.now();
    req.attendances[req.params.id] = { name, attendance};
    await fs.writeFile(
        path.join(__dirname, './attendances.json'),
        JSON.stringify(req.attendances)
    );
    res.end();
    })
    .delete(async (req, res) => {
    delete req.attendances[req.params.id];
    await fs.writeFile(
        path.join(__dirname, './attendances.json'),
        JSON.stringify(req.attendances)
    );
    res.end()
    })

module.exports = router;



