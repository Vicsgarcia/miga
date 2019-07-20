const Product = require('../models/product.model');


module.exports.list = (req, res, next) => {
  Product.find()
    .then(products => res.json(products)) 
    .catch(next)
}

module.exports.get = (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => res.json(product)) 
    .catch(next)
}


  