const db = require('../database/models'); 
const producto = db.Product;
const data = require('../data/data');
const productos = data.products;
const user = data.user;
const comentarios = data.comentarios;

const controller = { 
    //la ruta handlea /product 
    product: function(req, res, next) {
      const newProducts = productos;
      const newComments = comentarios;
        res.render('product', { title: "products", newProducts, productName: productos.nombreProducto, newComments});
      },
    // /product/product-add 

    productAdd: function(req, res, next) {
      const newProducts = productos;
        res.render('product-add', { title: 'products', newProducts, productName: productos.nombreProducto, username: user[0].usuario });
      },
    // /product/search-results 
    searchResults: function(req, res, next) {
        res.render('search-results', { title: 'products' , newProducts: productos});
      },
}

module.exports = controller;

//findOne: function(req, res, next) 
{
  //let id = req.params.id; 
  //let criterio = {where: [{id:id}]}

}