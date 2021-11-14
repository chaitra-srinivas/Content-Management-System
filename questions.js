module.exports = {
  menuOptions: {
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
      "Update employee role",
      "Exit",
    ],
  },

  departmentDetails: {
    type: "input",
    name: "department_name",
    message: "Please enter the department name:",
  },

  roleDetails: [
    {
      type: "input",
      name: "role_title",
      message: "Please enter the role title:",
    },
    {
      type: "input",
      name: "salary",
      message: "Please enter salary for the role:",
    },
  ],

  employeeDetails: [
    {
      type: "input",
      name: "first_name",
      message: "Please enter employee's first name:",
    },

    {
      type: "input",
      name: "last_name",
      message: "Please enter employee's last name:",
    },
  ],

  updateEmployeeRole:[

  ],

};
