const { findById, findAll, create, update, remove } = require('./meme.service');
const fs  = require('fs');
const FormData = require('form-data');

const getByMemeId = async (req, res, next) => {
    const id = req.params.id;

    try {
        var formData = new FormData();
        let image;
        // console.log(fs);
        // image = fs.readFile('meme/uploaded/ed5d71d941f2a114e07da926522cd93c.jpg', (err, data) => {
        //     console.log(data);
        //     console.log(err);
        // });

        // const meme = {
        //     meme: memeInformation,
        //     image: image
        // }
        // formData.append('meme', memeInformation);
        formData.append('image', fs.createReadStream('meme/uploaded/ed5d71d941f2a114e07da926522cd93c.jpg'));    
        // console.log(image);
        //res.type('blob')
        res.send(fs.createReadStream('meme/uploaded/ed5d71d941f2a114e07da926522cd93c.png'));
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
    const points = req.body.points;
    const user_id = req.body.user_id;

    try {
        const updatedMeme = await update(id, points, user_id);
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