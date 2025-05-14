const express = require('express');
const productController = require('../controllers/Product');
const router = express.Router();
var routeCache = require('route-cache');

router
    .post('/', productController.create)
    .get('/', routeCache.cacheSeconds(20), productController.getAll)
    .get('/:id', routeCache.cacheSeconds(20), productController.getById)
    .patch('/:id', productController.updateById)
    .patch('/undelete/:id', productController.undeleteById)
    .delete('/:id', productController.deleteById);

module.exports = router;
