const data = require('../data/data'); 
const productos = data.products;
const user = data.user;

const controller = { 
    //la ruta handlea /users 
    users: function(req, res, next) {
      const usersList = user;
        res.render('users', { title: 'users', usersList:usersList });
      },
    // /users/profile 

    profile: function(req, res, next) {
      const newProducts = productos;
        res.render('profile', { title: 'users', username: user.usuario, newProducts});
      },

    // /users/profile/profile-edit
    profileEdit: function(req, res, next) {
        res.render('profile-edit', {title: 'users', username: user.usuario})
    },
    headerLogueado: function(req, res, next) {
      res.render('headerLogueado', {title: 'users', username: user.usuario})
  },
}

module.exports = controller;