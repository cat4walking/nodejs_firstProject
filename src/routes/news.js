const express = require('express');
const router = express.Router();
const newsController = require('../common/controllers/NewsController');
const upload = require('../common/middlewares/UploadMiddleware');
const vertify = require('../common/token/vertifyToken');


router.put('/:id', upload.single('image'), newsController.update);
router.delete('/:id/deleteOne', newsController.deleteOne);
router.post('/form-action', newsController.formAction);
router.post('/action-finally', newsController.actionFinally);
router.get('/:id/edit', newsController.edit);
router.get('/create', newsController.create);
router.post('/successfully', upload.single('image'), newsController.successfully);
router.get('/:slug', newsController.show);
router.delete('/:id', newsController.destroy);
router.get('/', newsController.index);
module.exports = router;
