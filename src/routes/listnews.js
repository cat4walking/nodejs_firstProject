const express = require('express');
const router = express.Router();
const listNewsController = require('../app/controllers/ListNewsController');
z


router.patch('/:id/restore', listNewsController.restore);
router.get('/trash/news', listNewsController.trashNews);
router.get('/uploaded/news', listNewsController.uploadedNews);
module.exports = router;