const checkRate = (rate) => {
  const test01 = Number.isInteger(rate);
  const test02 = rate > 0 && rate < 6;

  return test01 && test02;
};

module.exports = checkRate;