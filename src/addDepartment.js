const connect = require("../config/connection");

async function addDepartment(department_name) {
  const connection = await connect();
  const result = await connection.execute(
    `INSERT INTO department (name) VALUES (?);`,
    [department_name]
  );
  console.log(`\n Successfully added department!`);
}

module.exports = { addDepartment };
