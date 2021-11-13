const connect = require("../config/connection");

async function addRole(role_title, salary,department_id) {
  const connection = await connect();

  const result = await connection.execute(
    `INSERT INTO role (title, salary,department_id) VALUES(?,?,?);`,
    [role_title, salary,department_id]
  );
  console.log(`\n Successfully added role!`);
}

module.exports = { addRole };
