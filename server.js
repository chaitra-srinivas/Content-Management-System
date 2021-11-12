const inquirer = require("inquirer");
const department = require("./src/department");
const role = require("./src/roles");
const employee = require("./src/employees");

const questions = [
  {
    type: "list",
    name: "menuOption",
    message: "Please choose one of the following options:",
    choices: [
      "View all departments",
      "Add department",
      "View all roles",
      "Add role",
      "View all employees",
      "Add an employee",
      "Exit",
    ],
  },
];

function askQuestions() {
  inquirer
    .prompt(questions)
    .then((response) => {
      switch (response.menuOption) {
        case "View all departments":
          return department.viewAllDepartments();

        case "View all roles":
          return role.viewAllRoles();

        case "View all employees":
          return employee.viewAllEmployees();

        case "Exit":
          process.exit();
        default:
          console.log("i dont know what you want?");

          break;
      }
    })
    .then(() => askQuestions());
}

askQuestions();
