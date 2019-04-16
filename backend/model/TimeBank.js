const mongoose = require('mongoose');

const TimeBankSchema = new mongoose.Schema({
  //About user
  name: { 
    type: String, 
    required: true,
    minlength: 4,
    maxlength: 20 
  },
  header:{
    type: String,
    required: true,
    maxlength: 20
  },
  description:{
    type: String,
    required: true,
  },
  location: {
    type:String,
    required: true,
    minlength: 4,
    maxlength: 20
  },
  lnglat: { 
    type: String, 
    required: true 
  },

    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comment: String,
  active: Boolean,
  category: String,
  tags: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return v.length > 1
      },
      message: 'You must provide more than 1 tag.'
    },
    enum: ['House&Garden', 'Fashion', 'Motors', 'Entertainment', 'Electronics', 'Art/Collectibles', 'Sports', 'Toys', 'Media', 'Others', 'Pets']
  },
  imageUrl: String,
  registrationDate: { 
    type: Date,
    default: Date.now
  }
});

TimeBankSchema.pre('save', function(next) {
  this.date = new Date();
  next();
});

module.exports = mongoose.model('TimeBank', TimeBankSchema);