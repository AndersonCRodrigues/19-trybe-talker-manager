const { Router } = require('express');
const TalkerController = require('../controllers/talkerController');

const router = Router();

router.get('/', TalkerController.allTalks)
  .get('/:id', TalkerController.talkerId);
module.exports = router;