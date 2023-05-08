const db = require('../database/models'); //demo
const movie = db.movie;    //demo
const data = require('../data/data');
const productos = data.products;
const controlador = {
    indexx: function(req, res, next) {
        movie.findAll().then(data).catch(err)
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
//Su responsabilidad es atender los distintos request del cliente y generar comunicación entre las vistas y los modelos.

module.exports = controlador;
