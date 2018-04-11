var restful = require('node-restful');
var mongoose = restful.mongoose;
var autoIncrement = require('mongoose-auto-increment');
var app = require('../server');
var Schema = mongoose.Schema;

var tournamentSchema = app.resource = restful.model('Tournament', mongoose.Schema({
    _id: Number,
    name: {type: String, required:true},
    players: [{ type: Schema.Types.ObjectId, ref: 'Player', required:true }],
    games: [{ type: Schema.Types.ObjectId, ref: 'Game', required:true }],
    matches: [{ type: Schema.Types.ObjectId, ref: 'Match', required:false }],
    playerQueue: [{
        player: {type: Schema.Types.ObjectId, ref: 'Player'},
        timestamp: { type: Date, default:Date.now }
    }],
    scores: [{
        player: {type: Schema.Types.ObjectId, ref: 'Player'},
        score: {type: Number, default: 0}
    }],
    timestamp: {type: Date, default:Date.now}
}))
.methods(['get', 'post', 'put', 'delete']);

mongoose.plugin(autoIncrement.plugin, { model: 'Tournament', field: '_id' });

tournamentSchema.before('get', log_it);
function log_it(req, res, next){
    console.log("testing");
    next();
}

module.exports = tournamentSchema;