var express = require('express');
var router = express.Router();
const controller = require('../controllers/usersController')

router.get('/profile', controller.profile);//ruta por GET que envia el formulario de creacion. acceder a traves una url --> peticion con get
//Al hacer click en un link estamos haciendo una petición por get. 
router.post('/profile', controller.profile);//pedidos por POST mediante formularios (method = ‘post’).
//Guardar, eliminar o borrar datos son las acciones que deben realizarse mediante una petición por post. 


router.get('/register', controller.register); //este anda bien 
router.post('/register', controller.procesarRegister);

router.get('/login', controller.login);
router.post('/login', controller.procesarLogin);// cambiar por otra 

router.post('/logout', controller.logout); // crear lo que dice logout en el headerLogueado

/* GET users listing. */
/*router.get('/', controller.users);
router.get('/profile', controller.profile);
router.get('/profile/profile-edit', controller.profileEdit)*/

module.exports = router;
