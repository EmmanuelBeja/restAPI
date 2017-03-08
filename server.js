var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rest');
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extented: true}));
app.use(bodyParser.json());

//route
app.use('/api', require('./routes/api'));

//start server
app.listen(port);
console.log('This app runs on port '+port);
