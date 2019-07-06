const Product = require("../models/product.model.js")
require("../configs/db.config")

const productDB =require("../products.json")

const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/miga-api'

mongoose.connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true })
 .then(() => Product.create(productDB))
.catch(error => console.error('Not connected', error))