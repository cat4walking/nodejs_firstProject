const express = require('express');
const router = express.Router();
const siteController = require('../common/controllers/HomeController');
const vertify = require('../common/token/vertifyToken');
const get = require('../common/models/News');

router.get('/', siteController.index);
module.exports = router;
