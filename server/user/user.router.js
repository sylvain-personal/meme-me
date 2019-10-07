const express = require('express');
const router = express.Router();
const { getByUserId, getAllUsers, createUser, updateUser, removeUser } = require('./user.controller')

router.get('/:id', getByUserId);
router.get('/', getAllUsers);

router.post('/create', createUser);

router.put('/update/:id', updateUser);

router.delete('/remove/:id', removeUser);

module.exports = router;