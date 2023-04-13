var express = require('express');
var router = express.Router();
const controller = require('../controllers/productsController');

router.get('/', controller.product);
router.get('/product-add', controller.productAdd);
router.get('/search-results', controller.searchResults);
module.exports = router;