const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedBack = {
  userName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  }
}

const item = {
  name: {
    type: String,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
  status: {
    type: String,
    require: true,
  }
}

const storeSchema = new Schema(
  {
    storeType: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    distance: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    pin: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    userFeedbacks: {
      type: [feedBack],
      required: true
    },
    storeLimit: {
      type: Number,
      required: true
    },
    filledSlots: {
      type: Number,
      required: true
    },
    timeSlot: {
      type: String,
      required: true
    },
    timeMeridiem: {
      type: String,
      required: true
    },
    items: {
      type: [item],
      required: true
    },
    bookedUserSlots: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'User'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Store', storeSchema);
