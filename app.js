var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const session = require('express-session');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var usersRouter = require('./routes/users')

var app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: "Mensaje secreto",
    resave: false,
    saveUninitialized: true
}));
app.use(function (req,res,next) {
    if(req.session.user != undefined){
        res.locals.user = req.session.user;
        return next()
    } else if (req.cookies.user != undefined){
        req.session.user = req.cookies.user;
        res.locals.user = req.session.user;
    }

    return next();
})

app.use(function(req, res, next) {
    if (req.cookies.user != undefined && req.session.user == undefined) { 
        let idUsuarioEnCookie = req.cookies.user.id; //guardo el 
        Usuario.findByPk(idUsuarioEnCookie)
        .then((user) => {
          req.session.user = user.dataValues;
          res.locals.user  = user.dataValues;
          return next();
        }).catch((err) => {
          console.log(err);
          return next();
        });
    } else {
      return next();
    }
  });
  
app.use('/', indexRouter); 
app.use('/products', productsRouter); 
app.use('/users', usersRouter);

app.use(express.static(__dirname + '/public/css')) 



module.exports = app;
