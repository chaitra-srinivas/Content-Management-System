const inquirer = require("inquirer");

const department = require("./src/department");
const role = require("./src/roles");
const employee = require("./src/employees");
const addDepartment = require("./src/addDepartment");
const addRole = require("./src/addRole");

const questions = require("./questions");

// Get department name from user

async function addDepartmentName() {
  const department_details = await inquirer.prompt(questions.departmentDetails);
  await addDepartment.addDepartment(department_details.department_name);
}

// Get role details from the user

async function addRoleName() {
  const role_details = await inquirer.prompt(questions.roleDetails);
  await addRole.addRole(
    role_details.role_title,
    role_details.salary,
    role_details.department_name
  );
}

async function askQuestions() {
  let menuOption = "notdefined";

  while (menuOption != "Exit") {
    const userChoice = await inquirer.prompt(questions.menuOptions);
    menuOption = userChoice.menuOption;
    switch (menuOption) {
      case "View all departments":
        await department.viewAllDepartments();
        break;
      case "View all roles":
        await role.viewAllRoles();
        break;
      case "View all employees":
        await employee.viewAllEmployees();
        break;
      case "Add department":
        await addDepartmentName();
        break;
      case "Add role":
        await addRoleName();
        break;
      case "Exit":
        break;
      default:
        console.log("Not a valid input");
        throw exception;
    }
  }
  process.exit();
}

askQuestions();
