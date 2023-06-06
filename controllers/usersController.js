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

    usersPost: function(req, res, next) {
      res.send(req.body)
        res.render('users', { title: 'users', usersList:usersList });
      },

    profile: function(req, res, next) {
      const newProducts = productos;
      let id = req.params.id;
      let relaciones = {
        include: [
          {association: 'usuarioComentario'}, 
          {association: 'producto', include:[{association: 'producto'}]
        
        }
        ]}
         
      },
    Store : function(req, res, next){
      let errors = {};
      if (req.body.email == ""){
        errors.message = "El campoemail esta vacio";
        res.locals.errors = errors;
        res.render("register")
      }
      else if (req.body.contrasenia == " "){
        errors.message = "El campo contrasenia esta vacio";
        res.locals.errors = errors;
        res.render("register")
      }
      else{
        let criterio = {
          email: req.body.email}
       

      usuario.findOne({
        criterio
      }).then(usuario => {
        if (usuario == null) {
        //creamos el usuario\\
        let contraseniahash = bcryptjs.hashSync(req.body.contrasenia, usuario.contrasenia);
        let user = {
          email: req.body.email,
          contrasenia: contraseniahash,
          fecha: req.body.fecha,
          dni: req.body.dni,
          fotoPerfil: req.body.fotoPerfil
        }
        usuario.create(user);
        res.redirect('/users/profile')
        } else {
          errors.message = "El email ya existe";
          res.locals.errors = errors;
          res.render('register')
        }
        
        // if(check){
        //   req.session.usuario = usuario.dataValues;
        //   req.locals.usuario = user.dataValues;
        //   if(req.body.recordarme === 'on'){
        //     res.cookie("userId",user.dataValues.id,{maxAge:1000 *60 *10})
          // }
          // return res.render('profile', { title: 'users', username: user.email, newProducts, usersList });
        // }
        // else{
          
        //   errors.message = "Contraseña no coincide";
        //   //Asignamos a locals.error el objeto errors 
        //   res.locals.errors = errors;
        //   //renderizamos la vista con el error
        //   res.render("register");//cambiar la vista 
        // }
        
      }).catch(errors=>{
        res.render(errors)
      })
    
      }
    },

    // /users/profile/profile-edit
    profileEdit: function(req, res, next) {
        res.render('profile-edit', {title: 'users', username: usuario[0].usuario})
    },
    headerLogueado: function(req, res, next) {
      res.render('product-add', {title: 'users', username: usuario.usuario})
  },
  login: function (req, res) {
    res.render('login')
  },
  register: function (req, res) {
    res.render('register')
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
