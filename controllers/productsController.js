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
    include:[{ association: "comentario", include:[{association:"usuarioComentario"}] },
        { association: "usuarios" },
        ],
    order: [['createdAt', 'DESC']] 
  }
    Producto.findOne(criterio)
      .then(function (data) {
        res.render("product", { title: "Con findOne",data: [data]})        
      })
      .catch(function (err) { console.log(err)})

  },

  procesarComentario:function (req,res,next) {
    if (req.session.user != undefined){
      let comentario = {
        idUsuario: req.session.user.id,
        comentario: req.body.comentario,
        idPost: req.params.id,
      }
      Comentario.create(comentario)
      .then(function(product){
        return res.redirect('/products/' + req.params.id)
      })
      .catch(function(error){
        console.log(error);
      })}
    else {
      res.redirect('/register')
    }
  },   

  productAdd: function (req, res, next) {
    const newProducts = productos;
    res.render('product-add', { title: 'products', newProducts, productName: productos.nombreProducto, username: user[0].usuario });
  },

  procesarAdd: function(req, res, next) {
    let productadd = req.body
    if (req.session.user != undefined){
      let producto = {
        userId: req.session.user.id,
        imagen: productadd.imagen, // falta agregar imagen añadiendo el archivo a /public/images/products
        nombreProducto: productadd.nombreProducto,
        descripcion: productadd.descripcion,
      }
      Producto.create(producto)
      .then(function(product){
        return res.redirect('/products/' + product.dataValues.id)
      })
      .catch(function(error){
        console.log(error);
      })}
    else {
      res.redirect('/register')
    }
  },
  procesarEdit: function(req, res, next) {
    let productEdit = req.body
    if (req.session.user != undefined){
      Producto.update({nombreProducto: productEdit.nombreProducto}, {where:{id:req.params.id}})
      .then(function(){
        return Producto.update({imagen: productEdit.imagen}, {where:{id:req.params.id}})})
      .then(function(){
        return Producto.update({descripcion: productEdit.descripcion}, {where:{id:req.params.id}})})
  }},

  buscador: function (req, res, next) {

    let busqueda = req.query.search
    let criterio = {
      where: {
        [op.or]: [
          { nombreProducto: { [op.like]: "%" + busqueda + "%" } },
          { descripcion: { [op.like]: "%" + busqueda + "%" } },
        ]
      },
      include: 
      [{association: "comentario"},
      {association: "usuarios"},
      ],
      order:[['createdAt', 'DESC']]
    } 
    Producto.findAll(criterio)
      .then(function (data) {
        res.render('search-results', { data: data })
      })
  }
}

module.exports = controller;
