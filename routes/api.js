var express = require('express');
var router = express.Router();

var Product = require ('../models/product');
var Game = require ('../models/game');
var Match = require ('../models/match');
var Player = require ('../models/player');
var PlayerQueue = require ('../models/playerQueue');
var Tournament = require ('../models/tournament');

Tournament.before('post', hash_password)
  .before('put', hash_password);
      
function hash_password(req, res, next) {
  console.log("test");
  next();
}


Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');
Game.methods(['get', 'put', 'post', 'delete']);
Game.register(router, '/games');
Match.methods(['get', 'put', 'post', 'delete']);
Match.register(router, '/matches');
Player.methods(['get', 'put', 'post', 'delete']);
Player.register(router, '/players');
PlayerQueue.methods(['get', 'put', 'post', 'delete']);
PlayerQueue.register(router, '/playerqueue');
//Tournament.methods(['get', 'put', 'post', 'delete']);
//Tournament.register(router, '/tournaments');


module.exports = router;