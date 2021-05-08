const inquirer = require("inquirer");
const db = require("./db/index");

startPrompt();
async function startPrompt() {
  const answer = await inquirer.prompt({
    type: "list",
    name: "banana",
    message: "what query would you like to perform?",
    choices: ["view departments", "view roles", "view employees", "view employees by manager"],
  });

  if (answer.banana === "view departments") {
    viewDepartments();
  } else if (answer.banana === "view employees") {
    viewEmployees();
    }
    else if (answer.banana === "view roles") {
      viewRoles();
    }
    else if (answer.banana === "view employees by manager") {
      viewEByManager();
  }

async function viewDepartments() {
  const departments = await db.searchForDept();
  console.log("FRONT END", departments);
}

async function viewEmployees() {
  const employees = await db.searchForEmployee();
  console.log("FRONT END", employees);
}
async function viewRoles() {
  const roles = await db.searchForRole();
  console.log("FRONT END", roles);
}

async function viewEByManager() {
  const ebymanagers = await db.searchForEmployeeByManager();
  console.log("FRONT END", ebymanagers);
}


}