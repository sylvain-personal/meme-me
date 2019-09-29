const express = require('express');
const router = express.Router();
const VoteTracker = require('./vote-tracker.model');

router.get('/:id', function (req, res) {
  VoteTracker.findById(req.params.id)
    .then((voteTracker) => {
      res.json(voteTracker);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

router.get('/', function (req, res) {
  VoteTracker.find()
    .then((voteTracker) => {
      res.json(voteTracker);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});


router.post('/create', function (req, res) {
  const voteTracker = new VoteTracker(req.body);
  voteTracker.save()
    .then(voteTracker => {
      res.json({
        message: 'VoteTracker added successfully',
        VoteTracker: voteTracker
      });
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.put('/update/:id', function (req, res) {
  VoteTracker.findByIdAndUpdate(
    req.params.id, req.body, { new: true })
    .then((VoteTracker) => {
      res.json({
        message: "VoteTracker successfully updated",
        VoteTracker: VoteTracker
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

router.delete('/remove/:id', function (req, res) {
  VoteTracker.findByIdAndRemove(req.params.id)
    .then((VoteTracker) => {
      res.json({
        message: "VoteTracker successfully deleted",
        id: VoteTracker._id
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

module.exports = router;