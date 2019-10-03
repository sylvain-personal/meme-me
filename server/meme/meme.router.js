const express = require('express');
const router = express.Router();
const { getByMemeId, getAllMemes, createMeme, updateMeme, removeMeme } = require('./meme.controller')

const multer = require('multer');
const upload = multer({ dest: 'meme/uploaded/'})

router.get('/:id', getByMemeId);
router.get('/', getAllMemes);

router.post('/create', upload.single('image'), createMeme);

router.put('/update/:id', updateMeme);

router.delete('/remove/:id', removeMeme);

module.exports = router;