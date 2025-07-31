// noteRouter.js
const express = require('express');
const router = express.Router();

// Import user controller
const noteService = require('../service/noteService');

router.get('/getuser',  noteService.getUser);
router.post('/creatuser', noteService.createUser);
router.get('/getspecificuser/:id', noteService.getspecificUser);

module.exports = router;