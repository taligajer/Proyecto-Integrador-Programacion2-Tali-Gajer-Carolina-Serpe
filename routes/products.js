var express = require('express');
var router = express.Router();
const controller = require('../controllers/productsController');

router.get('/product-add', controller.productAdd);
router.post('/product-add', controller.procesarAdd);

router.get('/search-results', controller.buscador);

router.get('/:id',controller.findOne);
router.post('/:id',controller.procesarComentario);

module.exports = router;