const express = require('express');
const router = express.Router();
const allController = require('../app/controllers/AllController');

router.get('/uploaded/members', allController.uploadedMembers);
router.get('/trash/members', allController.trashMembers);


module.exports = router;
