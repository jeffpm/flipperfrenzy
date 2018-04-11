var restful = require('node-restful');
var mongoose = restful.mongoose;
var Schema = mongoose.Schema;


var matchSchema = new mongoose.Schema({
    players: [{ type: Schema.Types.ObjectId, ref: 'Player', required:true }],
    game: { type: Schema.Types.ObjectId, ref: 'Game', required:true },
    scores: { type: [Number], required:false },
    timestamp: { type: Date, default:Date.now }
});

module.exports = restful.model('Match', matchSchema);