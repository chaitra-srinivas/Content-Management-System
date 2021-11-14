const connect = require("../config/connection");

async function addEmployee(first_name, last_name, role_id, manager_id) {
  const connection = await connect();
  const result = await connection.execute(
    `INSERT INTO employee(first_name,last_name,role_id,manager_id)
        VALUES(?,?,?,?);`,[first_name,last_name,role_id,manager_id]
  );
  console.log(`\n Successfully added employee!`);
}

module.exports = {addEmployee};