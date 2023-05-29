var express = require('express'); 
var router = express.Router(); 
const controller = require('../controllers/indexController')
/* GET home page. */
router.get('/', controller.indexx);
router.get('/register', controller.ingresar);
router.get('/login', controller.login);
router.get('/headerLogueado', controller.store);

module.exports = router; 
