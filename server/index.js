const express = require('Express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))
//To parse json data
app.use(bodyParser.json())

const UserRouter = require('./user/user.router');
const MemeRouter = require('./meme/meme.router');

const connectionString = process.env.CONNECTION_STRING || '';
const port = process.env.PORT || null;

// routers
app.use('/user', UserRouter);
app.use('/meme', MemeRouter);
app.use('/vote-tracker', VoteTrackerRouter);

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to database');
    app.listen(port, () => {
        console.log(`Express server listening on port ${port}`);
    });
});

console.log('app is listening');