const { findById, findAll, create, update, remove } = require('./meme.service');

const getByMemeId = async (req, res, next) => {
    const id = req.params.id;

    try {
        const meme = await findById(id);
        res.json(meme).sendStatus(200);
        next();
    } catch (e) {
        console.log(e.message)
        res.json(e.message).sendStatus(500) && next(e)
    }
}

const getAllMemes = async (req, res, next) => {
    try {
        const memes = await findAll();
        res.json(memes).sendStatus(200);
        next();
    } catch (e) {
        console.log(e.message)
        res.json(e.message).sendStatus(500) && next(e)
    }
}

const createMeme = async (req, res, next) => {
    console.log(req.file);

    const meme = {
        user_id: req.body.user_id,
        date_added: Date.now(),
        filename: req.file.filename,
        point_count: 0,
        vote_count: 0
    }
    
    try {
        const createdMeme = await create(meme);
        res.json(createdMeme).sendStatus(200);
        next();
    } catch (e) {
        console.log(e.message)
        res.json(e.message).sendStatus(500) && next(e)
    }
}

const updateMeme = async (req, res, next) => {
    const id = req.params.id;
    const meme = req.body;

    try {
        const updatedMeme = await update(id, meme);
        res.json({
            message: "Meme successfully updated",
            meme: updatedMeme
        }).sendStatus(200);
        next();
    } catch (e) {
        console.log(e.message)
        res.json(e.message).sendStatus(500) && next(e)
    }
}

const removeMeme = async (req, res, next) => {
    const id = req.params.id;

    try {
        const deletedMeme = await remove(id);
        res.json({
            message: "Meme successfully deleted",
            id: deletedMeme._id
          });
        next();
    } catch (e) {
        console.log(e.message)
        res.json(e.message).sendStatus(500) && next(e)
    }
}

module.exports = { getByMemeId, getAllMemes, createMeme, updateMeme, removeMeme }