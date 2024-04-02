
const Product = require('../models/product')
exports.getaddpage = (req, res,next)=>{
    
    console.log("in  middle");
    res.render('admin/add-product',{pagetitle:'add product ' , path:'/add-product'})
    // res.render('admin/edit-product',{pagetitle:'add product ' , path:'/edit-product'})
    // res.sendFile(path.join(rootDir,'views','add.html'));
    // res.send('<form action="/addp" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
}


exports.postaddpage =(req,res,next)=>{
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

