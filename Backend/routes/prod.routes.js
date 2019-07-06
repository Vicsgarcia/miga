const express = require('express');
const prodRouter = express.Router();
const prod = require ('../controllers/prod.controller')



prodRouter.get('/:id', prod.get)
prodRouter.get('/', prod.list)




module.exports = prodRouter;