const express = require('express');

const router = express.Router();
const homeController = require('../controller/home_controller');

console.log('router loaded');


router.get('/', homeController.home);
router.get('/upload', homeController.upload);

// router.use('/users', require('./users'));

// for any further routes, acce ss from here
// router.use('/routerName', require('./routerfile));



module.exports = router;