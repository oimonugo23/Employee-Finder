const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql4523",
  database: "employees",
});

connection.connect();

module.exports = connection;
