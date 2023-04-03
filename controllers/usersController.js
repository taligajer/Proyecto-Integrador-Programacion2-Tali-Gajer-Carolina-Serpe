const data = require('../data/data'); 

const user = data.user;

const controller = { 
    //la ruta handlea /users 
    users: function(req, res, next) {
        res.render('users', { title: 'users' });
      },
    // /users/profile 

    profile: function(req, res, next) {
        res.render('profile', { title: 'users', username: user.usuario});
      },

    // /users/profile/profile-edit
    profileEdit: function(req, res, next) {
        res.render('profile-edit', {title: 'users', username: user.usuario})
    },
}

module.exports = controller;