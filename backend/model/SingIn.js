const mongoose = require('mongoose');
const { FullName } = require("./FullName");

exports.SignInSchema = new mongoose.Schema({
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
exports.RegistrationSchema = new mongoose.Schema ({
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
  },
  email: { 
    type: String, 
    required: true,
    minlength: 8,
    maxlength: 20 
  },
  city: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  },
  zip: Number,
  phone: {
    type: String,
    minlength: 6
  },
  registrationDate: { 
    type: Date,
    default: Date.now
  },
})
RegistrationSchema.pre('save', function(next) {
  this.date = new Date();
  next();
});
