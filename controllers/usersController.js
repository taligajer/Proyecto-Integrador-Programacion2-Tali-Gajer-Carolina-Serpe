const db = require('../database/models'); //requerimos el modulo donde estan los modelos
const Usuario = db.Usuario; //accedemos a db y nos traemos el modelo de alias Usuario
const Producto = db.Product; //hacemos lo mismo aca
const data = require('../data/data'); 
const bcryptjs = require('bcryptjs'); //requerimos bryptjs
let op = db.Sequelize.Op

const controller = { 
  register: function (req, res) {
    res.render("register")
  },
  procesarRegister: function (req, res) { 
    let info = req.body; //trae los datos enviados del form de register
    console.log(info);
    //let criterio = {where: [{email: info.email}]}; 
    let errors = {};
    //validaciones
    if (info.email == "") {
      errors.message = "Hay un error. El email no puede estar vacio";
      res.locals.errors = errors; 
      return res.render("register");
    } else if (info.password < 3) {
      errors.message = "Hay un error. La contrasenia tiene que tener 3 caracteres o mas";
      res.locals.errors = errors;
      return res.render("register");
    } else if (info.fecha == "") {
      errors.message = "Hay un error. El campo de fecha no puede estar vacio";
      res.locals.errors = errors;
      return res.render("register");
    } else {
      let criterio = {
        where: [{ email: req.body.email }]//busca si el usuario con ese mail ya esta en la base de datos 
      };

      Usuario.findOne(criterio)//busca usuario que cumpla con ese criterio
      .then(usuario => {
        if (usuario == null) {
          //creamos el usuario
          let contraseniahash = bcryptjs.hashSync(info.password, 10); //genera un hash de la contrasenia
          let user = {
            email: req.body.email,
            contrasenia: contraseniahash,
            fotoPerfil: req.body.fotoPerfil,
            fecha: req.body.fecha,
            dni: req.body.dni
          };
          // creamos el usuario y esperamos la creacion del mismo para obtener el ID
          Usuario.create(user).then(usuario => {//creamos el usuario en la base de datos 
            req.session.user = {//se almacena en la sesion del usuario el email y el id 
              email: usuario.dataValues.email,
              id: usuario.dataValues.id
            };
            res.locals.user = usuario.dataValues;//almacena el valor que despues comparte con las vistas
            return res.redirect('/');
          });
        } else {
          errors.message = "El email ya existe";
          res.locals.errors = errors;
          return res.render('register');
        }
      });
    }},
  
  profile: function(req, res, next) {
      //let session = req.session.user.id;//obtenemos el id del usuario una vez ya logueado, su id esta guardada en la sesion
      let id = req.params.id;
      let criterio = {//define la consulta que hacemos de busqueda del usuario
        include: [
          { 
            association: 'usuarioProducto',//usamos la asociacion que esta definida en el modelo Usuario
          },
          {
            association: 'usuarioComentario',//usamos la asociacion que esta definida en el modelo Usuario
          }
        ],
        order: [[{model: Producto, as: 'usuarioProducto'}, 'createdAt', 'DESC']]
      };

      Usuario.findByPk(id, criterio)//buscamos el usuario por su id y usamos el criterio de busqueda 
      .then(function(data){
        console.log(data.usuarioProducto);
        // res.send(data)
        return res.render('profile', {usuario: data})//accedemos a los datos del usuario encontrados en data.data...
      })//usuarioProducto contiene los productos 
      .catch(function(error){
        console.log(error);
      })
  },

  editProfile: function(req, res, next) {
    res.render('profile-edit')
  },

  procesarEditProfile:function(req, res, next) {//falta terminar 
    if(req.session.user != undefined){
      let editProfile = {
      email: req.body.email,
      usuario: req.body.usuario,
      contraseña: req.body.contraseña,
      fecha: req.body.fecha,
      dni: req.body.dni,
      fotoPerfil: req.body.fotoPerfil
  }
  Usuario.update(editProfile).then(function(product){
    return res.redirect('/profile')
  })
  .catch(function(error) {
    console.log(error);
  })}

},
      
  login: function (req, res) {
      res.render("login")
     },

  procesarLogin: function(req, res, next){
      let errors = {};
      if (req.body.email == ""){
        errors.message = "El campo email esta vacio";
        res.locals.errors = errors;
        return res.render("login")
      }
      else if (req.body.password == ""){
        errors.message = "El campo contrasenia esta vacio";
        res.locals.errors = errors;
        return res.render("login")
      }
      else{
        let criterio = {
          where: [{ email: req.body.email }]
        };
      Usuario.findOne(criterio).then(usuario => {//busca usuarios que cumplan con el criterio establecido 
        let contraseniacompare = false;
        if(usuario != null) {//si el usuario es distinto a null
          contraseniacompare = bcryptjs.compareSync(req.body.contrasenia, usuario.contrasenia);//comparamos la contrasenia del form con la contrasenia de la base de datos 
        }
        if(contraseniacompare == true){//si las contrasenias coniciden se guarda la info del usuario en la sesion
          req.session.user = {
            email: usuario.dataValues.email,
            id: usuario.dataValues.id
          };
          res.locals.user= usuario.dataValues;
          if(req.body.recordarme){//si campo recordarme esta marcado crea una cookie que contiene la info del usuario para mantener la session iniciada 
            res.cookie("user", {email: usuario.dataValues.email, id: usuario.dataValues.id}, {maxAge: 1000 * 60 * 60 * 24 * 7})
          }
          return res.redirect('/') 
        } 
        else {
          errors.message = "El email no existe";
          res.locals.errors = errors;
          return res.render('login')
        }
      }).catch(errors => {
        res.send(errors)
      })}},

    logout: function(req, res) {
      if (req.session.user) {
        req.session.destroy(function(err) {
          if (err) {
            return next(err);
          } else {
            return res.redirect('/');
          }
        });

        res.clearCookie('user');
      } else {
        return res.redirect('/');
      }
    },

    buscadorUsuario: function (req, res, next) {//falta terminar (no aparece el nombre del usuario)

      let busqueda = req.query.search
      let criterio = {
        where: {
             email: { [op.like]: "%" + busqueda + "%" }
        },
      } 
      Usuario.findAll(criterio)
        .then(function (data) {
          //res.send(data)
          res.render('search-users', { data: data })
        })
    }
  }

    // /users/profile/profile-edit
    //profileEdit: function(req, res, next) {
    //    res.render('profile-edit', {title: 'users', username: usuario[0].usuario})
    //},
   // headerLogueado: function(req, res, next) {
     // res.render('product-add', {title: 'users', username: usuario.usuario})
  //},



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