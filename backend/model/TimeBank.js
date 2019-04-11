const mongoose = require('mongoose');

const TimeBankSchema = new mongoose.Schema({
  //About user
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
  //About Skill
  description:{
    type: String,
    required: true,
    minlength: 5,
    maxlength: 4000
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
});

// userSchema.pre('save', function(next) {
//   this.date = new Date();
//   next();
// });

module.exports = mongoose.model('User', UserSchema);