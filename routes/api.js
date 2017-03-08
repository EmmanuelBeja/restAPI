//dependencies
var express = require('express');
var router = express.Router();

//models
var Product = require('../models/ product');

//routes
Product.methods(['get', 'post', 'put', 'delete']);
Product.register(router, '/products');

module.exports = router;
