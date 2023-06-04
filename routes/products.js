var express = require('express');
var router = express.Router();
const controller = require('../controllers/productsController');

router.get('/:id',controller.findOne)
router.get('/product-add', controller.productAdd); 
//router.get('/search-results', controller.searchResults);
module.exports = router;