const connect = require("./../config/connection");

async function viewAllDepartments() {
  const mysql = await connect();
  const result = await mysql.execute(`SELECT * FROM department`);
  const rows = result[0];
  console.table(rows);
}

module.exports = {
  viewAllDepartments,
};
