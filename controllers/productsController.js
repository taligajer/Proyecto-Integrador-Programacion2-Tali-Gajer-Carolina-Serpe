const controller = { 
    //la ruta handlea /product 
    product: function(req, res, next) {
        res.render('product', { title: 'products' });
      },
    // /product/product-add 

    productAdd: function(req, res, next) {
        res.render('product-add', { title: 'products' });
      },
    // /product/search-results 
    searchResults: function(req, res, next) {
        res.render('search-results', { title: 'products' });
      },
}

module.exports = controller;