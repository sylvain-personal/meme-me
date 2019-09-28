const express = require('express');
const router = express.Router();
const User = require('./user.model');

router.get('/', function(req, res){
   res.send('GET route on things.');
});

router.post('/', function(req, res){
   const user = new User(req.body);
   user.save()
    .then(user => {
      res.json('User added successfully');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = router;