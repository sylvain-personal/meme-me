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

const update = async (id, meme) => {
    try {
        return await Meme.findByIdAndUpdate(id, meme, { new: true });
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