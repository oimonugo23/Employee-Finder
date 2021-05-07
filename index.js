const inquirer = require("inquirer");
const db = require("./db/index");

startPrompt();
async function startPrompt() {
  const answer = await inquirer.prompt({
    type: "list",
    name: "banana",
    message: "what query would you like to perform?",
    choices: ["view departments", "view roles", "view employees"],
  });

  if (answer.banana === "view departments") {
    viewDepartments();
  } else {
  }
}
async function viewDepartments() {
  const departments = await db.searchForDept();
  console.log("FRONT END", departments);
}
