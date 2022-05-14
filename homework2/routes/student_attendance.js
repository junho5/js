const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const router = express.Router();

router.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '../views/student_attendance.html'))
})

router.get('/attendances', async (req, res) => {
    res.sendFile(path.join(__dirname, './attendances.json'))
})

router.use('/attendance' , async (req, res, next) => {
    req.attendances = JSON.parse(
        await fs.readFile(path.join(__dirname, './attendances.json'))
    );
    next();
  });

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



