const connect = require("../config/connection");


async function viewAllEmployees() {
  const connection = await connect();
    const result = await connection.execute(`SELECT 
      employee.id, 
      employee.first_name, 
      employee.last_name,
      role.title, 
      department.name, 
      role.salary, 
      CONCAT(manager.first_name, ' ', manager.last_name) AS manager
      FROM employee
      JOIN role 
      ON employee.role_id = role.id
      LEFT OUTER JOIN employee AS manager
      ON manager.role_id = employee.manager_id
      JOIN department
      ON department.id = role.department_id
      ORDER BY employee.id`);
    const rows = result[0];
    console.table(rows);
}

async function getAllEmployees() {
   const connection = await connect();
     const result = await connection.execute(`SELECT 
       * FROM employee`);
     const rows = result[0];
     return rows;
 }

module.exports = { viewAllEmployees,getAllEmployees };
