const inquirer = require('inquirer');
// const cTable = require('console.table');
const department  = require('./src/department');


// DB Connection
const db = require('./config/connection');


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

function askQuestions(){

    inquirer.prompt(questions)
        .then((response) => {
    
            switch(response.menuOption){
                case 'View all departments':
                    return department.viewAllDepartments();
                    break;
                case 'Exit':
                    process.exit();
                default:
    
                    console.log('i dont know what you want?');
                    // re ask the questions
                    break;
            }
    
            
        }).then(() => askQuestions())

}    

askQuestions();