const controlador = { 
    indexx: function(req, res, next) {
        res.render('indexx', { title: 'index' });
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
      }
    
}

module.exports = controlador;
