const express = require('express');
const router = express.Router();
const membersListController = require('../app/controllers/MembersListController');
const vertify = require('../app/token/vertifyToken');

router.get('/', membersListController.index);
module.exports = router;
