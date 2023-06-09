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
  checkDateSearch,
  ratePatchVerify,
} = require('../middlewares/talkerVerify');

const router = Router();

router.get('/', TalkerController.allTalks)
  .get('/search', tokenVerify, checkInteger, checkDateSearch, TalkerController.searchTalker)
  .get('/db', TalkerController.findAllDB)
  .patch('/rate/:id', tokenVerify, ratePatchVerify, TalkerController.changeRate)
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