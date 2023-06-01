//Su responsabilidad es atender los distintos request del cliente y generar comunicación entre las vistas y los modelos.
// chequear 
const db = require('../database/models'); 
const index = db.index;  //consultar Luis 
const bcryptjs= require('bcryptjs');
const Product = db.Product;
const User = db.Usuario;
const controlador = {
indexx: function(req, res, next) {
 
  console.log();
  Product.findAll({
    order: [['createdAt', 'DESC']]
  })
  .then(function(data){
    console.log(data);
    return res.render('indexx', {newProducts: data, mostCommentedProducts: data})
  })
  .catch(function(err){console.log(err)})
  
},

store: function (req, res){
  let passEncriptada = bcryptjs.hashSync(req.body.password, 12); // aca no va un numero va el length de la contrasnia
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


