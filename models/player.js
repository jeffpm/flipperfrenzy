var restful = require('node-restful');
var autoIncrement = require('mongoose-auto-increment');
var mongoose = restful.mongoose;
autoIncrement.initialize(mongoose.connection);


var playerSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    playerNumber: {type: Number, required: true},
    ifpaNumber: {type: Number, required: false}
});

playerSchema.plugin(autoIncrement.plugin, { model: 'Player', field: 'playerNumber' });

playerSchema
.virtual('fullname')
.get(function () {
  return this.firstName + " " + this.lastName;
})
module.exports = restful.model('Player', playerSchema);