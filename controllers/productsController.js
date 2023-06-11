const db = require('../database/models');
const Producto = db.Product;
const Usuario = db.Usuario;
const Comentario = db.Comentario;
const datajs = require('../data/data');
const productos = datajs.products;
const user = datajs.user;
const comentarios = datajs.comentarios;
let op = db.Sequelize.Op


/*const controlador = { 
    //la ruta handlea /product 
    product: function(req, res, next) {
      //producto.findAll().then(result=>console.log(result))
      console.log(producto);
      const newProducts = productos;
      const newComments = comentarios;
        res.render('product', { title: "products", newProducts: data.slice(0,8), mostCommentedProducts: data.slice(0,8), productName: productos.nombreProducto, newComments});
      },
    // /product/product-add 

    
    // /product/search-results 
    searchResults: function(req, res, next) {
        res.render('search-results', { title: 'products' , newProducts: productos});
      },
} borrar despues de terminar controlador con db*/



const controller = {


  findOne: function (req, res, next) {
    let id = req.params.id;
    let criterio = { 
    where: { id: id },
    include:[{ association: "comentario" },
        { association: "usuarios" }],
    order: [['createdAt', 'DESC']] 
  }

    Producto.findOne(criterio)
      .then(function (data) {
        return res.render("product", { title: "Con findOne", data: [data] })

      })
      .catch(function (err) { console.log(err) })

  },
  productAdd: function (req, res, next) {
    const newProducts = productos;
    res.render('product-add', { title: 'products', newProducts, productName: productos.nombreProducto, username: user[0].usuario });
  },

  procesarAdd: function(req, res, next) {
    let productadd = req.body
    if (req.session.user != undefined){
      let producto = {
      //idUsuario: req.session.userId,
      imagen: productadd.imagen,
      nombre: productadd.nombreProducto,
      descripcion: productadd.descripcion,
      fecha: productadd.fecha
      }
      Producto.create(producto)
      .then(function(product){
        res.redirect('/')
      })
      .catch(function(error){
        console.log(error);
      })}
    else {
      res.redirect('/register')
    }
  },    

  buscador: function (req, res, next) {

    let busqueda = req.query.search
    let criterio = {
      where: {
        [op.or]: [
          { nombreProducto: { [op.like]: "%" + busqueda + "%" } },
          { descripcion: { [op.like]: "%" + busqueda + "%" } }
        ]
      },
      include: 
      [{association: "comentario"},
      {association: "usuarios"}],
      order:[['createdAt', 'DESC']]
    } 
    Producto.findAll(criterio)
      .then(function (data) {
        res.render('search-results', { data: data })
      })
  }
}

module.exports = controller;
