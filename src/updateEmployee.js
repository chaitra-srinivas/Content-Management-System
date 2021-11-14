const connect = require("../config/connection");

async function udpateEmployeeRole(new_role_id,employee_id){
    const connection = await connect();
    const result = connection.execute(`UPDATE employee SET role_id = ${new_role_id} WHERE id= ${employee_id}`);
    console.log(`\n Successfully updated employee role!`);

}

module.exports = {udpateEmployeeRole};