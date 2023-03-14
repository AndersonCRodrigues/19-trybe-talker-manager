const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PORT || 'password',
  database: process.env.MYSQL_DATABASE || 'TalkerDB',
  host: process.env.MYSQL_HOSTNAME || 'db',
});

module.exports = connection;