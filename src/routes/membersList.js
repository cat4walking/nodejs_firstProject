const express = require('express');
const router = express.Router();
const membersListController = require('../common/controllers/MembersListController');
const vertify = require('../common/token/vertifyToken');

router.get('/', membersListController.index);
module.exports = router;
