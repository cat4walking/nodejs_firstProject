const express = require('express');
const router = express.Router();
const loginController = require('../common/controllers/LoginController');


router.post('/register', loginController.register);
router.post('/login', loginController.login);
router.get('/', loginController.index);

module.exports = router;