const mongoose = require('mongoose');
//This is the registration schema, the things you need to be able to have an account
const UserSchema = new mongoose.Schema({
  firstName: { 
    type: String, 
    required: true,
    minlength: 4,
    maxlength: 20
  },
  lastName: { 
    type: String, 
    required: true,
    minlength: 4,
    maxlength: 20
  },
  email: { 
    type: String, 
    required: true,
    minlength: 8,
    maxlength: 20 
  },
  password: { 
    type: String, 
    required: true,
    minlength: 8,
    maxlength: 20
  },
  about: String,
  country: {
    type:String,
    required: true,
    minlength: 4,
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
  rating: {
    type: Number,
    // required: true
  }
});

userSchema.pre('save', function(next) {
  this.date = new Date();
  next();
});

module.exports = mongoose.model('User', UserSchema);