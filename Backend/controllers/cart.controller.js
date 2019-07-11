const createError = require('http-errors');
const Cart = require('../models/cart.model');


module.exports.post = (req, res, next) => {
    Product.findById(req.params.id)
    .then(product => res.json(product)) 
    .catch(next)
}
