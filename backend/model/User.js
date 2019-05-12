const mongoose = require('mongoose');
//This is the user schema, the things you need to be able to have an account
//and be a user. These are the things we require in registrationSchema
let UserSchema = new mongoose.Schema({
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
  repassword:{
	  type: String,
	  required: true,
	  minlength: 8,
},
  city: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  },
  zip: {
    type: Number,
    required: true,
    minlength: 5,
    maxlength: 9
  },
  registrationDate: { 
    type: Date,
    default: Date.now,
    required: true
  },
  rating: {
    type: Number,
    // required: true
  }
});

UserSchema.pre('save', function(next) {
  this.date = new Date();
  next();
});
module.exports = mongoose.model("User", UserSchema);
