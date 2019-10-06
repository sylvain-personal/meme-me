const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Meme = new Schema({
  user_id: {
    type: String
  },
  date_added: {
    type: Date
  },
  filename: {
    type: String
  },
  point_count: {
    type:Number
  },
  vote_count: {
    type:Number
  },
  users_voted: {
    type: []
  }
}, {
  collection: 'memes'
});

module.exports = mongoose.model('Meme', Meme);