const { Router } = require('express');
const UserController = require('../controllers/userController');
const { emailVerify, passwordVerify } = require('../middlewares/userVerify');

const router = Router();

router.post('/', emailVerify, passwordVerify, UserController.login);

module.exports = router;