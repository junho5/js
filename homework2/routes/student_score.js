const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const router = express.Router();

router.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '../views/student_score.html'))
})

router.get('/scores', async (req, res) => {
    res.sendFile(path.join(__dirname, './score.json'))
})

module.exports = router;



