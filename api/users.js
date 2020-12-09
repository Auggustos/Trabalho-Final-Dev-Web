var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/consoles');

var usersSchema = new mongoose.Schema({
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
    }
}, { collection: 'users' });

module.exports = { Mongoose: mongoose, UsersSchema: usersSchema }
