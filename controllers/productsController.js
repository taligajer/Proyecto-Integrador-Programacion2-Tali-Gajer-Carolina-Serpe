const db = require('../database/models');
const Producto = db.Product;
const Usuario = db.Usuario;
const Comentario = db.Comentario;
const datajs = require('../data/data');
const productos = datajs.products;
const user = datajs.user;
const comentarios = datajs.comentarios;
let op = db.Sequelize.Op



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
    const newProducts = Producto;
    res.render('product-add', { title: 'products', newProducts, productName: Producto.nombreProducto, username: user[0].usuario });
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

  productEdit: function (req, res, next) {
      Producto.findByPk(req.params.id)
        .then(function (data) {
    res.render('product-edit', { title: 'products', newProducts:data, productName: data.nombreProducto, username: user[0].usuario })});
  },

  procesarEdit: function(req, res, next) {
    let productEdit = req.body
    Producto.findByPk(req.params.id)
      .then(function(producto){
        if (req.session.user.id==producto.userId) {
          if (req.body.boton=='Enviar') {
            return producto.update({
              nombreProducto: productEdit.nombreProducto,
              descripcion: productEdit.descripcion,
              imagen: productEdit.imagen
            })

          }else {
            return producto.destroy()
          }
          }
        else {
          return res.redirect('/users/login')
        }})
        .catch(function(error) {
              console.log(error);
            });
    },

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
