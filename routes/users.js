var express = require('express');
var router = express.Router();
const controller = require('../controllers/usersController')

router.get('/profile', controller.profile);
router.post('/profile', controller.profile);
router.get('/register/', controller.register);
router.post('/register', controller.procesarRegister);
router.get('/login', controller.login);
router.post('/login', controller.users);// cambiar por otra 
/* GET users listing. */
/*router.get('/', controller.users);
router.get('/profile', controller.profile);
router.get('/profile/profile-edit', controller.profileEdit)*/

module.exports = router;
