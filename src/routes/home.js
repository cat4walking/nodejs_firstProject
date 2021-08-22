const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/HomeController');
const vertify = require('../app/token/vertifyToken');

router.get('/', siteController.index);
module.exports = router;
