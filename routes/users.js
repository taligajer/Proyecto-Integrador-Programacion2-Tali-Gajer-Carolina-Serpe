var express = require('express');
var router = express.Router();
const controller = require('../controllers/usersController')
router.get('/profile', controller.profile);
router.get('/headerLogueado', controller.headerLogueado)
/* GET users listing. */
/*router.get('/', controller.users);
router.get('/profile', controller.profile);
router.get('/profile/profile-edit', controller.profileEdit)*/

module.exports = router;
