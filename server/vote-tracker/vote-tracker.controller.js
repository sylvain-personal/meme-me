const { findById, findAll, create, update, remove } = require('./vote-tracker.service')

const getByVoteTrackerId = async (req, res, next) => {
    const id = req.params.id;

    try {
        const voteTracker = await findById(id);
        res.json(voteTracker).sendStatus(200);
        next();
    } catch (e) {
        console.log(e.message)
        res.json(e.message).sendStatus(500) && next(e)
    }
}

const getAllVoteTrackers = async (req, res, next) => {
    try {
        const voteTrackers = await findAll();
        res.json(voteTrackers).sendStatus(200);
        next();
    } catch (e) {
        console.log(e.message)
        res.json(e.message).sendStatus(500) && next(e)
    }
}

const createVoteTracker = async (req, res, next) => {
    const voteTracker = req.body;

    try {
        const createdVoteTracker = await create(voteTracker);
        res.json(createdVoteTracker).sendStatus(200);
        next();
    } catch (e) {
        console.log(e.message)
        res.json(e.message).sendStatus(500) && next(e)
    }
}

const updateVoteTracker = async (req, res, next) => {
    const id = req.params.id;
    const voteTracker = req.body;

    try {
        const updatedVoteTracker = await update(id, voteTracker);
        res.json({
            message: "VoteTracker successfully updated",
            VoteTracker: updatedVoteTracker
        }).sendStatus(200);
        next();
    } catch (e) {
        console.log(e.message)
        res.json(e.message).sendStatus(500) && next(e)
    }
}

const removeVoteTracker = async (req, res, next) => {
    const id = req.params.id;

    try {
        const deletedVoteTracker = await remove(id);
        res.json({
            message: "VoteTracker successfully deleted",
            id: deletedVoteTracker._id
          });
        next();
    } catch (e) {
        console.log(e.message)
        res.json(e.message).sendStatus(500) && next(e)
    }
}

module.exports = { getByVoteTrackerId, getAllVoteTrackers, createVoteTracker, updateVoteTracker, removeVoteTracker }