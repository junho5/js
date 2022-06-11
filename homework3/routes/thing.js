const express = require('express');

const Thing = require('../models/thing');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

router.post('/', isLoggedIn, async (req, res, next) => {
  try {
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
