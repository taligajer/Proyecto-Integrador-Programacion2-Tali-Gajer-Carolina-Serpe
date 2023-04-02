const data = require('../data/data');
const productos = data.products;
const controlador = { 
    indexx: function(req, res, next) {
        const newProducts = productos;
        res.render('indexx', { title: 'index', newProducts, mostCommentedProducts: newProducts.slice(0, 4)});
      },
    // handlea /indexx/register
    register: function(req, res, next) {
        res.render('register', { title: 'index' });
      },
    // handlea /indexx/login 
    login: function(req, res, next) {
        res.render('login', { title: 'index' });
      },
    // handlea /index/headerLogueado
    headerLogueado: function(req, res, next) {
        res.render('headerLogueado', { title: 'index' });
      },
    
}

module.exports = controlador;
