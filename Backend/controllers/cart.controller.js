const Cart = require('../models/cart.model');

module.exports.addToCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id })

    if (cart) {
      cart.product = [...cart.product, req.body.product]
      const updatedCart = await cart.save()

      res.status(201).json(updatedCart)
    } else {
      const savedCart = await new Cart({
        user: req.user._id,
        product: [req.body.product]
      }).save()

      res.status(201).json(savedCart)
    }
  } catch(error) {
    next(error)
  }
}