const express = require('express');
const router = express.Router();
const { getByMemeId, getAllMemes, createMeme, updateMeme, removeMeme } = require('./meme.controller')

router.get('/:id', getByMemeId);
router.get('/', getAllMemes);

router.post('/create', createMeme);

router.put('/update/:id', updateMeme);

router.delete('/remove/:id', removeMeme);

module.exports = router;