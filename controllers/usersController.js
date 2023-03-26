const controller = { 
    //la ruta handlea /users 
    users: function(req, res, next) {
        res.render('users', { title: 'users' });
      },
    // /users/profile 

    profile: function(req, res, next) {
        res.render('profile', { title: 'users' });
      },

    // /users/profile/profile-edit
    profileEdit: function(req, res, next) {
        res.render('profile-edit', {title: 'users'})
    },
}

module.exports = controller;