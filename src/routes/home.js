const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/HomeController');
const vertify = require('../app/token/vertifyToken');
const get = require('../app/models/News');

router.get('/', siteController.index);
module.exports = router;
