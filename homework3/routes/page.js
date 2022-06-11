// 각종 페이지 화면상에 보여주는 라우터 (상품 삭제와 수정하는 것도 포함되어있다.)
const express = require('express');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const passport = require('../passport/index')
const {Thing, User} = require('../models');
const router = express.Router();

router.get('/',(req, res) => {
    res.render('login')
});
router.get('/main',(req, res) => {
    res.render('main')
});

router.get('/aboutUs',(req, res) => {
    res.render('aboutUs')
});

// shop 페이지 구현 부분 user와 Thing 두개의 모델의 관계를 통해 모든 유저의 상품들을 select한 부분
router.get('/shop', async (req, res, next) => {
    try {
      const things = await Thing.findAll({
        include: {
          model: User,
          attributes: ['id', 'name'],
        },
      });
      res.render('shop', {
        title: 'shop',
        things: things,
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

// info 페이지 구현 부분 user와 Thing 두개의 모델의 관계를 현재 로그인한 유저가 등록한 상품만 select한 부분
router.get('/info', async (req, res, next) => {
    try {
      const things = await Thing.findAll({
        include: {
          model: User,
          attributes: ['id', 'name'],
        },
        // 로그인한 유저가 등록한 상품만 select 하는 where 절
        where:{ user_id : req.user.id}
      });
      res.render('info', {
        title: 'info',
        things: things,
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

// 상품을 삭제할때 실행되는 부분 post로 받은 데이터를 통해 상품 삭제
router.post('/delete_goods', async (req, res, next) => {
    try {
        Thing.destroy({ 
            // post로 받은 데이터와 id가 동일한 값을 뽑아서 삭제 한다 
            where: { id: req.body.thing_num }
        })
        .then(_ => res.redirect('info'));
    } catch (err) {
      console.error(err);
      next(err);
    }
});

// 상품내용을 수정할 때 실행되는 부분 post로 받은 데이터를 통해 상품 수정
router.post('/edit_goods', async (req, res, next) => {
    try {
        Thing.update({ 
            // post로 받은 데이터를 통해 update하는 내용
            name:req.body.name,
            price:req.body.price,
            stock:req.body.stock 
        },{
            // post로 받은 데이터와 id가 동일한 값을 뽑아서 삭제 한다
            where: { id: req.body.thing_num }
        })
        .then(_ => res.redirect('info'));
    } catch (err) {
      console.error(err);
      next(err);
    }
});

module.exports = router;
