const inquirer = require("inquirer");

const department = require("./src/department");
const role = require("./src/roles");
const employee = require("./src/employees");
const addDepartment = require("./src/addDepartment");
const addRole = require("./src/addRole");
const addEmployee = require("./src/addEmployee");
const updateEmployee = require("./src/updateEmployee");

const questions = require("./questions");

// Get department name from user and store and store in database

async function addDepartmentName() {
  const department_details = await inquirer.prompt(questions.departmentDetails);
  await addDepartment.addDepartment(department_details.department_name);
}

// Get role details from the user and store in database

async function addRoleName() {
  const departmentList = await department.getAllDepartments();
  let departmentNames = [];
  for (let i = 0; i < departmentList.length; i++) {
    departmentNames.push(departmentList[i].name);
  }

  questions.roleDetails.push({
    type: "list",
    name: "department_name",
    message: "Please choose a department:",
    choices: departmentNames,
  });

  const role_details = await inquirer.prompt(questions.roleDetails);

  const department_id = departmentList.filter(
    (res) => res.name === role_details.department_name
  )[0].id;

  await addRole.addRole(
    role_details.role_title,
    role_details.salary,
    department_id
  );
}

// Get Employee Details from user and store in Database

async function addEmployeeDetails() {
  // Get all the roles
  const rolesList = await role.getAllRoles();
  let roleNames = [];
  for (let i = 0; i < rolesList.length; i++) {
    roleNames.push(rolesList[i].title);
  }

  // Push role choices into the inquirer prompt

  questions.employeeDetails.push({
    type: "list",
    name: "role_name",
    message: "Please choose a role title for the employee:",
    choices: roleNames,
  });

  // Get all employees
  const employeeList = await employee.getAllEmployees();

  let managerNames = [];
  managerNames.push("NULL");
  for (let i = 0; i < employeeList.length; i++) {
    managerNames.push(
      employeeList[i].first_name + " " + employeeList[i].last_name
    );
  }

  // push manager choices into inquirer prompt

  questions.employeeDetails.push({
    type: "list",
    name: "manager_name",
    message: "Please choose a manager for the employee",
    choices: managerNames,
  });

  // Get user choice for employee from inquirer

  const employee_details = await inquirer.prompt(questions.employeeDetails);

  // Get role id for the chosen role ---------Moved above

  const role_id = rolesList.filter(
    (res) => res.title === employee_details.role_name
  )[0].id;

  let manager_id = null;

  if (employee_details.manager_name !== "NULL") {
    manager_id = employeeList.filter(
      (res) =>
        res.first_name + " " + res.last_name === employee_details.manager_name
    )[0].id;
  }

  await addEmployee.addEmployee(
    employee_details.first_name,
    employee_details.last_name,
    role_id,
    manager_id
  );
}

// Get new role for an employee from the user and update database
async function updateEmployeeRole() {
  // Get all employees
  const employeeList = await employee.getAllEmployees();

  let employeeNames = [];
  for (let i = 0; i < employeeList.length; i++) {
    employeeNames.push(
      employeeList[i].first_name + " " + employeeList[i].last_name
    );
  }

  // User prompted with a list of employee names
  questions.updateEmployeeRole.push({
    type: "list",
    name: "employee_name",
    message: "Please choose an employee to assign a new role:",
    choices: employeeNames,
  });

  // Get a list of available roles

  const rolesList = await role.getAllRoles();
  let roleNames = [];
  for (let i = 0; i < rolesList.length; i++) {
    roleNames.push(rolesList[i].title);
  }

  // Push role choices into the inquirer prompt

  questions.updateEmployeeRole.push({
    type: "list",
    name: "role_name",
    message: "Please choose a new role title for the employee:",
    choices: roleNames,
  });

  const newRoleDetails = await inquirer.prompt(questions.updateEmployeeRole);

  const new_role_id = rolesList.filter(
    (res) => res.title === newRoleDetails.role_name
  )[0].id;
  const employee_id = employeeList.filter(
    (res) =>
      res.first_name + " " + res.last_name === newRoleDetails.employee_name
  )[0].id;

  await updateEmployee.udpateEmployeeRole(new_role_id, employee_id);
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
      case "Add an employee":
        await addEmployeeDetails();
        break;
      case "Update employee role":
        await updateEmployeeRole();
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
