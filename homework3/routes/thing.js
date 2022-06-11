const express = require('express');
const Thing = require('../models/thing');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

// thing(상품)을 생성하는 것을 구현한 부분
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    // thing 테이블에 새로운 상품 생성
    const thing = await Thing.create({
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      user_id: req.user.id,
    });
    console.log('Post:', thing.name, thing.price, thing.stock, thing.user_id);
    res.redirect('/shop');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
