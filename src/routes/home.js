const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');
const vertify = require('../app/token/vertifyToken');

router.get('/search', siteController.search);
router.get('/', vertify, siteController.index);
module.exports = router;
