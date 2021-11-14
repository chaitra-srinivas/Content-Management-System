const connect = require("../config/connection");

async function viewAllRoles() {
  const connection = await connect();
  const result = await connection.execute(`SELECT
         role.id, 
         role.title, 
         department.name, 
         role.salary 
         FROM role 
         JOIN department 
         ON role.department_id = department.id 
         ORDER BY role.id`);
  const rows = result[0];
  console.table(rows);
}

async function getAllRoles() {
  const connection = await connect();
  const result = await connection.execute(`SELECT role.id, 
role.department_id,
role.title, 
role.salary 
FROM role`);
  return result[0];
}

module.exports = { viewAllRoles, getAllRoles };
