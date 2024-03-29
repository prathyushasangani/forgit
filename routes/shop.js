const express = require('express')
const path = require('path')
const router = express.Router();
const adminData = require('./admin')
const rootDir= require('../util/path')
const adminc = require('../controllers/admincontroller')


router.get('/',adminc.getshoppage);


module.exports = router;

// const express = require('express');
 
// const router = express.Router();
 
// router.get('/', (req, res, next) => {
//   res.send('<h1>Hello from Express!</h1>');
// });
 
// module.exports = router;