const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  messageContent: { 
    type: String, 
    required: true 
  },
  fromUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  toUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true
  },
  conversationPort: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    required: true,
    default: Date.now
    },
});

MessageSchema.pre('save', function(next) {
  this.date = new Date();
  next();
});

module.exports = mongoose.model('Message', MessageSchema);