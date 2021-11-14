const connect = require('../config/connection');

async function viewAllRoles(){
    const mysql = await connect();
    const result = await mysql.execute(`SELECT
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
    return rows;
}        

module.exports = {viewAllRoles};