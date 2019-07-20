const Cart = require('../models/cart.model');



module.exports.addToCart = (req, res, next) => {

    const cart = new Cart(req.body)
  
    cart.save()
      .then(cart => res.status(201).json(cart))
      .catch(next)
  }