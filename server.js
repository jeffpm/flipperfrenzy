// var express = require('express');
// var mongoose = require('mongoose');
// var methodOverride = require('method-override');
// var bodyParser = require('body-parser');

// mongoose.connect('mongodb://localhost/rest_test');

// var app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(methodOverride());

// app.use('/api', require('./routes/api'));

// app.listen(3000);
// console.log("listening on port 3000");

var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    //morgan = require('morgan'),
    restful = require('node-restful'),
    mongoose = restful.mongoose;
var app = module.exports = express();

//app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

mongoose.connect("mongodb://localhost/resources");
var Resource = require ('./models/resource');
var Tournament = require ('./models/tournament');

// var Resource = app.resource = restful.model('resource', mongoose.Schema({
//     title: String,
//     year: Number,
//   }))
//   .methods(['get', 'post', 'put', 'delete']);

// Resource.before('get', log_it);
// function log_it(req, res, next){
//     console.log("testing");
//     next();
// }
Resource.register(app, '/resources');
Tournament.register(app, '/tournaments');


app.listen(3000);
console.log('started');