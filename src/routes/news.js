const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');
const upload = require('../app/middlewares/UploadMiddleware');


router.get('/create', newsController.create);
router.post('/successfully', upload.single('image'), newsController.successfully);
router.get('/:slug', newsController.show);
router.get('/', newsController.index);
module.exports = router;
