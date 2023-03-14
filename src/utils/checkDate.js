const checkDay = (day) => day <= 31 && day >= 1 && Number.isInteger(day);
const checkMonth = (month) => month <= 12 && month >= 1 && Number.isInteger(month);
const checkYear = (year) => Number.isInteger(+year) && year.length === 4;

const checkDate = (date) => {
  const data = date.split('/');
  const day = checkDay(+data[0]);
  const month = checkMonth(+data[1]);
  const year = checkYear(data[2]);

  return day && month && year;
};

module.exports = checkDate;
