const express = require('express');
const router = express.Router();
const memberController = require('../common/controllers/MemberController');

router.get('/create', memberController.create);
router.get('/:slug', memberController.show);
router.post('/action-finally', memberController.actionFinally);
router.delete('/:id/deleteOne', memberController.permaDelete);
router.post('/form-action', memberController.formAction);
router.get('/:id/edit', memberController.edit);
router.put('/:id', memberController.update);
router.patch('/:id/restore', memberController.restore);
router.delete('/:id', memberController.destroy);
router.post('/successfully', memberController.successfully);

module.exports = router;
