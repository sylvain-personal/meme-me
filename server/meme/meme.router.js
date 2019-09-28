const express = require('express');
const router = express.Router();
const Meme = require('./meme.model');

router.get('/:id', function (req, res) {
  Meme.findById(req.params.id)
    .then((meme) => {
      res.json(meme);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

router.get('/', function (req, res) {
  Meme.find()
    .then((memes) => {
      res.json(memes);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});


router.post('/create', function (req, res) {
  const meme = new Meme(req.body);
  meme.save()
    .then(meme => {
      res.json({
        message: 'Meme added successfully',
        meme: meme
      });
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.put('/update/:id', function (req, res) {
  Meme.findByIdAndUpdate(
    req.params.id, req.body, { new: true })
    .then((meme) => {
      res.json({
        message: "Meme successfully updated",
        meme: meme
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

router.delete('/remove/:id', function (req, res) {
  Meme.findByIdAndRemove(req.params.id)
    .then((meme) => {
      res.json({
        message: "Meme successfully deleted",
        id: meme._id
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

module.exports = router;