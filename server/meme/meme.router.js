const express = require('express');
const router = express.Router();
const Meme = require('./meme.model');

router.get('/', function(req, res){
   res.send('GET route on things.');
});

router.post('/', function(req, res){
   const meme = new Meme(req.body);
   meme.save()
    .then(meme => {
      res.json('Meme added successfully');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = router;