var express = require('express');
var router = express.Router();
const controller = require('../controllers/productsController');

router.get('/', controller.findOne);
//router.get('/product-add', controller.productAdd); cambiar el controler y despues modificar la ruta 
//router.get('/search-results', controller.searchResults);
module.exports = router;