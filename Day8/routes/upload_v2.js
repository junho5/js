// routes/upload.js
// 파일 업로드를 처리하는 라우터

const express = require('express');
const path = require('path');
const multer = require('multer');

const router = express.Router();

const upload = multer({ dest: 'uploads/'});

router.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '../public/upload.html'))
})

router.post('/', upload.single('image'),(req,res)=>{
    console.log(req.file, req.body);
    res.send('Upload!');
});

module.exports = router;