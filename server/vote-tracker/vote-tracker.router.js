const express = require('express');
const router = express.Router();
const { getByVoteTrackerId, getAllVoteTrackers, createVoteTracker, updateVoteTracker, removeVoteTracker } = require('./vote-tracker.controller')

router.get('/:id', getByVoteTrackerId);
router.get('/', getAllVoteTrackers);

router.post('/create', createVoteTracker);

router.put('/update/:id', updateVoteTracker);

router.delete('/remove/:id', removeVoteTracker);

module.exports = router;