const express = require('express')
const path = require('path')
const router = express.Router();
const adminData = require('./admin')
const rootDir= require('../util/path')
const shopc = require('../controllers/shopcontroller')


router.get('/',shopc.getshoppage);

router.get('/cart',shopc.getCart);

router.get('/checkout',shopc.getcheckout);

router.get('/index',shopc.getindex);

router.get('/product-detail',shopc.getproductdetail);


module.exports = router;

// const express = require('express');
 
// const router = express.Router();
 
// router.get('/', (req, res, next) => {
//   res.send('<h1>Hello from Express!</h1>');
// });
 
// module.exports = router;