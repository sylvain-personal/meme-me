const VoteTracker = require('./vote-tracker.model');

const findById = async (id) => {
    try {
        return await VoteTracker.findById(id);
    } catch (e) {
        throw new Error(e);
    }
}

const findAll = async () => {
    try {
        return await VoteTracker.find();
    } catch (e) {
        throw new Error(e);
    }
}

const create = async (voteTracker) => {
    try {
        return await VoteTracker(voteTracker).save();
    } catch (e) {
        throw new Error(e);
    }
}

const update = async (id, voteTracker) => {
    try {
        return await VoteTracker.findByIdAndUpdate(id, voteTracker, { new: true });
    } catch (e) {
        throw new Error(e);
    }
}

const remove = async (id) => {
    try {
        return await VoteTracker.findByIdAndRemove(id);
    } catch (e) {
        throw new Error(e);
    }
}

module.exports = { findById, findAll, create, update, remove }