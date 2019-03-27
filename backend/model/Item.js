const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  location: { 
    type: String, 
    required: true 
  },
  lnglat: { 
    type: String, 
    required: true 
  },
  type: { 
    type: String, 
    required: true 
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
  tags: Array,
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