const { Router } = require('express');
const TalkerController = require('../controllers/talkerController');
const tokenVerify = require('../middlewares/tokenVerify');
const {
  nameVerify,
  ageVerify,
  talkVerify,
  watchedAtVerify,
  rateVerify,
  checkInteger,
} = require('../middlewares/talkerVerify');

const router = Router();

router.get('/', TalkerController.allTalks)
  .get('/search', tokenVerify, checkInteger, TalkerController.searchTalker)
  .get('/:id', TalkerController.talkerId)
  .post('/',
            tokenVerify,
            nameVerify,
            ageVerify,
            talkVerify,
            watchedAtVerify,
            rateVerify,
            TalkerController.addTalker)
  .put('/:id',
            tokenVerify,
            nameVerify,
            ageVerify,
            talkVerify,
            watchedAtVerify,
            rateVerify,
            TalkerController.putTalker)
  .delete('/:id', tokenVerify, TalkerController.deleteTalker);

module.exports = router;