const express = require('express');
const cartRouter = express.Router();
const cart = require ('../controllers/cart.controller')



cartRouter.post('/carrito', cart.post)



module.exports = cartRouter;