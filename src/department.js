const connect = require("./../config/connection");

function viewAllDepartments() {
  return connect()
    .then((mysql) => {
      return mysql.execute("SELECT * FROM department");
    })
    .then((result) => {
      const rows = result[0];
      const fields = result[1];
      //console.log(fields);
      console.table(rows);
    });
}



module.exports = {
  viewAllDepartments,
};
