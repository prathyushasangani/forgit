// const Product = require('../models/product');

// exports.getAddProduct = (req, res, next) => {
//     res.render('admin/add-product',{pagetitle:'add product ' , path:'/add-product'})
// };

// exports.postAddProduct = (req, res, next) => {
//   const title = req.body.title;
//   const imageUrl = req.body.imageUrl;
//   const price = req.body.price;
//   const description = req.body.description;
//   const product = new Product(title, imageUrl, description, price);
//   product.save();
//   res.redirect('/');
// };

// exports.getProducts = (req, res, next) => {
// //   Product.fetchAll(products => {
// //     res.render('admin/products', {
// //       prods: products,
// //       pageTitle: 'Admin Products',
// //       path: '/admin/products'
// //     });
// //   });
//     res.render('admin/products',{pagetitle:'products ' , path:'/products'})
// };

const Product = require('../models/product')
exports.getaddpage = (req, res,next)=>{
    
    console.log("in  middle");
    res.render('admin/add-product',{pagetitle:'add product ' , path:'/add-product'})
    // res.render('admin/edit-product',{pagetitle:'add product ' , path:'/edit-product'})
    // res.sendFile(path.join(rootDir,'views','add.html'));
    // res.send('<form action="/addp" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
}


exports.postaddpage =(req,res,next)=>{
    console.log("in post")
    const product = new Product(req.body.title);
    product.save();
    // res.send("<h1>in not redirecting</h1>");
    res.redirect('/');
}

exports.getedit = (req, res,next)=>{
    res.render('admin/edit-product',{pagetitle:'edit product ' , path:'/edit-product'})
    
}

exports.getproducts = (req, res,next)=>{
    res.render('admin/products',{pagetitle:'products ' , path:'/products'})
    
}

