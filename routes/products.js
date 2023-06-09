var express = require('express');
var router = express.Router();
const controller = require('../controllers/productsController');

router.get('/search-results', controller.buscador);
router.get('/:id',controller.findOne)
router.get('/product-add', controller.productAdd); 

module.exports = router;