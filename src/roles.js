const connect = require('../config/connection');

async function viewAllRoles(){
    const mysql = await connect();
    const result_1 = await mysql.execute(`SELECT
         role.id, 
         role.title, 
         department.name, 
         role.salary 
         FROM role 
         JOIN department 
         ON role.department_id = department.id 
         ORDER BY role.id`);
    const rows = result_1[0];
    console.table(rows);
}        

module.exports = {viewAllRoles};