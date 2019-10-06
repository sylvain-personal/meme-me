const Meme = require('./meme.model');

const findById = async (id) => {
    try {
        return await Meme.findById(id);
    } catch (e) {
        throw new Error(e);
    }
}

const findAll = async () => {
    try {
        return await Meme.find();
    } catch (e) {
        throw new Error(e);
    }
}

const create = async (meme) => {
    try {
        return await Meme(meme).save();
    } catch (e) {
        throw new Error(e);
    }
}

const update = async (id, points, user_id) => {
    try {
        // increment the points by the received points, vote by 1
        return await Meme.findByIdAndUpdate(id, { 
            $inc: {
                'point_count': points,
                'vote_count': 1
            },
            $push: {
                users_voted: user_id
            }    
        }, {new: true });
    } catch (e) {
        throw new Error(e);
    }
}

const remove = async (id) => {
    try {
        return await Meme.findByIdAndRemove(id);
    } catch (e) {
        throw new Error(e);
    }
}

module.exports = { findById, findAll, create, update, remove }