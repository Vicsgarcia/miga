const express = require('express');
const prodRouter = express.Router();
const prod = require ('../controllers/prod.controller')



prodRouter.get('/', prod.list)
prodRouter.get('/:id', prod.get)



module.exports = prodRouter;