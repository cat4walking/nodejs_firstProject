const express = require('express');
const router = express.Router();
const memberController = require('../app/controllers/MemberController');

router.get('/create', memberController.create);
router.get('/:slug', memberController.show);
router.post('/form-action', memberController.formAction);
router.get('/:id/edit', memberController.edit);
router.put('/:id', memberController.update);
router.patch('/:id/restore', memberController.restore);
router.delete('/:id', memberController.destroy);
router.delete('/:id/delete', memberController.delete);
router.post('/successfully', memberController.successfully);

module.exports = router;
