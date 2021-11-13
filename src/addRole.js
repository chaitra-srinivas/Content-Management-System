const connect = require("../config/connection");

async function addRole(role_title, salary, department_name) {
  const connection = await connect();
  const resultId = await connection.execute(
    `SELECT id from department where name = ${department_name}`
  );
  const result = await connection.execute(
    `INSERT INTO role (role_title, salary, department_id) VALUES(?,?,?)`[
      (role_title, salary, resultId)
    ]
  );
  console.log(`\n Successfully added role!`);
}

module.exports = { addRole };
