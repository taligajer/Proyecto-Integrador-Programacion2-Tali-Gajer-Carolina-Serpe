var express = require('express');
var router = express.Router();
const controller = require('../controllers/usersController')

router.get('/profile', controller.profile);//ruta por GET que envia el formulario de creacion 
router.post('/profile', controller.profile);//ruta por POST que procesa la informacion del formulario

router.get('/register', controller.register); //este anda bien 
router.post('/register', controller.procesarRegister);

router.get('/login', controller.login);
router.post('/login', controller.procesarLogin);// cambiar por otra 

router.get('/logout', controller.logout); // crear lo que dice logout en el headerLogueado

/* GET users listing. */
/*router.get('/', controller.users);
router.get('/profile', controller.profile);
router.get('/profile/profile-edit', controller.profileEdit)*/

module.exports = router;
