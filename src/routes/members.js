const express = require('express');
const router = express.Router();
const memberController = require('../app/controllers/MemberController');

router.get('/create', memberController.create);
router.get('/:slug', memberController.show);
router.post('/successfully', memberController.successfully);

module.exports = router;
