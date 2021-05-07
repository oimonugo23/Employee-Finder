const connection = require("./connection");
const util = require("util");

class DB {
  constructor(connection, query) {
    this.connection = connection;
    this.query = util.promisify(this.connection.query).bind(this.connection);
  }

  async searchForDept() {
    const query = this.query;
    try {
      const result = await query("SELECT * FROM department");
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new DB(connection);
