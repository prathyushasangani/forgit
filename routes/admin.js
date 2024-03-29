const express = require('express');
const path = require('path')
const router = express.Router();
const rootDir= require('../util/path')
const adminc = require('../controllers/admincontroller')



router.get('/add',adminc.getaddpage);
router.post('/added',adminc.postaddpage);


// exports.routes=router;
// exports.products=products;
module.exports=router;
