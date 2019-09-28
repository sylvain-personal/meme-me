const express = require('express');
const router = express.Router();
const User = require('./user.model');

router.get('/:id', function (req, res) {
  User.findById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

router.get('/', function (req, res) {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});


router.post('/create', function (req, res) {
  const user = new User(req.body);
  user.save()
    .then(user => {
      res.json({
        message: 'user added successfully',
        user: user
      });
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.put('/update/:id', function (req, res) {
  User.findByIdAndUpdate(
    req.params.id, req.body, { new: true })
    .then((user) => {
      res.json({
        message: "user successfully updated",
        user: user
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

router.delete('/remove/:id', function (req, res) {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      res.json({
        message: "user successfully deleted",
        id: user._id
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

module.exports = router;