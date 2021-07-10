const express = require('express');
const router = express.Router();
const memberController = require('../app/controllers/MemberController');

router.get('/create', memberController.create);
router.get('/:slug', memberController.show);
router.get('/:id/edit', memberController.edit);
router.put('/:id', memberController.update);
router.delete('/:id', memberController.destroy);
router.post('/successfully', memberController.successfully);

module.exports = router;
