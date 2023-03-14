const createToken = require('../utils/createToken');

module.exports = class UserController {
  static login(req, res) {
    try {
      const token = createToken();
      res.status(200).json({ token });
    } catch (e) {
      res.status(500).json({ message: `Error: ${e}` });
    }
  }
};