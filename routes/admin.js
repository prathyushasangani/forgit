const express = require('express');
const path = require('path')
const router = express.Router();
const rootDir= require('../util/path')
const adminc = require('../controllers/admincontroller')



router.get('/add-product',adminc.getaddpage);
router.post('/shop',adminc.postaddpage);
router.get('/edit-product',adminc.getedit);
router.get('/products',adminc.getproducts);


// exports.routes=router;
// exports.products=products;
module.exports=router;
