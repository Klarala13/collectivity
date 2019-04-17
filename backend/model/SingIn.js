const mongoose = require('mongoose');
const { FullName } = require("./FullName");

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
  },
  email: { 
    type: String, 
    required: true,
    minlength: 8,
    maxlength: 20 
  },
});
const RegistrationSchema = new mongoose.Schema ({
  userName:{
    type: String, 
    required: true,
    minlength: 4,
    maxlength: 20
  },
  name: {
    type: FullName,
    required: true
  },
  password:{
    type: String, 
    required: true,
    minlength: 8,
  },
  confirmPassword:{
    type: String, 
    required: true,
    minlength: 8,
  }
})

module.exports = mongoose.model('SignIn', SignInSchema);
module.exports = mongoose.model ('Registration', RegistrationSchema)