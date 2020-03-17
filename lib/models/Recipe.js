const mongoose = require('mongoose');

const directionsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  measurements: {
    type: String,
    required: true
  }
});

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ingredients: [directionsSchema]
});

module.exports = mongoose.model('Recipe', schema);
