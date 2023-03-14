const { Router } = require('express');
const TalkerController = require('../controllers/talkerController');

const router = Router();

router.get('/', TalkerController.allTalks);

module.exports = router;