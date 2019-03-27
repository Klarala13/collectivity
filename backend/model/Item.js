const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    minlength: 4,
    maxlength: 20 
  },
  location: { 
    type: String, 
    required: true,
    minlength: 4,
    maxlength: 20 
  },
  lnglat: { 
    type: String, 
    required: true 
  },
  type: { 
    type: String, 
    required: true,
    minlength: 4,
    maxlength: 20 
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comment: String,
  time: String,
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
    enum: ['xxxx', 'xxxx', 'xxxx', 'xxx']
  },
  imageUrl: String,
  date: { 
    type: Date, 
    default: Date.now 
  },
});

ItemSchema.pre('save', function(next) {
  this.date = new Date();
  next();
});

module.exports = mongoose.model('Item', ItemSchema);