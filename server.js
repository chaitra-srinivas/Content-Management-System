const inquirer = require("inquirer");

const department = require("./src/department");
const role = require("./src/roles");
const employee = require("./src/employees");
const addDepartment = require("./src/addDepartment");
const addRole = require("./src/addRole");

const questions = require("./questions");
const Choices = require("inquirer/lib/objects/choices");
const Choice = require("inquirer/lib/objects/choice");

// Get department name from user

async function addDepartmentName() {
  const department_details = await inquirer.prompt(questions.departmentDetails);
  await addDepartment.addDepartment(department_details.department_name);
}

// Get role details from the user

async function addRoleName() {
  let departmentList = [];
  departmentList = await department.viewAllDepartments();

  console.log("departmentList",departmentList );

  let departmentNames = [];
  for (let i = 0; i < departmentList.length; i++) {
    departmentNames.push(departmentList[i].name);
  }

  console.log("departmentNames",departmentNames );

  questions.roleDetails.push({
    type: "list",
    name: "department_name",
    message: "Please choose a department:",
    choices: departmentNames,
  });

  const role_details = await inquirer.prompt(questions.roleDetails);

  console.log("roleDetails", role_details);

  const department_id = departmentList.filter(
    (res) => res.name === role_details.department_name
  )[0].id;

  console.log("department_id",department_id);

  await addRole.addRole(
    role_details.role_title,
    role_details.salary,
    department_id
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
