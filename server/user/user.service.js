const User = require('./user.model');

const findById = async (id) => {
    try {
        return await User.findById(id);
    } catch (e) {
        throw new Error(e);
    }
}

const findAll = async () => {
    try {
        return await User.find();
    } catch (e) {
        throw new Error(e);
    }
}

const create = async (user) => {
    try {
        return await User(user).save();
    } catch (e) {
        throw new Error(e);
    }
}

const update = async (id, user) => {
    try {
        return await User.findByIdAndUpdate(id, user, { new: true });
    } catch (e) {
        throw new Error(e);
    }
}

const remove = async (id) => {
    try {
        return await User.findByIdAndRemove(id);
    } catch (e) {
        throw new Error(e);
    }
}

module.exports = { findById, findAll, create, update, remove }