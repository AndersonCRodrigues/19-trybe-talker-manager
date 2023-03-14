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
};