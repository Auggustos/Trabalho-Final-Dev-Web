var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  nota: Number,
  opiniao: String,
  game: {type: Schema.ObjectId, ref: 'Game'},
  usuario: {type: Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Review', ReviewSchema)
