const inquirer = require("inquirer");
const department = require("./src/department");
const role = require("./src/roles");
const employee = require("./src/employees");
const addDepartment = require("./src/addDepartment");

const connect = require("./config/connection");

const questions = require("./questions");

// get department name

async function getDepartmentName() {
  const department_details = await inquirer.prompt(questions.departmentDetails)
      console.log(department_details.department_name);
      addDepartment.addDepartment(department_details.department_name);
      askQuestions();
}

async function askQuestions() {
   
    const useChoice = await inquirer.prompt(questions.menuOptions)
        switch (useChoice.menuOption) {
          case "View all departments":
            return department.viewAllDepartments();
  
          case "View all roles":
            return role.viewAllRoles();
  
          case "View all employees":
            return employee.viewAllEmployees();
  
          case "Add department":
            getDepartmentName();
            break;
          //    return addDepartment.addDepartment(getDepartmentName);
  
          case "Exit":
            process.exit();
          default:
            console.log("i dont know what you want?");
           
            break;
        }
      
  }

askQuestions();
