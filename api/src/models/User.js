var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    nome: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    senha: {
      type: String,
      required: true
    },
    reviews: [{type: Schema.ObjectId, ref: 'Review'}] // assuming you name your model Task
});

module.exports = mongoose.model('User', UserSchema)
