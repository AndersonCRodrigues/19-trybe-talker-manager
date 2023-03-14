const fs = require('fs/promises');

const writeFile = async (file) => {
  await fs.writeFile('src/talker.json', JSON.stringify(file, null, 2));
};

const readTalkers = async () => {
  try {
    const talker = await fs.readFile('src/talker.json', 'utf8');
    return JSON.parse(talker);
  } catch (error) {
    const err = new Error('Error opening file');
    err.statusCode = 500;
    throw err;
  }
};

const insertTalkerFile = async (param) => {
  try {
    const arrayTalker = await readTalkers();
    const index = +arrayTalker[arrayTalker.length - 1].id;
    const talker = param;

    talker.id = index + 1;
    arrayTalker.push(talker);

    await writeFile(arrayTalker);

    return talker;
  } catch (error) {
    const err = new Error('Error writing file');
    err.statusCode = 500;
    throw err;
  }
};

const updateTalker = async (params, id) => {
  try {
    const arrayTalker = await readTalkers();

    const talker = arrayTalker.find((e) => e.id === +id);

    talker.name = params.name;
    talker.age = params.age;
    talker.talk = params.talk;

    await writeFile(arrayTalker);
    return talker;
  } catch (error) {
   return null;
  }
};

const deleteTalk = async (id) => {
  try {
    const arrayTalker = await readTalkers();
    const newArray = arrayTalker.filter((e) => e.id !== +id);
    await writeFile(newArray);
    return null;
  } catch (e) {
    return null;
  }
};

const searchFilter = (type, array, query) => {
  try {
    const arraySearch = array.filter((e) => e[type].includes(query));
    return arraySearch;
  } catch (e) {
    return null;
  }
};

const searchEqual = (type, array, query) => {
  try {
    const arraySearch = array.filter((e) => e.talk[type] === query);
    return arraySearch;
  } catch (e) {
    return null;
  }
};

module.exports = {
  readTalkers,
  insertTalkerFile,
  updateTalker,
  deleteTalk,
  searchFilter,
  searchEqual,
};