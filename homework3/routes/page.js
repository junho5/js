// // 로그인 회원가입 라우터
const express = require('express');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const passport = require('../passport/index')
const {Thing, User} = require('../models');
const router = express.Router();
//--------------------------------------------------------
router.get('/',(req, res) => {
    res.render('login')
});
router.get('/main',(req, res) => {
    res.render('main')
});

router.get('/aboutUs',(req, res) => {
    console.log(req.isAuthenticated())
    res.render('aboutUs')
});
// 메인 --------------------------------------------------------
router.get('/shop', async (req, res, next) => {
    try {
      const things = await Thing.findAll({
        include: {
          model: User,
          attributes: ['id', 'name'],
        },
        // order: [['createdAt', 'DESC']],
      });
      res.render('shop', {
        title: 'shop',
        twits: things,
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router.get('/info', async (req, res, next) => {
    try {
      const things = await Thing.findAll({
        include: {
          model: User,
          attributes: ['id', 'name'],
        },
        where:{ user_id : req.user.id}
      });
      res.render('info', {
        title: 'info',
        twits: things,
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  });
//------------------------------------------------------------------

router.post('/delete_goods', async (req, res, next) => {
    try {
        Thing.destroy({ 
            where: { id: req.body.thing_num }
        })
        .then(_ => res.redirect('info'));
    } catch (err) {
      console.error(err);
      next(err);
    }
});

router.post('/edit_goods', async (req, res, next) => {
    try {
        Thing.update({ 
            name:req.body.name,
            price:req.body.price,
            stock:req.body.stock 
        },{
            where: { id: req.body.thing_num }
        })
        .then(_ => res.redirect('info'));
    } catch (err) {
      console.error(err);
      next(err);
    }
});


module.exports = router;
