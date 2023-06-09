const db = require('../database/models');
const usuario = db.usuarios; 
const productos = db.products;
const data = require('../data/data'); 
//const productos = data.products;
//const usersList = data.user;
const bcryptjs = require('bcryptjs');

const controller = { 
  register: function (req, res) {
    res.render("register")
  },
  procesarRegister: function (req, res) {
    let info = req.body;
    //let criterio = {where: [{email: info.email}]}; 
    let errors = {};
  
    if (info.email == "") {
      errors.message = "Hay un error. El email no puede estar vacio";
      res.locals.errors = errors; // validamos que no viene vacio
      return res.render("register");
    } else if (info.contrasenia < 3) {
      errors.message = "Hay un error. La contrasenia tiene que tener 3 caracteres o mas";
      res.locals.errors = errors;
      return res.render("register");
    } else if (info.fecha == " ") {
      errors.message = "Hay un error. El campo de fecha no puede estar vacio";
      res.locals.errors = errors;
    } else {
      let criterio = {
        where: [{ email: req.body.email }]
      };
      usuario.findOne(criterio) //revisar porque no anda el findOne
      .then((usuario) => {
        if (criterio != null) {
          //creamos el usuario
          let contraseniahash = bcryptjs.hashSync(req.body.contrasenia, usuario.contrasenia);
          let user = {
            email: req.body.email,
            contrasenia: contraseniahash,
            fotoPerfil: req.body.fotoPerfil,
            fecha: req.body.fecha,
            dni: req.body.dni
          };
          usuario.create(user); 
          res.redirect('/indexx',{usuario: usuario});
        } else {
          errors.message = "El email ya existe";
          res.locals.errors = errors;
          res.render('register');
        }
      });
    }
  },
  
    //la ruta handlea /users 
    /*users: function(req, res, next) {
      const usersList = usuario;
        res.render('profile', { title: 'users', usersList:usersList /})}*/
      //
    // /users/profile 

    /*usersPost: function(req, res, next) {
      res.send(req.body)
        res.render('users', { title: 'users', usersList:usersList });
      },*/

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
        errors.message = "El campo email esta vacio";
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
          fotoPerfil: req.body.fotoPerfil,
          fecha: req.body.fecha,
          dni: req.body.dni
          
        }
        usuario.create(user);
        res.redirect('/profile')
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
    login: function (req, res) {
      res.render("login")
    },
    procesarLogin: function(req, res) {
      let info = req.body;
      let criterioLogin = {where: [{email: info.email}]} ;
      let errors = {};
      if (info.email == "") {
        errors.message= "Hay un error. El email no puede estar vacio";
        res.locals.errors = errors; 
        return res.render("login");
      }else{
        usuario.findOne(
          {criterioLogin
          }).then(usuario => {
            if (usuario == null) {
              let check = bcryptjs.compareSync(info.contrasenia, usuario.contrasenia);
              if (check) {
                req.session.user = usuario.dataValues;
                if (info.remember != undefined) {
                  res.cookie('userId', usuario.dataValues.id, {
                    maxAge: 1000 * 60 * 1000,
                  });
                }
                return res.redirect("indexx") // lo redirecciona al indexx
              } else {
                  errors.message = "La clave es incorrecta";
                  res.locals.errors = errors;
                  return res.render("login");
               }
              }
          }) .catch(function(errors){
            console.log(errors)
          })
      }
    },
    logout: function(req, res) {
      let info = req.body;
      if (info.logout != undefined){
        req.session.destroy();
        req.clearCookie("userId");
        return res.redirect("/indexx");
      }
    },

    // /users/profile/profile-edit
    //profileEdit: function(req, res, next) {
    //    res.render('profile-edit', {title: 'users', username: usuario[0].usuario})
    //},
   // headerLogueado: function(req, res, next) {
     // res.render('product-add', {title: 'users', username: usuario.usuario})
  //},
}


module.exports = controller;

// chequear 
//const usuarioo = db.Usuario;
//const data = require('../data/data');
//const productoss = data.products; 
//const userr = data.user; 
