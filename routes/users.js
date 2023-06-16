var express = require('express');
var router = express.Router();
const controller = require('../controllers/usersController')

router.get('/profile/:id', controller.profile);//ruta por GET que envia el formulario de creacion. acceder a traves una url --> peticion con get
//Al hacer click en un link estamos haciendo una petición por get. 
router.post('/profile', controller.profile);//pedidos por POST mediante formularios (method = ‘post’).
//Guardar, eliminar o borrar datos son las acciones que deben realizarse mediante una petición por post. 

router.get('/profile-edit/:id', controller.editProfile);
router.post('/profile-edit', controller.procesarEditProfile);

router.get('/search-users', controller.buscadorUsuario);


router.get('/register', controller.register); 
router.post('/register', controller.procesarRegister);

router.get('/login', controller.login);
router.post('/login', controller.procesarLogin);

router.post('/logout', controller.logout); 


module.exports = router;
