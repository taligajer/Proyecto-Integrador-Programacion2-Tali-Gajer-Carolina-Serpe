var express = require('express');
var router = express.Router();
const controller = require('../controllers/productsController');
//hay que modificar lo que manda como respuesta (tiene que aparecer lo que dice el html => ejs)
router.get('/', controller.product);
router.get('/product-add', controller.productAdd);
router.get('/search-results', controller.searchResults);
module.exports = router;