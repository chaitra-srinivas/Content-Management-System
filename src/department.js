const connect = require("./../config/connection");

async function viewAllDepartments() {
  const mysql = await connect();
  const result_1 = await mysql.execute(`SELECT * FROM department`);
  const rows = result_1[0];
  const fields = result_1[1];
  //console.log(fields);
  console.table(rows);
}

module.exports = {
  viewAllDepartments,
};
