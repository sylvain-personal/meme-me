const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteTracker = new Schema({
  user_id: {
    type: String
  },
  meme_id: {
      type: String
  }
},{
    collection: 'vote_tracker'
});

module.exports = mongoose.model('VoteTracker', VoteTracker);