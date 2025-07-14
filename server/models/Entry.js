const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  date: { type: String, required: true },
  calories: { type: Number, required: true },
  sleep: { type: Number, required: true },
  workouts: { type: String },
  heartRate: { type: Number, default: 70 },
  steps: { type: Number, default: 0 }
});

module.exports = mongoose.model('Entry', entrySchema);
