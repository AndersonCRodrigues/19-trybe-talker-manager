const { readTalkers } = require('../utils/readAndWriteFiles');

const checkTalker = async (id) => {
  const talker = await readTalkers();
  const talkerExists = talker.filter((e) => e.id === +id);

  return talkerExists.length > 0;
};

module.exports = checkTalker;