const db = require('../database/models');
const Usuario = db.Usuario; 
const productos = db.Product;
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
    console.log(info);
    //let criterio = {where: [{email: info.email}]}; 
    let errors = {};
  
    if (info.email == "") {
      errors.message = "Hay un error. El email no puede estar vacio";
      res.locals.errors = errors; // validamos que no viene vacio
      return res.render("register");
    } else if (info.password < 3) {
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
      Usuario.findOne(criterio) //revisar porque no anda el findOne
      .then(usuario => {
        if (criterio != null) {
          //creamos el usuario
          let contraseniahash = bcryptjs.hashSync(info.password, 10);
          let user = {
            email: req.body.email,
            contrasenia: contraseniahash,
            fotoPerfil: req.body.fotoPerfil,
            fecha: req.body.fecha,
            dni: req.body.dni
          };
          Usuario.create(user);
          res.redirect('/');//crear session por eso session esta vacio
        } else {
          errors.message = "El email ya existe"; //no me avisa si el email existe
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
    procesarLogin: function(req, res, next){
      let errors = {};
      if (req.body.email == ""){
        errors.message = "El campo email esta vacio";
        res.locals.errors = errors;
        res.render("register")
      }
      else if (req.body.password == ""){
        errors.message = "El campo contrasenia esta vacio";
        res.locals.errors = errors;
        res.render("register")
      }
      else{
        let criterio = {
          email: req.body.email}    

      Usuario.findOne({
        criterio
      }).then(usuario => {
        if(usuario != null) {
          let contraseniacompare = bcryptjs.compareSync(req.body.contrasenia, usuario.contrasenia);
        if(contraseniacompare == true){
          req.session.user = usuario;
          res.locals.user= usuario;
          return res.redirect('/') //no me redirecciona
        } 
        else {
          errors.message = "El email no existe";
          res.locals.errors = errors;
          return res.render('register')
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
        
      }}).catch(errors => {
        res.send(errors)
      })
    
      }
    },
    login: function (req, res) {
      res.render("login")
    },
    hola: function(req, res) {
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
