
const Product = require('../models/product')
exports.getaddpage = (req, res,next)=>{
    
    console.log("in  middle");
    res.render('add',{pagetitle:'add product ' , path:'/add'})
    // res.sendFile(path.join(rootDir,'views','add.html'));
    // res.send('<form action="/addp" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
}


exports.postaddpage =(req,res,next)=>{
    const product = new Product(req.body.title);
    product.save();
    // res.send("<h1>in not redirecting</h1>");
    res.redirect('/');
}

exports.getshoppage=(req, res,next)=>{
    
    console.log("in another middle")
    const products = Product.fetchall((products)=>{
        res.render('shop',{prods: products , pagetitle:'cart' , path: '/'})

    
    });
    // res.sendFile(path.join(rootDir,'views','shop.html'))
    // res.render('shop',{prods: products , pagetitle:'cart' , path: '/'})
    
    // res.sendFile('/views/shop.html')
    // res.send("<h1>Hi Redirected</h1>");
}

