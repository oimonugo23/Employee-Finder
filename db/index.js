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
      const result = await query("SELECT id, name AS Department FROM department");
      //return result;
      console.table(result);
    } catch (error) {
      console.log(error);
    }
  }
}

async searchForEmployee() {
  const query = this.query;
  try {
    const result = await query("SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM employee e
LEFT JOIN employee AS m 
ON m.id = e.manager_id
LEFT JOIN role r 
ON e.role_id = r.id
LEFT JOIN department d 
ON r.department_id = d.id"
);
    //return result;
    console.table(result);
  } catch (error) {
    console.log(error);
  }
}
}
module.exports = new DB(connection);
