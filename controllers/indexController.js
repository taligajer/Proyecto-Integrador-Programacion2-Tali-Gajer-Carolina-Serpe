//Su responsabilidad es atender los distintos request del cliente y generar comunicación entre las vistas y los modelos.
// chequear 
const db = require('../database/models'); 
const index = db.index;  
const data = require('../data/data');
const productos = data.products;
const bcryptjs= require('bcryptjs');
const User = db.User;
const controlador = {
indexx: function(req, res, next) {
  index.findAll()
  .then(function(data){
      return res.render("index", {title: 'index', data: data, mostCommentedProducts: data.slice(0, 4)})
  })
  .catch(function(err){console.log(err)})
},

store: function (req, res){
  let passEncriptada = bcryptjs.hashSync(req.body.password,12);
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
login: function (req, res) {
  res.render('login')
},
ingresar:(req,res)=>{
  let encriptada= bcryptjs.hashSync("123",12)
  let check= bcryptjs.compareSync(req.body.password,encriptada);
  res.send({clave:check})
} // consultar a Luis 

}

module.exports = controlador;


