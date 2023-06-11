const db = require('../database/models');
const Usuario = db.Usuario; 
const Producto = db.Product;
const data = require('../data/data');
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

      Usuario.findOne(criterio)
      .then(usuario => {
        if (usuario == null) {
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
          res.redirect('/');
        } else {
          errors.message = "El email ya existe";
          res.locals.errors = errors;
          res.render('login');
        }
      });
    }},
  
  profile: function(req, res, next) {
      let id = req.params.id;
      let relaciones = {
        include: [
          {association: 'usuarioComentario'}, 
          {association: 'usuarios', include:[{association: 'comentario'}]}
        ]}
      Usuario.findByPk(id,relaciones)
      .then(function(data){
        let newProducts = data
        return res.render('profile', {newProducts:data})
      })
      .catch(function(error){
        console.log(error);
      })
  },
      

  login: function (req, res) {
      res.render("login")
     },

  procesarLogin: function(req, res, next){
      let errors = {};
      if (req.body.email == ""){
        errors.message = "El campo email esta vacio";
        res.locals.errors = errors;
        res.render("login")
      }
      else if (req.body.password == ""){
        errors.message = "El campo contrasenia esta vacio";
        res.locals.errors = errors;
        res.render("login")
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
          req.session.user = usuario.dataValues;
          res.locals.user= usuario.dataValues;
          //if(req.body.recordarme){
            //res.cookie("userId",usuario.dataValues.id,{maxAge:1000 *60 *10})
          //}
          return res.redirect('/') //no me redirecciona
        } 
      else {
          errors.message = "El email no existe";
          res.locals.errors = errors;
          return res.render('register')
        }
      }}).catch(errors => {
        res.send(errors)
      })}},

      
    
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
      }},

    logout: function(req, res) {
      let info = req.body;
      if (info.logout != undefined){
        req.session.destroy();
        req.clearCookie("userId");
        return res.redirect("/indexx");
      }},

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