const checkTalker = require('../db/checkTalker');
const connection = require('../db/conn');
const contructor = require('../utils/construtor');
const {
  readTalkers,
  insertTalkerFile,
  updateTalker,
  deleteTalk,
  searchFilter,
  searchEqual,
  updateRate,
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

  static async deleteTalker(req, res) {
    const { id } = req.params;
    try {
      await deleteTalk(id);
      console.log('chegeui aqui');
      return res.status(204).json();
    } catch (e) {
      res.status(500).json({ message: `Error: ${e}` });
    }
  }

  static async searchTalker(req, res) {
    let result = await readTalkers();

    if (req.query.q) result = searchFilter('name', result, req.query.q);
    if (req.query) result = searchEqual(result, req.query);
    try {
      const data = result || [];
      return res.status(200).json(data);
    } catch (e) {
      res.status(500).json({ message: `Error: ${e}` });
    }
  }

  static async changeRate(req, res) {
    const { id } = req.params;
    const { rate } = req.body;
    try {
      await updateRate(rate, id);
      return res.status(204).json();
    } catch (e) {
      res.status(500).json({ message: `Error: ${e}` });
    }
  }

  static async findAllDB(_req, res) {
    const query = 'SELECT * FROM talkers';
    try {
      const [result] = await connection.execute(query);
      const data = contructor(result);
      return res.status(200).json(data);
    } catch (e) {
      res.status(500).json({ message: `Error: ${e}` });
    }
  }
};