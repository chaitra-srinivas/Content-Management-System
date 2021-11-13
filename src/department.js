const connect = require("./../config/connection");

async function viewAllDepartments() {
  const connection = await connect();
  const result = await connection.execute(`SELECT * FROM department`);
  const rows = result[0];
  console.table(rows);
  return rows;
 
}

module.exports = {
  viewAllDepartments
};
