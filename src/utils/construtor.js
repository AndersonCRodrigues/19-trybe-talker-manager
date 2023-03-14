const contructor = (array) => {
  const data = [];

  if (array.length) {
    array.forEach((e) => {
      data.push({
        name: e.name,
        age: e.age,
        id: e.id,
        talk: {
          watchedAt: e.talk_watched_at,
          rate: e.talk_rate,
        } });
    });
  }

  return data;
};

module.exports = contructor;