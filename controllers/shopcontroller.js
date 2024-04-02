
const Product = require('../models/product')

exports.getshoppage=(req, res,next)=>{
    
    console.log("in another middle")
    const products = Product.fetchall((products)=>{
        res.render('shop/product-list',{prods: products , pagetitle:'cart' , path: '/'})
        res.render('shop/cart',{prods: products , pagetitle:'cart' , path: '/cart'})

    
    });
    // res.sendFile(path.join(rootDir,'views','shop.html'))
    // res.render('shop',{prods: products , pagetitle:'cart' , path: '/'})
    
    // res.sendFile('/views/shop.html')
    // res.send("<h1>Hi Redirected</h1>");
}


exports.getshoppage=(req, res,next)=>{
    
    console.log("in another middle")
    const products = Product.fetchall((products)=>{
        res.render('shop/product-list',{prods: products , pagetitle:'cart' , path: '/'})
        res.render('shop/cart',{prods: products , pagetitle:'cart' , path: '/cart'})

    
    });
    
}

exports.getCart=(req,res,nxt)=>{
    res.render('shop/cart',{pagetitle:'cart' , path:'/cart'})
}

exports.getcheckout=(req,res,nxt)=>{
    res.render('shop/checkout',{pagetitle:'cart' , path:'/checkout'})
}

exports.getproductdetail=(req,res,nxt)=>{
    res.render('shop/product-detail',{pagetitle:'cart' , path:'/product-detail'})
}

exports.getindex=(req,res,nxt)=>{
    res.render('shop/index',{pagetitle:'cart' , path:'/index'})
}


