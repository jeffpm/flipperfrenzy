var restful = require('node-restful');
var mongoose = restful.mongoose;

var gameSchema = new mongoose.Schema({
    name: {type: String, required: true}
});

module.exports = restful.model('Game', gameSchema);