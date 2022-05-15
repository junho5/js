// 업로드 라우터

const express = require('express');
const path = require('path');
const multer = require('multer');

const router = express.Router();

const upload = multer({
    storage:multer.diskStorage({
        destination(req,file,done){
            done(null, 'uploads/');
        },
        filename(req, file, done){
            // 파일 이름은 파일 originalname으로 저장
            done(null,path.basename(file.originalname));
        },
    }),
    limits:{fileSize: 5*1024*1024},
});

router.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '../views/upload.html'))
})

router.post('/', upload.single('image'), (req, res) => {
    console.log(req.file, req.body);
    res.redirect('/upload')
});

module.exports = router;



