//Su responsabilidad es atender los distintos request del cliente y generar comunicación entre las vistas y los modelos.
// chequear 
const db = require('../database/models'); 
const index = db.index;  //consultar Luis 
const bcryptjs= require('bcryptjs');
const Product = db.Product;
const User = db.Usuario;
const controlador = {
indexx: function(req, res, next) {
  Product.findAll({
    //include: 
      //[{association: "UsuaRelProd"},
      //{association: "ProdRelUsu"}],
    order:[['createdAt', 'DESC']]
    })
  .then(function(data){
    newProducts = data
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
login: function (req, res) {
  res.render('login')
},
ingresar:(req,res)=>{
  let encriptada= bcryptjs.hashSync("123",12)
  let check= bcryptjs.compareSync(req.body.password,encriptada);
  res.send({clave:check})
}, // consultar a Luis 

searchresults: function(req, res) {
  const busqueda = req.query.search;
  console.log(busqueda);
  Product.findAll({
    where: {
      [op.or]: [
        { producto: { [op.like]: `%${busqueda}%` } },
        { descripcion: { [op.like]: `%${busqueda}%` } },
      ],
    },
    include: [{model: Usuario, as: 'Usuario'},],
    order: [['createdAt', 'DESC']],
  })
    .then(newProducts => {
      if (newProducts) {
        res.render('search-results', {newProducts,busqueda});
      }})
}
}

module.exports = controlador;
