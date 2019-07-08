require('../configs/db.config')

const Product = require('../models/product.model')
const products = require('../products.json')

Product.create(products)
.then(() => console.log('Created'))