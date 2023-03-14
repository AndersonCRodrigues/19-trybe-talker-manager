const checkTalker = require('../db/checkTalker');
const {
  readTalkers,
  insertTalkerFile,
  updateTalker,
} = require('../utils/readAndWriteFiles');

module.exports = class TalkerController {
  static async allTalks(req, res) {
    try {
      const talker = await readTalkers();

      const data = talker || [];

      res.status(200).json(data);
    } catch (e) {
      res.status(500).json({ message: `Error: ${e}` });
    }
  }

  static async talkerId(req, res) {
    const { id } = req.params;
    try {
      const talker = await readTalkers();
      const data = talker.find((talk) => talk.id === +id);
      if (data) {
        return res.status(200).json(data);
      }
      res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    } catch (e) {
      res.status(500).json({ message: `Error: ${e}` });
    }
  }

  static async addTalker(req, res) {
    const { name, age, talk } = req.body;
    try {
      const talker = await insertTalkerFile({ name, age, talk });
      res.status(201).json(talker);
    } catch (e) {
      res.status(500).json({ message: `Error: ${e}` });
    }
  }

  static async putTalker(req, res) {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    try {
      const verify = await checkTalker(id);
      if (verify) {
        const talker = await updateTalker({ name, age, talk }, id);
        return res.status(200).json(talker);
      }
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    } catch (e) {
      res.status(500).json({ message: `Error: ${e}` });
    }
  }
};