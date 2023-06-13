//Su responsabilidad es atender los distintos request del cliente y generar comunicación entre las vistas y los modelos.
// chequear 
const db = require('../database/models'); 
const index = db.index;  //consultar Luis 
const bcryptjs= require('bcryptjs');
const Product = db.Product;
const User = db.Usuario;
const op = db.sequelize.Op;

const controlador = {
indexx: function(req, res, next) {
  Product.findAll({
    include: 
      [{association: "comentario"},
      {association: "usuarios"}],
      order:[['createdAt', 'DESC']]
    })
   
  .then(function(data){
    let newProducts = data
    return res.render('indexx', {newProducts: data.slice(0,8), mostCommentedProducts: data.slice(0,8)}) // mostrar los mas comentados, no todos
  })
  .catch(function(err){console.log(err)})
  
},

store: function (req, res){
  let passEncriptada = bcryptjs.hashSync(req.body.password, password.length); // aca no va un numero va el length de la contrasnia
  let user = {
    email: req.body.email, 
    contrasenia: passEncriptada,
    fotoPerfil: req.body.fotoPerfil,
    fecha: req.body.fecha, 
    dni: req.body.dni,
  }
  Usuario.create(user);
  res.redirect('/indexx')
},
//login: function (req, res) {
  //res.render('login')
//},
//register: function (req, res) {
  //res.render('register')
//},
ingresar:(req,res)=>{
  console.log(req.query)
  let passEncriptada = bcryptjs.hashSync(req.query.password, 12);
      let user = {
        email: req.body.email,
        contrasenia: passEncriptada
      }
      User.create(
        {
          email: req.body.email,
          contrasenia: passEncriptada,
          fotoPerfil: '',
          fecha: '01-01-2023',
          dni: 1,
          user
        }
      )
      res.redirect('/users/headerLogueado');
}, // consultar a Luis 
}



module.exports = controlador;
