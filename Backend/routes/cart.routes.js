const express = require('express');
const cartRouter = express.Router();
const cart = require ('../controllers/cart.controller')



cartRouter.post('/product/:id', cart.addToCart)



module.exports = cartRouter;

