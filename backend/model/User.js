const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: { 
    type: String, 
    required: true 
  },
  lastName: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  about: String,
  country: {
    type:String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  zip: String,
  phone: String,
  registrationDate: { 
    type: Date,
    default: Date.now
  },
});

// userSchema.pre('save', function(next) {
//   this.date = new Date();
//   next();
// });

module.exports = mongoose.model('User', UserSchema);