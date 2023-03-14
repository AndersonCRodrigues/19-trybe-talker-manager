const { Router } = require('express');
const TalkerController = require('../controllers/talkerController');
const tokenVerify = require('../middlewares/tokenVerify');
const {
  nameVerify,
  ageVerify,
  talkVerify,
  watchedAtVerify,
  rateVerify,
} = require('../middlewares/talkerVerify');

const router = Router();

router.get('/', TalkerController.allTalks)
  .get('/:id', TalkerController.talkerId)
  .post('/',
            tokenVerify,
            nameVerify,
            ageVerify,
            talkVerify,
            watchedAtVerify,
            rateVerify,
            TalkerController.addTalker);
module.exports = router;