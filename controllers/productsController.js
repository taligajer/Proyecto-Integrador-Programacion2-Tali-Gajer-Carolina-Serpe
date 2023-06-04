const db = require('../database/models'); 
const producto = db.Product;
const datajs = require('../data/data');
const productos = datajs.products;
const user = datajs.user;
const comentarios = datajs.comentarios;

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
  

  findOne: function(req, res, next) 
  {console.log('findOne funcion anda') //si esto aparece en la consola la funcion esta devolviendo algo
    let id = req.params.id;
    let criterio = { where: { id: id } }
    producto.findOne(criterio)
    .then(function(data){
      return res.render("product",{title:"Con findOne",data:[data]})
  })
  .catch(function(err){console.log(err)})
    
  },
  productAdd: function(req, res, next) {
    console.log('productAdd funcion anda')
    const newProducts = productos;
      res.render('product-add', { title: 'products', newProducts, productName: productos.nombreProducto, username: user[0].usuario });
    },}

module.exports = controller;
