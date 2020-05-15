const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  bookedStores: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true
  },
  pin: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('User', userSchema);
