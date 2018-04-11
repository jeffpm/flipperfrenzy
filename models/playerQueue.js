var restful = require('node-restful');
var mongoose = restful.mongoose;
var Schema = mongoose.Schema;


var playerQueueSchema = new mongoose.Schema({
    players: [{ type: Schema.Types.ObjectId, ref: 'Player', required: true }]
});

module.exports = restful.model('PlayerQueue', playerQueueSchema);