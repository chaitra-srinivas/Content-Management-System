const inquirer = require("inquirer");

module.exports = {
  menuOptions: [
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
  ],
};
