const data = require('../data/data');
const productos = data.products;
const user = data.user;

const controller = { 
    //la ruta handlea /product 
    product: function(req, res, next) {
      const newProducts = productos;
        res.render('product', { title: "products", newProducts, productName: productos.nombreProducto });
      },
    // /product/product-add 

    productAdd: function(req, res, next) {
      const newProducts = productos;
        res.render('product-add', { title: 'products', newProducts, productName: productos.nombreProducto, username: user.usuario });
      },
    // /product/search-results 
    searchResults: function(req, res, next) {
        res.render('search-results', { title: 'products' });
      },
}

module.exports = controller;