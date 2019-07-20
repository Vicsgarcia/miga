const express = require('express');
const cartRouter = express.Router();
const cart = require ('../controllers/cart.controller')



cartRouter.post('/add', cart.addToCart)



module.exports = cartRouter;

