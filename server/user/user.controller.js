const { findById, findAll, create, update, remove } = require('./User.service')

const getByUserId = async (req, res, next) => {
    const id = req.params.id;

    try {
        const user = await findById(id);
        res.json(user).sendStatus(200);
        next();
    } catch (e) {
        console.log(e.message)
        res.json(e.message).sendStatus(500) && next(e)
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const users = await findAll();
        res.json(users).sendStatus(200);
        next();
    } catch (e) {
        console.log(e.message)
        res.json(e.message).sendStatus(500) && next(e)
    }
}

const createUser = async (req, res, next) => {
    const user = req.body;

    try {
        const createdUser = await create(user);
        res.json(createdUser).sendStatus(200);
        next();
    } catch (e) {
        console.log(e.message)
        res.json(e.message).sendStatus(500) && next(e)
    }
}

const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const user = req.body;

    try {
        const updatedUser = await update(id, user);
        res.json({
            message: "user successfully updated",
            user: updatedUser
        }).sendStatus(200);
        next();
    } catch (e) {
        console.log(e.message)
        res.json(e.message).sendStatus(500) && next(e)
    }
}

const removeUser = async (req, res, next) => {
    const id = req.params.id;

    try {
        const deletedUser = await remove(id);
        res.json({
            message: "user successfully deleted",
            id: deletedUser._id
          });
        next();
    } catch (e) {
        console.log(e.message)
        res.json(e.message).sendStatus(500) && next(e)
    }
}

module.exports = { getByUserId, getAllUsers, createUser, updateUser, removeUser }