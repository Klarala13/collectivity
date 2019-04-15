const mongoose = require('mongoose');

const SignInSchema = new mongoose.Schema({
  userName: { 
    type: String, 
    required: true,
    minlength: 4,
    maxlength: 200 
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 200
  }
});

module.exports = mongoose.model('SignIn', SignInSchema);