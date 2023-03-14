const createToken = () => {
  const chars = 'abcdefghijlkmnopqrstuvwxyz0123456789';
  let genToken = '';

  for (let i = 0; i < 16; i += 1) {
    genToken += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return genToken;
};

module.exports = createToken;