const { readTalkers } = require('../utils/readAndWriteFiles');

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
};