const db = require('../database/models');
const usuario = db.Usuario; 
const data = require('../data/data'); 
const productos = data.products;
const usersList = data.user;
const bcryptjs = require('bcryptjs');

const controller = { 
    //la ruta handlea /users 
    users: function(req, res, next) {
      const usersList = user;
        res.render('users', { title: 'users', usersList:usersList });
      },
    // /users/profile 

    profile: function(req, res, next) {
      const newProducts = productos;

      usuario.findOne({
        where: [{email: req.query.email}]
      }).then(user => {
        if (user == null) {
          console.error('el usuario no existe')
          // render vista con error
          return
        }
        let check = bcryptjs.compareSync(req.query.contrasenia, user.contrasenia);
        if(check){
          //req.session.user = user.dataValues;
          //req.locals.user = user.dataValues;
          if(req.query.recordarme === 'on'){
            res.cookie("userId",user.dataValues.id,{maxAge:1000 *60 *10})
          }
          return res.render('profile', { title: 'users', username: user.email, newProducts, usersList });
        }
        else{
          
          errors.message = "Contraseña no coincide";
          //Asignamos a locals.error el objeto errors 
          res.locals.errors = errors;
          //renderizamos la vista con el error
          res.render("addUser");
        }
      })
      },

    // /users/profile/profile-edit
    profileEdit: function(req, res, next) {
        res.render('profile-edit', {title: 'users', username: user[0].usuario})
    },
    headerLogueado: function(req, res, next) {
      res.render('headerLogueado', {title: 'users', username: user[0].usuario})
  },
}

module.exports = controller;

// chequear 

//
//const db = requere('../database/models')
//const usuarioo = db.Usuario;
//const data = require('../data/data');
//const productoss = data.products; 
//const userr = data.user; 

/*const controller = {

  users: function(req, res, next) {
    
  }
}*/