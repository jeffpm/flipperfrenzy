var restful = require('node-restful');
var mongoose = restful.mongoose;
var autoIncrement = require('mongoose-auto-increment');
var app = require('../server');
var Schema = mongoose.Schema;
var Resource = app.resource = restful.model('resource', mongoose.Schema({
    title: String,
    year: Number,
  }))
  .methods(['get', 'post', 'put', 'delete']);

Resource.before('get', log_it);
function log_it(req, res, next){
    console.log("testing");
    next();
}

module.exports = Resource;