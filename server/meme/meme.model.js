const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Meme = new Schema({
  image: {
    type: String
  },
  date_added: {
    type: Date
  },
  user_id: {
    type: String
  },
  ranking_points: {
    type: Number
  }
}, {
  collection: 'memes'
});

module.exports = mongoose.model('Meme', Meme);