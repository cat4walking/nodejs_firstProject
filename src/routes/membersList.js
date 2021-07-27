const express = require('express');
const router = express.Router();
const membersListController = require('../app/controllers/MembersListController');

router.get('/', membersListController.index);
module.exports = router;
